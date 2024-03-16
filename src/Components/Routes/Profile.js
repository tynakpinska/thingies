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
    <div className="col-11 col-sm-4 d-flex flex-column justify-content-center align-items-center">
      <h2>Profile</h2>
      <img
        src={user.avatar}
        className="rounded-circle mb-3"
        style={{ width: "auto", height: "200px" }}
        alt="..."
      ></img>
      <h3 className="mb-3">Username: {user.name}</h3>
      <p className="mb-3">Email: {user.email}</p>
      <CustomButton variant="warning" value="Log Out" onClick={handleClick} />
    </div>
  );
};

export default Profile;
