import { useAppDispatch, useAppSelector } from "app/hooks";
import FormAddUser from "components/Form/FormAddUser";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { fetchGenders, fetchPositions, fetchRoles } from "redux/codeSlice";

interface Props {}

const AddUser = (props: Props) => {
  const dispatch = useAppDispatch();
  const { genders, positions, roles, loading } = useAppSelector(
    (state) => state.codes
  );
  const { language } = useAppSelector((state) => state.language);

  useEffect(() => {
    dispatch(fetchGenders());
    dispatch(fetchPositions());
    dispatch(fetchRoles());
  }, []);
  return (
    <div className="container">
      <h4 className="text-center my-4">
        <FormattedMessage id="ManagerUser.addNewUser" />
      </h4>
      <FormAddUser
        loading={loading}
        language={language}
        genders={genders}
        positions={positions}
        roles={roles}
      />
    </div>
  );
};

export default AddUser;
