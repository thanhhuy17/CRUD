import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { deleteUser } from "../store/reducer/reducer";
import { useEffect } from "react";

const INFO_STORAGE_KEY = "LIST_INFO";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users);

  const handleDeleteUser = (id: number) => {
    dispatch(deleteUser(id));
  };

  // Set Local Storage
  useEffect(() => {
    window.localStorage.setItem(INFO_STORAGE_KEY, JSON.stringify(users));
  }, [users]);

  // Get Local Storage
  // useEffect(() => {
  //   const getStorage = window.localStorage.getItem(INFO_STORAGE_KEY);
  //   if (getStorage) {
  //     const localStorageH = JSON.parse(getStorage);
  //     dispatch(getFromStorage(localStorageH));
  //   }
  // }, []);

  return (
    <div className="container mx-[10%]">
      <h2 className="text-center my-10 text-2xl text-sky-600">
        CRUD App With TypeScript and React-Router-Dom
      </h2>
      <Link to={"/create"} className="flex items-center">
        <Button
          className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 "
          type="primary"
        >
          Create +
        </Button>
      </Link>

      <table className="flex flex-col my-5 w-full">
        <thead>
          <tr className="flex w-[80vw] justify-between">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <div>
          <hr className="w-full border-gray-700" />
        </div>

        <tbody className="flex flex-col gap-3 my-5">
          {users.map((user, index) => (
            <tr
              key={index}
              className="flex w-[80vw]  justify-between items-center"
            >
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td className="flex gap-3">
                <Link to={`/edit/${user.id}`}>
                  <Button type="primary">Edit</Button>
                </Link>
                <Button danger onClick={() => handleDeleteUser(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
