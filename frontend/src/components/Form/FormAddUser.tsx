import { Code } from "interfaces";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FormattedMessage } from "react-intl";
import { languages } from "utils";
import { BsUpload } from "react-icons/bs";
import { ChangeEvent } from "react";
import { useState } from "react";
import Lightbox from "react-image-lightbox";

interface FormAddUserProps {
  loading: boolean;
  language: string;
  genders: Code[];
  positions: Code[];
  roles: Code[];
}

const images = [
  "https://placekitten.com/1500/500",
  "https://placekitten.com/4000/3000",
  "https://placekitten.com/800/1200",
  "https://placekitten.com/1500/1500",
];

function FormAddUser({
  positions,
  language,
  genders,
  loading,
  roles,
}: FormAddUserProps) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [linkImagePreview, setLinkImagePreview] = useState("");
  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const data = e.target.files;
    if (data) {
      const file = data[0];
      const objectUrl = URL.createObjectURL(file);
      setLinkImagePreview(objectUrl);
    }
  };
  return (
    <>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>
            <FormattedMessage id="ManagerUser.email" />
          </Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>
            <FormattedMessage id="ManagerUser.password" />
          </Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>
            <FormattedMessage id="ManagerUser.firstName" />
          </Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>
            <FormattedMessage id="ManagerUser.lastName" />
          </Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Col xs={4}>
          <Form.Label>
            <FormattedMessage id="ManagerUser.phoneNumber" />
          </Form.Label>
          <Form.Control />
        </Col>
        <Col xs={8}>
          <Form.Label>
            <FormattedMessage id="ManagerUser.address" />
          </Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>
            <FormattedMessage id="ManagerUser.gender" />
          </Form.Label>
          <Form.Select>
            {loading && <option>Loading...</option>}
            {genders.map((code, idx) => (
              <option key={idx}>
                {language === languages.VI ? code.valueVi : code.valueEn}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>
            <FormattedMessage id="ManagerUser.position" />
          </Form.Label>
          <Form.Select>
            {loading && <option>Loading...</option>}
            {positions.map((code, idx) => (
              <option key={idx}>
                {language === languages.VI ? code.valueVi : code.valueEn}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>
            <FormattedMessage id="ManagerUser.roleId" />
          </Form.Label>
          <Form.Select>
            {loading && <option>Loading...</option>}
            {roles.map((code, idx) => (
              <option key={idx}>
                {language === languages.VI ? code.valueVi : code.valueEn}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>
            <FormattedMessage id="ManagerUser.image" />
          </Form.Label>
          <div className="">
            <button
              type="button"
              className="bg-light p-0 m-0 btn-sm btn btn-light"
            >
              <Form.Label
                htmlFor="upload-image"
                className="d-flex p-2 m-0 align-items-center gap-2 block w-full h-full"
              >
                Tải ảnh <BsUpload />
              </Form.Label>
            </button>
            <input
              onChange={handleChangeFile}
              type="file"
              id="upload-image"
              hidden
            />
            <div className="preview-image">
              {linkImagePreview ? (
                <img
                  onClick={() => setIsOpen(true)}
                  className="w-100 h-100"
                  src={linkImagePreview}
                  alt=""
                />
              ) : (
                <></>
              )}

              {isOpen && linkImagePreview && (
                <Lightbox
                  mainSrc={linkImagePreview}
                  onCloseRequest={() => setIsOpen(false)}
                />
              )}
            </div>
          </div>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        <FormattedMessage id="ManagerUser.save" />
      </Button>
    </>
  );
}

export default FormAddUser;
