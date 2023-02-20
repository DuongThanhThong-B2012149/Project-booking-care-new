import { User } from "interfaces";
import { useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
interface ModalEditUserProps {
  currentUser: { [key: string]: string } | Partial<User> | null;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editUser: (dataUser: Partial<User>) => Promise<void>;
}
const ModalEditUser = ({
  isOpen,
  setOpen,
  editUser,
  currentUser,
}: ModalEditUserProps) => {
  const toggle = () => setOpen(!isOpen);
  const [formValues, setFormValues] = useState<Partial<User>>({
    id: 0,
    email: "",
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
    const arrFieldInput = ["email", "firstName", "lastName", "address"];
    for (let i = 0; i < arrFieldInput.length; i++) {
      const key = arrFieldInput[i];
      const value =
        formValues[key as "email" | "firstName" | "lastName" | "address"];
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
      console.log(formValues);
      await editUser(formValues);
      toggle();
    }
  };

  useEffect(() => {
    if (currentUser) setFormValues(currentUser as { [key: string]: string });
  }, [currentUser]);
  return (
    <Modal size="lg" isOpen={isOpen} toggle={toggle}>
      <ModalHeader className="bg-primary text-light" toggle={toggle}>
        Edit a user
      </ModalHeader>
      <ModalBody>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                disabled
                onChange={handleInputChange}
                type="email"
                name="email"
                className="form-control"
                id="email"
                value={formValues.email}
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
          Save changes
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalEditUser;
