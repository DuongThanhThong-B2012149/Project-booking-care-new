import ModalEditUser from "components/Modal/ModalEditUser";
import ModalUser from "components/Modal/ModalUser";
import { User } from "interfaces";
import { useEffect, useState } from "react";
import { AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userService } from "services";
import { path } from "utils";
import { emitter } from "utils/emitter";
interface Props {}

const ManagerUser = (props: Props) => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalEdit, setIsShowModalEdit] = useState(false);
  const [editUser, setEditUser] = useState<
    { [key: string]: string } | Partial<User> | null
  >(null);
  const handleCreateNewUser = async (dataUser: { [key: string]: string }) => {
    try {
      const { message } = await userService.createNewUser(dataUser);

      await getAllUser();

      setIsShowModal(false);

      emitter.emit("EVENT_CLEAR_MODAL_DATA", { id: "your id" }); // second params use for passing data to function emitter.on
      toast.success(message);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const handleEditUser = async (dataUser: Partial<User>) => {
    try {
      const { message } = await userService.editUser(dataUser);

      await getAllUser();

      toast.success(message);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const handleDeleteUser = async (id: number) => {
    try {
      const { message } = await userService.deleteUser(id);

      await getAllUser();

      toast.success(message);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  const getAllUser = async () => {
    const { data } = await userService.getAllUsers();
    if (data) setUsers(data);
  };
  useEffect(() => {
    (async () => {
      try {
        await getAllUser();
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="container">
      <div className="text-primary my-4 fs-5 text-center fw-bold">
        Manager users
      </div>
      <ModalUser
        createNewUser={handleCreateNewUser}
        isOpen={isShowModal}
        setOpen={setIsShowModal}
      />

      <ModalEditUser
        currentUser={editUser}
        editUser={handleEditUser}
        isOpen={isShowModalEdit}
        setOpen={setIsShowModalEdit}
      />

      <div className="">
        <button
          onClick={() => {
            // Hide modal
            // setIsShowModal(!isShowModal);

            // Navigate to add user page
            navigate(path.ADD_USER);
          }}
          className="btn btn-primary mb-2 d-flex gap-2 align-items-center"
        >
          <span>
            <AiOutlinePlus />
          </span>
          <span>Add new user</span>
        </button>
      </div>
      <table className="table table-success table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, idx) => (
            <tr key={item.id}>
              <th>{item.email}</th>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.address}</td>
              <td>
                <div className="d-flex gap-2">
                  <button
                    onClick={() => {
                      setIsShowModalEdit(true);
                      setEditUser(item);
                    }}
                    className="btn btn-primary"
                  >
                    <BsFillPencilFill />
                  </button>
                  <button
                    onClick={() => {
                      handleDeleteUser(item.id as number);
                    }}
                    className="btn btn-danger"
                  >
                    <AiFillDelete />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerUser;
