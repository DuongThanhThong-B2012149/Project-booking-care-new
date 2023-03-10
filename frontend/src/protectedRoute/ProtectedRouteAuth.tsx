import { useAppSelector } from "app/hooks";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouteAuth = () => {
  const { user } = useAppSelector((state) => state.auth);

  if (user) return <Navigate to="/" replace />;
  return <Outlet />;
};

export default ProtectedRouteAuth;
