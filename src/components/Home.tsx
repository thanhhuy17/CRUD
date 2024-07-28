import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Button } from "antd";

const Home = () => {
  const users = useSelector((state: RootState) => state.users);
  //   console.log(users);
  return (
    <div className="container mx-[10%]">
      <h2 className="text-center my-10 text-2xl text-sky-600">CRUD App With TypeScript and React-Router-Dom</h2>
      <Button
        className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
        type="primary"
      >
        Create +
      </Button>
      <table className="flex flex-col  my-5 w-full">
        <thead>
          <tr className="flex w-[80vw] justify-between">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <hr className="w-full border-gray-700" />
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
                <Button type="primary">Edit</Button>
                <Button danger>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
