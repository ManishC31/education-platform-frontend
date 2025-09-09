import { createBrowserRouter } from "react-router-dom";

// pages and components
import NavbarComponent from "./components/Navbar.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
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
import AdminDashboard from "./pages/admin/Dashboard.jsx";
import EducatorCourses from "./pages/educators/Courses.jsx";
import EducatorSales from "./pages/educators/Sales.jsx";
import EducatorStudents from "./pages/educators/Students.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarComponent />, // You may want to use a layout component here
    children: [
      { index: true, element: <Home /> },
      { path: "courses", element: <Courses /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },

      {
        path: "student",
        element: <ProtectedRoute allowedRoles={["student"]} />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "profile", element: <Profile /> },
          { path: "course/:id", element: <CoursePage /> },
        ],
      },
      {
        path: "educator",
        element: <ProtectedRoute allowedRoles={["educator"]} />,
        children: [
          { index: true, element: <EducatorDashboard /> },
          { path: "courses", element: <EducatorCourses /> },
          { path: "sales", element: <EducatorSales /> },
          { path: "students", element: <EducatorStudents /> },
        ],
      },
      {
        path: "admin",
        element: <ProtectedRoute allowedRoles={["admin"]} />,
        children: [{ index: true, element: <AdminDashboard /> }],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
