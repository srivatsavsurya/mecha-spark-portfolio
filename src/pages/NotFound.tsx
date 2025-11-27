import { useEffect } from "react";

const NotFound = () => {
  // Simulate location pathname for demo purposes
  const location = { pathname: "/some/missing/path" };

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-md px-8">
        <div className="mb-8">
          <h1 className="text-6xl font-light text-gray-900 mb-4">404</h1>
          <div className="w-16 h-px bg-gray-300 mx-auto mb-6"></div>
          <h2 className="text-xl text-gray-600 mb-2">Page not found</h2>
          <p className="text-gray-500 text-sm">
            The page you're looking for doesn't exist.
          </p>
        </div>
        
        <div className="space-y-3">
          <a
            href="/"
            className="block w-full py-3 px-6 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors duration-200"
          >
            Back to Home
          </a>
          <button
            onClick={() => window.history.back()}
            className="block w-full py-3 px-6 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors duration-200"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;