import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
    <div class="text-center space-y-8 p-8">
      <div class="space-y-4">
        <h1 class="text-6xl font-bold text-gray-900 dark:text-white">
          Hello World
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Welcome to Lumare with Tailwind CSS v4
        </p>
      </div>
      
      <div class="space-y-4">
        <div class="inline-flex items-center space-x-2 bg-white dark:bg-gray-700 rounded-lg px-6 py-3 shadow-lg">
          <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span class="text-gray-700 dark:text-gray-300 font-medium">Vite + Tailwind CSS v4</span>
        </div>
        
        <div class="flex justify-center space-x-4">
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
            Get Started
          </button>
          <button class="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
`;
