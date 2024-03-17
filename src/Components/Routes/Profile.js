import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../CustomButton";

import { setRoute } from "../../redux/stateSlices/routeSlice";
import { setUser } from "../../redux/stateSlices/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch(setUser({}));
    dispatch(setRoute("Shop"));
  };

  return (
    <>
      <h2 className="d-flex justify-content-center align-items-center">
        Profile
      </h2>
      <div className="col-11 col-sm-4 ">
        <img
          src={user.avatar}
          className="rounded-circle mb-3"
          style={{ width: "200px", height: "200px", objectFit: "cover", backgroundPosition: "topCenter" }}
          alt="..."
        ></img>
        <h3 className="mb-3">Username: {user.name}</h3>
        <p className="mb-3">Role: {user.role}</p>
        <p className="mb-3">Email: {user.email}</p>
        <CustomButton variant="warning" value="Log Out" onClick={handleClick} />
      </div>
    </>
  );
};

export default Profile;
