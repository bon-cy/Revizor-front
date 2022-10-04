import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUsers } from "../../features/userSlice";

const PersonalArea = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div>
      {users.map((user) => {
        if (user._id === id) {
          return (
          <h1>{user.login}</h1>
          )
        }
      })}
    </div>
  );
};

export default PersonalArea;
