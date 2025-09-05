import "./style.css";
import analytics from "./analytics.js";
import i18n from "./i18n.js";

document.querySelector("#app").innerHTML = `
  <div class="gradient text-white selection:bg-white/20 h-screen flex flex-col p-4 overflow-hidden">
    <!-- Card Container -->
    <div class="flex-1 flex">
      <div class="w-full max-w-2xl mx-auto flex flex-col">
        <div class="glass rounded-3xl p-8 ring-1 ring-white/10 shadow-2xl flex-1 flex flex-col">
          <!-- Content -->
          <div class="flex-1 flex items-center justify-center">
            <div class="text-center">
              <div class="h-16 w-16 rounded-3xl bg-white/10 flex items-center justify-center text-2xl font-semibold mx-auto mb-4">L</div>
              <h1 class="text-3xl font-semibold tracking-tight mb-2">Lumare</h1>
              <p class="text-white/60" data-i18n="hero.subtitle">Underwater photo & video editing for iOS</p>
            </div>
          </div>
          
          <!-- Button inside card -->
          <div class="pt-4 flex flex-col items-center space-y-3">
            <!-- Black App Store Button - Hidden for now -->
            <a href="#" id="app-store-btn-black" class="hidden w-full flex items-center justify-center text-white bg-black h-14 rounded-xl hover:opacity-90 active:opacity-80 transition-all duration-200 transform hover:scale-105">
              <div class="mr-3">
                <svg viewBox="0 0 384 512" width="30">
                  <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                  </path>
                </svg>
              </div>
              <div>
                <div class="text-xs" data-i18n="hero.download">Download on the</div>
                <div class="-mt-1 font-sans text-xl font-semibold" data-i18n="hero.appStore">App Store</div>
              </div>
            </a>
            
            <!-- White App Store Button -->
            <a href="#" id="app-store-btn-white" class="w-full flex items-center justify-center text-black bg-white border border-black h-14 rounded-xl hover:opacity-90 active:opacity-80 transition-all duration-200 transform hover:scale-105">
              <div class="mr-3">
                <svg viewBox="0 0 384 512" width="30">
                  <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                  </path>
                </svg>
              </div>
              <div>
                <div class="text-xs" data-i18n="hero.download">Download on the</div>
                <div class="-mt-1 font-sans text-2xl font-semibold" data-i18n="hero.appStore">App Store</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

// Add event listeners
document.addEventListener("DOMContentLoaded", () => {
  const appStoreBtnBlack = document.getElementById("app-store-btn-black");
  const appStoreBtnWhite = document.getElementById("app-store-btn-white");
  const year = document.getElementById("y");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (appStoreBtnBlack) {
    appStoreBtnBlack.addEventListener("click", (e) => {
      e.preventDefault();

      // Track App Store button click
      analytics.trackEvent("app_store_click", {
        category: "conversion",
        label: "ios_app_store_button_black",
      });

      // Open App Store with search for "lumare"
      window.open("https://apps.apple.com/search?term=lumare", "_blank");
    });
  }

  if (appStoreBtnWhite) {
    appStoreBtnWhite.addEventListener("click", (e) => {
      e.preventDefault();

      // Track App Store button click
      analytics.trackEvent("app_store_click", {
        category: "conversion",
        label: "ios_app_store_button_white",
      });

      // Open App Store with search for "lumare"
      window.open("https://apps.apple.com/search?term=lumare", "_blank");
    });
  }
});
