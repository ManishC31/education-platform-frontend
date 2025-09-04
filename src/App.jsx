import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages and components
import NavbarComponent from "./components/Navbar.jsx";
import PrivateRoute from "./components/PrivateRoutes.jsx";
import Home from "./pages/Home.jsx";
import Courses from "./pages/Courses.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import CoursePage from "./pages/Course.jsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";

// Layout components
const PublicLayout = ({ children }) => (
  <div className="min-h-screen bg-base-100">
    <NavbarComponent />
    <main>{children}</main>
  </div>
);

const PrivateLayout = ({ children }) => (
  <div className="min-h-screen bg-base-100">
    <NavbarComponent />
    <main>{children}</main>
  </div>
);

const AuthLayout = ({ children }) => (
  <div className="min-h-screen bg-base-100">
    <main>{children}</main>
  </div>
);

const App = () => {
  // Update theme on state change
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return (
    <Router>
      <Routes>
        {/* Authentication Routes - No Navbar */}
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/register"
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        />

        {/* Public Routes - With Navbar */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />
        <Route
          path="/courses"
          element={
            <PublicLayout>
              <Courses />
            </PublicLayout>
          }
        />
        <Route
          path="/course/:id"
          element={
            <PublicLayout>
              <CoursePage />
            </PublicLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PublicLayout>
              <About />
            </PublicLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <PublicLayout>
              <Contact />
            </PublicLayout>
          }
        />

        {/* Private Routes - With Navbar, Protected by authentication */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <PrivateLayout>
                <Dashboard />
              </PrivateLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <PrivateLayout>
                <Profile />
              </PrivateLayout>
            </PrivateRoute>
          }
        />

        {/* Shared Routes - Can work in both public and private contexts */}
        {/* These routes will show different content based on authentication status */}
        <Route
          path="/my-courses"
          element={
            <PublicLayout>
              <Courses isPrivate={false} />
            </PublicLayout>
          }
        />
        <Route
          path="/my-courses-private"
          element={
            <PrivateRoute>
              <PrivateLayout>
                <Courses isPrivate={true} />
              </PrivateLayout>
            </PrivateRoute>
          }
        />

        {/* 404 Route */}
        <Route
          path="*"
          element={
            <PublicLayout>
              <NotFound />
            </PublicLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
