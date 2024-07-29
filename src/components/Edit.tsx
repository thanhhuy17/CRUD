import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../store/reducer/reducer";
import { Button, Input } from "antd";

const Edit = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users);
  const navigate = useNavigate();
  const { id } = useParams(); // đổi cái Id này ở Param ra String.
  const exitingUser = users.filter((f) => f.id === (id));

  const { name, email } = exitingUser[0];
  const [nameEdit, setNameEdit] = useState(name);
  const [emailEdit, setEmailEdit] = useState(email);

  // console.log(typeof id);
  const handleSubmitEdit = (event: any) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: nameEdit,
        email: emailEdit,
      })
    );
    navigate("/");
  };

  return (
    <div className="w-[500px] h-[300px] bg-slate-600 mx-auto my-[15%] rounded-xl shadow-slate-300 shadow-xl">
      <h3 className="text-center py-3 text-xl text-sky-600">Update User</h3>

      <form className="mx-8">
        <div className="my-2">
          <p>Name: </p>
          <Input
            placeholder="Enter Name ..."
            value={nameEdit}
            onChange={(e) => setNameEdit(e.target.value)}
          ></Input>
          <p>Email: </p>
          <Input
            placeholder="Enter Email ..."
            value={emailEdit}
            onChange={(e) => setEmailEdit(e.target.value)}
          ></Input>
        </div>
        <div className="flex justify-center my-8">
          <Button type="primary" onClick={handleSubmitEdit}>
            Update
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
