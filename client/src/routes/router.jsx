import { useRoutes } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Cart from "../pages/book/Cart";
import NotFound from "../pages/home/NotFound";
import Login from "../component/Login";
import Register from "./../component/Register";
import AdminLogin from "../component/AdminLogin";
import SingleBook from "./../pages/book/SingleBook";
import CheckOut from "../pages/book/CheckOut";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import AdminRoute from "./AdminRoute";
import Dashboard from "./../pages/dashboard/Dashboard";
import AddBook from "./../pages/dashboard/AddBook";
import UpdateBook from "./../pages/dashboard/UpdateBook";
import ManageBooks from "./../pages/dashboard/ManageBooks";
import Order from "./../pages/book/Order";
import UserDashboard from "../pages/book/UserDashboard";
import EmailVerification from "../component/EmailVerification";

const Router = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
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
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/book/:id",
          element: <SingleBook />,
        },
        {
          path: "/checkout",
          element: (
            <PrivateRoute>
              <CheckOut />
            </PrivateRoute>
          ),
        },
        {
          path: "/orders",
          element: (
            <PrivateRoute>
              <Order />
            </PrivateRoute>
          ),
        },
        {
          path: "/user-dashboard",
          element: (
            <PrivateRoute>
              <UserDashboard />
            </PrivateRoute>
          ),
        },
        {
          path: "/email-verification",
          element: (
            <PrivateRoute>
              <EmailVerification />
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLogin />,
    },
    {
      path: "/dashboard",
      element: (
        <AdminRoute>
          <DashboardLayout />
        </AdminRoute>
      ),
      children: [
        {
          path: "",
          element: (
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          ),
        },
        {
          path: "add-new-book",
          element: (
            <AdminRoute>
              <AddBook />
            </AdminRoute>
          ),
        },
        {
          path: "edit-book/:id",
          element: (
            <AdminRoute>
              <UpdateBook />
            </AdminRoute>
          ),
        },
        {
          path: "manage-books",
          element: (
            <AdminRoute>
              <ManageBooks />
            </AdminRoute>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return element;
};

export default Router;
