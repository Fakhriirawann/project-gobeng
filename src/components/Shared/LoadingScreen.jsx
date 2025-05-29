const LoadingScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="text-center animate-fade-in">
        {/* Logo with animation */}
        <div className="relative mb-8">
          <div className="w-24 h-24 bg-gradient-orange rounded-3xl flex items-center justify-center mx-auto shadow-2xl animate-bounce-in">
            <span className="text-white font-bold text-3xl">GB</span>
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
          <div
            className="absolute -bottom-2 -left-2 w-4 h-4 bg-orange-300 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        {/* Brand name */}
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-2">
          GoBeng
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          Bengkel Cerdas
        </p>

        {/* Loading spinner */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-12 h-12 border-4 border-orange-200 dark:border-gray-700 rounded-full animate-spin"></div>
            <div className="absolute top-0 left-0 w-12 h-12 border-4 border-transparent border-t-orange-600 rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Loading text */}
        <p className="text-gray-600 dark:text-gray-300 animate-pulse">
          Memuat aplikasi...
        </p>

        {/* Progress dots */}
        <div className="flex justify-center space-x-2 mt-4">
          <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
          <div
            className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
