import { useAppSelector } from "app/hooks";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
interface Props {
  children: JSX.Element;
}

const ProtectedRouteAuth = ({ children }: Props) => {
  const { user } = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (!user) <Navigate to="/login" replace />;
  }, [user]);
  if (user) return <Navigate to="/" replace />;
  return children;
};

export default ProtectedRouteAuth;
