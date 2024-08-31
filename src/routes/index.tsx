import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../pages/admin/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <p>index page</p>
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: <AdminDashboard />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
