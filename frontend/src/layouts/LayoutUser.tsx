import Footer from "components/Common/Footer";
import Header from "components/Common/Header";
import { Outlet } from "react-router-dom";

const LayoutUser = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutUser;
