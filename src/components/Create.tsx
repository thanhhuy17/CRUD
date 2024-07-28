import { Button, Input } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/reducer/reducer";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state: RootState) => state.users);
  const navigate = useNavigate();
    
  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(
      addUser({
        id: users[users.length - 1].id + 1,
        name: name,
        email: email,
      })
    );
    navigate("/");
  };
  console.log( "uSER: ", users);

  return (
    <div className="w-[500px] h-[300px] bg-slate-600 mx-auto my-[15%] rounded-xl shadow-slate-300 shadow-xl">
      <h3 className="text-center py-3 text-xl text-sky-600">Add New User</h3>

      <form className="mx-8">
        <div className="my-2">
          <p>Name: </p>
          <Input
            placeholder="Enter Name ..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Input>
          <p>Email: </p>
          <Input
            placeholder="Enter Email ..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </div>
        <div className="flex justify-center my-8">
          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Create;
