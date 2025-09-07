import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName={() => "bg-gray-900 text-white shadow-md rounded-2xl px-6 py-3 flex items-center"}
        bodyClassName={() => "text-sm font-semibold"}
        progressClassName="bg-blue-500"
      />
      <App />
    </AuthProvider>
  </StrictMode>
);
