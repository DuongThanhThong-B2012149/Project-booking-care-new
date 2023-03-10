import { useAppSelector } from "app/hooks";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouteSystem = () => {
  const { user } = useAppSelector((state) => state.auth);

  if (!user) return <Navigate to="/login" replace />;
  return <Outlet />;
};

export default ProtectedRouteSystem;
