// src/components/PrivateRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Supports both usage patterns:
// 1) Wrapper: <PrivateRoute allowedRoles={["Educator"]}>{children}</PrivateRoute>
// 2) Nested Routes: <Route element={<PrivateRoute allowedRoles={["Educator"]} />}><Route ... /></Route>
const ProtectedRoute = ({ allowedRoles, children }) => {
  allowedRoles = allowedRoles.map((role) => role.toLowerCase());
  const { user } = useAuth();
  console.log("user:", user);

  console.log("allowed roles:", allowedRoles);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (Array.isArray(allowedRoles) && allowedRoles.length > 0) {
    const userRole = user?.role?.toLowerCase();
    console.log("user role:", userRole);
    if (!userRole || !allowedRoles.includes(userRole)) {
      console.log("going to replace, role not found");
      return <Navigate to="/" replace />;
    }
  }

  // If used as a wrapper, render children; otherwise render nested route via Outlet
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
