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
        <!-- Action button -->
        <div class="flex justify-center">
          <button id="go-home-btn" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 cursor-pointer" data-i18n="404.goHome">
            Go Home
          </button>
        </div>
      </div>
    </div>
  </div>
`;

// Add event listeners
document.addEventListener("DOMContentLoaded", () => {
  const goHomeBtn = document.getElementById("go-home-btn");

  if (goHomeBtn) {
    goHomeBtn.addEventListener("click", () => {
      window.location.href = "/";
    });
  }
});
