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
import EducatorDashboard from "./pages/educators/Dashboard.jsx";
import AdminDashboard from "./pages/admin/Dashboard.jsx"; // Assuming this component exists or needs to be created

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

// Page without Navbar
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
              <Home isPrivate={false} />
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

        {/* Student Routes - Nested under /student, restricted to Student (and Admin) */}
        <Route path="/student" element={<PrivateRoute allowedRoles={["Student", "Admin"]} />}>
          <Route
            index
            element={
              <PrivateLayout>
                <Dashboard />
              </PrivateLayout>
            }
          />
          <Route
            path="profile"
            element={
              <PrivateLayout>
                <Profile />
              </PrivateLayout>
            }
          />
          <Route
            path="my-courses"
            element={
              <PrivateLayout>
                <Courses isPrivate={true} />
              </PrivateLayout>
            }
          />
        </Route>

        {/* Educator Routes - Nested under /educator, restricted to Educator (and Admin) */}
        <Route path="/educator" element={<PrivateRoute allowedRoles={["Educator", "Admin"]} />}>
          <Route
            index
            element={
              <PrivateLayout>
                <EducatorDashboard />
              </PrivateLayout>
            }
          />
          {/* Add more educator-specific sub-routes here as needed, e.g., <Route path="courses" ... /> */}
        </Route>

        {/* Admin Routes - Nested under /admin, restricted to Admin only */}
        <Route path="/admin" element={<PrivateRoute allowedRoles={["Admin"]} />}>
          <Route
            index
            element={
              <PrivateLayout>
                <AdminDashboard />
              </PrivateLayout>
            }
          />
          {/* Add more admin-specific sub-routes here as needed */}
        </Route>

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
