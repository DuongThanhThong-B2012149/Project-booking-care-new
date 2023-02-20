import Layout from "layouts/Layout";
import LayoutAdmin from "layouts/LayoutAdmin";
import Login from "pages/auth/Login";
import { Register } from "pages/auth/Register";
import HomePage from "pages/home";
import ManagerUser from "pages/manager/ManagerUser";
import NotFound from "pages/notfound/NotFound";
import ProtectedRouteAuth from "protectedRoute/ProtectedRouteAuth";
import ProtectedRouteSystem from "protectedRoute/ProtectedRouteSystem";
import { createBrowserRouter } from "react-router-dom";
import { path } from "utils";
import "./App.css";

export const router = createBrowserRouter([
  {
    path: path.HOME,
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: path.LOGIN,
    element: (
      <ProtectedRouteAuth>
        <Login />
      </ProtectedRouteAuth>
    ),
  },
  {
    path: path.REGISTER,
    element: <Register />,
  },
  {
    path: path.MANAGER_USER,
    element: (
      <ProtectedRouteSystem>
        <LayoutAdmin>
          <ManagerUser />
        </LayoutAdmin>
      </ProtectedRouteSystem>
    ),
  },
  {
    path: path.UNKNOWN,
    element: <NotFound />,
  },
]);
