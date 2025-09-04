// Internationalization System for Lumare
import en from "./locales/en.json";
import es from "./locales/es.json";

class I18n {
  constructor() {
    this.currentLang = "en";
    this.translations = {};
    this.supportedLanguages = ["en", "es"];
    this.defaultLanguage = "en";

    this.init();
  }

  async init() {
    this.detectLanguage();
    await this.loadTranslations();
    this.updatePageContent();

    // Ensure update runs once DOM is fully parsed
    if (document.readyState === "loading") {
      document.addEventListener(
        "DOMContentLoaded",
        () => this.updatePageContent(),
        { once: true }
      );
    } else {
      this.updatePageContent();
    }

    this.addLanguageSwitcher();
  }

  detectLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get("lang");
    if (langParam && this.supportedLanguages.includes(langParam)) {
      this.currentLang = langParam;
      return;
    }

    const path = window.location.pathname;
    const pathLang = path.split("/")[1];
    if (pathLang && this.supportedLanguages.includes(pathLang)) {
      this.currentLang = pathLang;
      return;
    }

    const browserLang = navigator.language.split("-")[0];
    if (this.supportedLanguages.includes(browserLang)) {
      this.currentLang = browserLang;
      return;
    }

    this.currentLang = this.defaultLanguage;
  }

  async loadTranslations() {
    const map = { en, es };
    this.translations = map[this.currentLang] || map[this.defaultLanguage];
  }

  t(key) {
    const keys = key.split(".");
    let value = this.translations;
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    return value || key;
  }

  updatePageContent() {
    // Set <html lang>
    document.documentElement.setAttribute("lang", this.currentLang);

    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const translation = this.t(key);
      if (element.tagName === "INPUT" && element.type === "placeholder") {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    });

    this.updatePageMeta();
    this.updateLocalizedLinks();
  }

  updatePageMeta() {
    const titleKey = document.querySelector("title")?.getAttribute("data-i18n");
    if (titleKey) {
      document.title = this.t(titleKey);
    }

    const metaDesc = document.querySelector('meta[name="description"]');
    const descKey = metaDesc?.getAttribute("data-i18n");
    if (descKey) {
      metaDesc.setAttribute("content", this.t(descKey));
    }
  }

  updateLocalizedLinks() {
    // Update links with data-i18n-href attribute
    const links = document.querySelectorAll("a[data-i18n-href]");
    links.forEach((link) => {
      const basePath = link.getAttribute("data-i18n-href");
      if (!basePath) return;

      // Add language parameter if not default language
      if (this.currentLang !== this.defaultLanguage) {
        const url = new URL(basePath, window.location.origin);
        url.searchParams.set("lang", this.currentLang);
        link.setAttribute("href", url.pathname + url.search);
      } else {
        link.setAttribute("href", basePath);
      }
    });
  }

  addLanguageSwitcher() {
    const switcher = document.createElement("div");
    switcher.className = "language-switcher fixed top-4 right-4 z-50";
    switcher.innerHTML = `
      <div class="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-2 border border-gray-200 dark:border-gray-600">
        <select class="text-sm font-medium text-gray-700 dark:text-gray-300 bg-transparent border-none outline-none cursor-pointer">
          ${this.supportedLanguages
            .map(
              (lang) => `
            <option value="${lang}" ${
                lang === this.currentLang ? "selected" : ""
              }>
              ${lang === "en" ? "🇺🇸 English" : "🇪🇸 Español"}
            </option>
          `
            )
            .join("")}
        </select>
      </div>
    `;

    const select = switcher.querySelector("select");
    select.addEventListener("change", (e) => {
      this.changeLanguage(e.target.value);
    });

    document.body.appendChild(switcher);
  }

  async changeLanguage(newLang) {
    if (!this.supportedLanguages.includes(newLang)) return;

    this.currentLang = newLang;

    // Update URL with query parameter
    const url = new URL(window.location);
    url.searchParams.set("lang", newLang);
    window.history.pushState({}, "", url);

    // Reload translations and update content
    await this.loadTranslations();
    this.updatePageContent();

    // Update language switcher
    const select = document.querySelector(".language-switcher select");
    if (select) select.value = newLang;
  }

  getCurrentLang() {
    return this.currentLang;
  }

  isSpanish() {
    return this.currentLang === "es";
  }
}

// Create global i18n instance
const i18n = new I18n();

// Export for use in other modules
export default i18n;
