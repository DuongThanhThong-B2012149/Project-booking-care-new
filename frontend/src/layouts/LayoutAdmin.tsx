import MavbarAdmin from "components/MavbarAdmin";
import { ReactNode } from "react";

interface LayoutAdminProps {
  children: ReactNode;
}

const LayoutAdmin = ({ children }: LayoutAdminProps) => {
  return (
    <>
      <MavbarAdmin />

      {children}
    </>
  );
};

export default LayoutAdmin;
