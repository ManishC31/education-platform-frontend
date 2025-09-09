import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user, isLoadingUser } = useAuth();

  const normalizedAllowedRoles = Array.isArray(allowedRoles) ? allowedRoles.map((role) => String(role).toLowerCase()) : [];

  if (isLoadingUser) {
    return null;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (normalizedAllowedRoles.length > 0) {
    const userRole = user?.role ? String(user.role).toLowerCase() : "";
    if (!userRole || !normalizedAllowedRoles.includes(userRole)) {
      return <Navigate to="/" replace />;
    }
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
