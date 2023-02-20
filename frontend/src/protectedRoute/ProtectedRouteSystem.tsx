import { useAppSelector } from "app/hooks";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
interface Props {
  children: JSX.Element;
}

const ProtectedRouteSystem = ({ children }: Props) => {
  const { user } = useAppSelector((state) => state.auth);

  if (!user) return <Navigate to="/login" replace />;
  return children;
};

export default ProtectedRouteSystem;
