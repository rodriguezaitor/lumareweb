import "./style.css";
import analytics from "./analytics.js";
import i18n from "./i18n.js";

document.querySelector("#app").innerHTML = `
  <div class="min-h-screen gradient text-white selection:bg-white/20">
    <main class="mx-auto max-w-2xl px-6 pt-20 pb-24">
      <div class="glass rounded-3xl p-8 ring-1 ring-white/10 shadow-2xl">
        <div class="flex items-center gap-3 mb-6">
          <div class="h-10 w-10 rounded-2xl bg-white/10 flex items-center justify-center text-sm font-semibold">L</div>
          <div>
            <h1 class="text-2xl font-semibold tracking-tight">Lumare</h1>
            <p class="text-sm text-white/60" data-i18n="hero.subtitle">Underwater photo & video editing for iOS</p>
          </div>
        </div>

        <p class="text-white/80 leading-relaxed mb-8" data-i18n="hero.description">
          A small app for people who shoot and edit underwater. No big promises.
        </p>

        <!-- iOS App Store Button -->
        <a href="#" id="app-store-btn" class="w-full flex items-center justify-center px-6 py-4 bg-black text-white rounded-2xl hover:opacity-90 active:opacity-80 transition-all duration-200 transform hover:scale-105">
          <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.96-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.03-3.11z"/>
          </svg>
          <div class="text-left">
            <div class="text-xs text-white/60" data-i18n="hero.download">Download on the</div>
            <div class="text-sm font-semibold" data-i18n="hero.appStore">App Store</div>
          </div>
        </a>
      </div>

      <footer class="mt-8 text-center text-xs text-white/40">© <span id="y"></span> Lumare</footer>
    </main>
  </div>
`;

// Add event listeners
document.addEventListener("DOMContentLoaded", () => {
  const appStoreBtn = document.getElementById("app-store-btn");
  const year = document.getElementById("y");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (appStoreBtn) {
    appStoreBtn.addEventListener("click", (e) => {
      e.preventDefault();

      // Track App Store button click
      analytics.trackEvent("app_store_click", {
        category: "conversion",
        label: "ios_app_store_button",
      });

      // For now, show coming soon message
      // In the future, this will link to actual App Store URL
      alert("Coming soon to the App Store! 🚀");
    });
  }
});
