import { useAppDispatch, useAppSelector } from "app/hooks";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BiLogIn } from "react-icons/bi";
import { FormattedMessage } from "react-intl";
import { logoutUser } from "redux/authSlice";
import { setLanguage } from "redux/languageSlice";
import { languages } from "utils";

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
    <Navbar className="navbar-admin" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown
              title={<FormattedMessage id="NavbarAdmin.brandUser" />}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">
                <FormattedMessage id="NavbarAdmin.manageUser" />
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
            <NavDropdown
              title={<FormattedMessage id="NavbarAdmin.brandClinic" />}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">
                <FormattedMessage id="NavbarAdmin.manageClinic" />
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
            <NavDropdown
              title={<FormattedMessage id="NavbarAdmin.brandSpecialty" />}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">
                <FormattedMessage id="NavbarAdmin.manageSpecialty" />
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
            <NavDropdown
              title={<FormattedMessage id="NavbarAdmin.brandHandbook" />}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">
                <FormattedMessage id="NavbarAdmin.manageHandbook" />
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
          </Nav>
          <div className="d-flex">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MavbarAdmin;
