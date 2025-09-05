// Google Tag Manager Analytics Utility
class Analytics {
  constructor() {
    this.gtmId = "GTM-M23BHP2N";
    this.isInitialized = false;
    this.init();
  }

  init() {
    // Wait for GTM dataLayer to be available
    if (typeof window !== "undefined" && window.dataLayer) {
      this.isInitialized = true;
      console.log("Analytics initialized with GTM:", this.gtmId);
    } else {
      // Retry initialization after a short delay
      setTimeout(() => this.init(), 100);
    }
  }

  // Track custom events
  trackEvent(eventName, parameters = {}) {
    if (this.isInitialized && window.dataLayer) {
      // Send to Google Tag Manager
      window.dataLayer.push({
        event: eventName,
        event_category: parameters.category || "engagement",
        event_label: parameters.label || "",
        value: parameters.value || 0,
        ...parameters,
      });
      console.log("Event tracked to GTM:", eventName, parameters);
    } else {
      console.warn("Analytics not initialized, event not tracked:", eventName);
    }

    // Also send to Facebook Pixel
    this.trackFacebookEvent(eventName, parameters);
  }

  // Track Facebook events
  trackFacebookEvent(eventName, parameters = {}) {
    if (typeof window !== "undefined" && window.fbq) {
      // Map GTM events to Facebook events
      const facebookEvent = this.mapToFacebookEvent(eventName, parameters);

      if (facebookEvent) {
        if (facebookEvent.type === "standard") {
          window.fbq("track", facebookEvent.event, facebookEvent.data);
        } else {
          window.fbq("trackCustom", facebookEvent.event, facebookEvent.data);
        }
        console.log(
          "Event tracked to Facebook:",
          facebookEvent.event,
          facebookEvent.data
        );
      }
    } else {
      console.warn("Facebook Pixel not available");
    }
  }

  // Map GTM events to Facebook events
  mapToFacebookEvent(eventName, parameters) {
    const eventMappings = {
      app_store_click: {
        type: "standard",
        event: "Lead",
        data: {
          content_name: "Lumare iOS App",
          content_category: "Mobile App Download",
          value: parameters.value || 0,
          currency: "USD",
          custom_data: {
            button_type: parameters.label || "unknown",
            category: parameters.category || "conversion",
          },
        },
      },
      page_view: {
        type: "standard",
        event: "PageView",
        data: {},
      },
      contact: {
        type: "standard",
        event: "Contact",
        data: {
          content_name: parameters.content_name || "Contact Form",
          value: parameters.value || 0,
          currency: "USD",
        },
      },
    };

    return (
      eventMappings[eventName] || {
        type: "custom",
        event: eventName,
        data: {
          content_name: parameters.label || eventName,
          content_category: parameters.category || "engagement",
          value: parameters.value || 0,
          currency: "USD",
          custom_data: parameters,
        },
      }
    );
  }
}

// Create global analytics instance
const analytics = new Analytics();

// Export for use in other modules
export default analytics;
