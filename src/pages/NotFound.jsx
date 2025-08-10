import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-8xl font-bold text-error">404</h1>
            <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
            <p className="py-6 text-lg text-gray-600">Oops! The page you're looking for doesn't exist. It might have been moved or deleted.</p>
            <Link to="/" className="btn btn-primary">
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
