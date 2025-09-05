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
      window.dataLayer.push({
        event: eventName,
        event_category: parameters.category || "engagement",
        event_label: parameters.label || "",
        value: parameters.value || 0,
        ...parameters,
      });
      console.log("Event tracked:", eventName, parameters);
    } else {
      console.warn("Analytics not initialized, event not tracked:", eventName);
    }
  }
}

// Create global analytics instance
const analytics = new Analytics();

// Export for use in other modules
export default analytics;
