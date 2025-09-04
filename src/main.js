import "./style.css";
import analytics from "./analytics.js";
import i18n from "./i18n.js";

document.querySelector("#app").innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
    <div class="text-center space-y-8 p-8">
      <div class="space-y-4">
        <h1 class="text-6xl font-bold text-gray-900 dark:text-white" data-i18n="title">
          Hello World
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300" data-i18n="subtitle">
          Welcome to Lumare with Tailwind CSS v4
        </p>
      </div>
      
      <div class="space-y-4">
        <div class="inline-flex items-center space-x-2 bg-white dark:bg-gray-700 rounded-lg px-6 py-3 shadow-lg">
          <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span class="text-gray-700 dark:text-gray-300 font-medium" data-i18n="status">Vite + Tailwind CSS v4</span>
        </div>
        
        <div class="flex justify-center space-x-4">
          <button id="get-started-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200" data-i18n="getStarted">
            Get Started
          </button>
          <button id="learn-more-btn" class="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold py-2 px-6 rounded-lg transition-colors duration-200" data-i18n="learnMore">
            Learn More
          </button>
        </div>
        
        <!-- Example localized links -->
        <div class="mt-8 space-y-2">
          <p class="text-sm text-gray-500 dark:text-gray-400" data-i18n="exampleLinks">Example localized links:</p>
          <div class="flex justify-center space-x-4 text-sm">
            <a href="/" data-i18n-href="/" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" data-i18n="home">Home</a>
            <a href="/about" data-i18n-href="/about" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" data-i18n="about">About</a>
            <a href="/contact" data-i18n-href="/contact" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" data-i18n="contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

// Analytics ready for future use
// Example: analytics.trackEvent('custom_event', { category: 'user_action', label: 'button_click' });
