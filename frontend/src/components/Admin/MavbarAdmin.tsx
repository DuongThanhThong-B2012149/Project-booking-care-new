import { useAppDispatch, useAppSelector } from "app/hooks";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BiLogIn } from "react-icons/bi";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { logoutUser } from "redux/authSlice";
import { setLanguage } from "redux/languageSlice";
import { languages } from "utils";
import Dropdown from "react-bootstrap/Dropdown";
function MavbarAdmin() {
  const { language } = useAppSelector((state) => state.language);
  const { user } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const handleChangeLanguage = (lguage: string) => {
    dispatch(setLanguage(lguage));
  };
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <nav className="navbar navbar-admin navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse d-flex justify-content-between align-items-center"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <FormattedMessage id="NavbarAdmin.brandUser" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to={"/manager-user"}>
                    <FormattedMessage id="NavbarAdmin.manageUser" />
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <FormattedMessage id="NavbarAdmin.brandClinic" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to={"/manager-user"}>
                    <FormattedMessage id="NavbarAdmin.manageClinic" />
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <FormattedMessage id="NavbarAdmin.brandSpecialty" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to={"/manager-specialty"}>
                    <FormattedMessage id="NavbarAdmin.manageSpecialty" />
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <FormattedMessage id="NavbarAdmin.brandHandbook" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to={"/manager-specialty"}>
                    <FormattedMessage id="NavbarAdmin.manageHandbook" />
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ul>

          <div className="d-flex align-items-center">
            <div className="languages mx-2">
              <span>
                <FormattedMessage id="NavbarAdmin.welcome" />{" "}
                {user?.firstName ? user.firstName : ""}
                {user?.lastName ? user.lastName : ""}
              </span>
              <span
                onClick={() => {
                  handleChangeLanguage(languages.VI);
                }}
                className={`${
                  language === languages.VI ? "language-active" : ""
                }  language-vi mx-2`}
              >
                VN
              </span>
              <span
                onClick={() => {
                  handleChangeLanguage(languages.EN);
                }}
                className={`${
                  language === languages.EN ? "language-active" : ""
                } language-en mx-2`}
              >
                EN
              </span>
            </div>
            <Button
              onClick={() => {
                handleLogout();
              }}
              title="Logout"
              variant="danger"
            >
              <BiLogIn
                style={{
                  fontSize: "1.2rem",
                }}
              />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MavbarAdmin;
