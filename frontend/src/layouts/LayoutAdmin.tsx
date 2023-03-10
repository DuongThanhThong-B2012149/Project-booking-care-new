import MavbarAdmin from "components/Admin/MavbarAdmin";
import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <>
      <MavbarAdmin />
      <Outlet />
    </>
  );
};

export default LayoutAdmin;
