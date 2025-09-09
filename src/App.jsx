import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./navigations";

const App = () => {
  // Update theme on state change
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
