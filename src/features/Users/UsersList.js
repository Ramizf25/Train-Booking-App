import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../TrainsList/UserListSlice";

function UsersList() {
  const users_list = useSelector((state) => {
    return state.UsersList.users;
  });
  //console.log(users_list);
  users_list.forEach((element) => {
    console.log(element);
  });
  const dispatch = useDispatch();

  const usersClickHandler = () => {
    dispatch(fetchUsers());
  };
  return (
    <>
      <button onClick={usersClickHandler}>user</button>
    </>
  );
}

export default UsersList;
