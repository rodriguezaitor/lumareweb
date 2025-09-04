import "./style.css";
import i18n from "./i18n.js";

document.querySelector("#app").innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
    <div class="text-center space-y-8 p-8 max-w-2xl mx-auto">
      <div class="space-y-4">
        <!-- 404 Number -->
        <div class="text-9xl font-bold text-red-500 dark:text-red-400 opacity-20">
          404
        </div>
        
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white" data-i18n="404.heading">
          Page Not Found
        </h1>
        
        <p class="text-xl text-gray-600 dark:text-gray-300" data-i18n="404.subtitle">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>
      
      <div class="space-y-6">
        <!-- Error illustration -->
        <div class="flex justify-center">
          <div class="w-32 h-32 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
            <svg class="w-16 h-16 text-red-500 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
          </div>
        </div>
        
        <!-- Action buttons -->
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button id="go-home-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200" data-i18n="404.goHome">
            Go Home
          </button>
          <button id="go-back-btn" class="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-200" data-i18n="404.goBack">
            Go Back
          </button>
        </div>
        
        <!-- Helpful links -->
        <div class="mt-8 space-y-2">
          <p class="text-sm text-gray-500 dark:text-gray-400" data-i18n="404.helpfulLinks">Helpful links:</p>
          <div class="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/" data-i18n-href="/" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" data-i18n="home">Home</a>
            <a href="/about" data-i18n-href="/about" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" data-i18n="about">About</a>
            <a href="/contact" data-i18n-href="/contact" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" data-i18n="contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

// Add event listeners
document.addEventListener("DOMContentLoaded", () => {
  const goHomeBtn = document.getElementById("go-home-btn");
  const goBackBtn = document.getElementById("go-back-btn");

  if (goHomeBtn) {
    goHomeBtn.addEventListener("click", () => {
      window.location.href = "/";
    });
  }

  if (goBackBtn) {
    goBackBtn.addEventListener("click", () => {
      window.history.back();
    });
  }
});
