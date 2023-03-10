import { useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { emitter } from "utils/emitter";
interface ModalUserProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  createNewUser: (dataUser: { [key: string]: string }) => Promise<void>;
}
const ModalUser = ({ isOpen, setOpen, createNewUser }: ModalUserProps) => {
  const toggle = () => setOpen(!isOpen);
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const checkValid = (): boolean => {
    let isValid = true;
    const arrFieldInput = [
      "email",
      "password",
      "firstName",
      "lastName",
      "address",
    ];
    for (let i = 0; i < arrFieldInput.length; i++) {
      const key = arrFieldInput[i];
      const value = formValues[key];
      if (!value) {
        alert("Missing parameter");
        isValid = false;
        break;
      }
    }
    return isValid;
  };

  const handleSubmit = async () => {
    if (checkValid()) {
      // Call api

      await createNewUser(formValues);
    }
    // toggle();
  };

  useEffect(() => {
    const listener = emitter.addListener("EVENT_CLEAR_MODAL_DATA", (data) => {
      setFormValues({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
      });
    });

    return () => {
      listener.removeAllListeners();
    };
  }, []);
  return (
    <Modal size="lg" isOpen={isOpen} toggle={toggle}>
      <ModalHeader className="bg-primary text-light" toggle={toggle}>
        Create a new user
      </ModalHeader>
      <ModalBody>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                onChange={handleInputChange}
                type="email"
                name="email"
                className="form-control"
                id="email"
                value={formValues.email}
              />
            </div>
            <div className="col-6">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                onChange={handleInputChange}
                type="password"
                name="password"
                className="form-control"
                id="password"
                value={formValues.password}
              />
            </div>
            <div className="col-6 my-2">
              <label htmlFor="firstName" className="form-label">
                FirstName
              </label>
              <input
                onChange={handleInputChange}
                type="firstName"
                name="firstName"
                className="form-control"
                id="firstName"
                value={formValues.firstName}
              />
            </div>
            <div className="col-6 my-2">
              <label htmlFor="lastName" className="form-label">
                LastName
              </label>
              <input
                onChange={handleInputChange}
                type="lastName"
                name="lastName"
                className="form-control"
                id="lastName"
                value={formValues.lastName}
              />
            </div>
            <div className="col-12 my-2">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                onChange={handleInputChange}
                type="address"
                name="address"
                className="form-control"
                id="address"
                value={formValues.address}
              />
            </div>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSubmit}>
          Add new
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalUser;
