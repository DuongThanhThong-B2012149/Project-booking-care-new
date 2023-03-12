import LayoutAdmin from "layouts/LayoutAdmin";
import LayoutUser from "layouts/LayoutUser";
import Login from "pages/auth/Login";
import { Register } from "pages/auth/Register";
import HomePage from "pages/home";
import AddUser from "pages/manager/user/AddUser";
import ManagerUser from "pages/manager/user/ManagerUser";
import ProtectedRouteAuth from "protectedRoute/ProtectedRouteAuth";
import ProtectedRouteSystem from "protectedRoute/ProtectedRouteSystem";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { path } from "utils";
import "./App.css";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<LayoutUser />}>
        <Route path={path.HOME} element={<HomePage />} />
      </Route>
      <Route element={<ProtectedRouteAuth />}>
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.REGISTER} element={<Register />} />
      </Route>
      <Route element={<ProtectedRouteAuth />}>
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.REGISTER} element={<Register />} />
      </Route>
      <Route element={<ProtectedRouteSystem />}>
        <Route element={<LayoutAdmin />}>
          <Route path={path.MANAGER_USER} element={<ManagerUser />} />
          <Route path={path.ADD_USER} element={<AddUser />} />
        </Route>
      </Route>
    </Route>
  )
);
