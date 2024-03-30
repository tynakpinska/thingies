import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton";

import { setUser } from "../../redux/stateSlices/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch(setUser({}));
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
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            backgroundPosition: "topCenter",
          }}
          alt="..."
        ></img>
        <h3 className="mb-3">Username: {user.name}</h3>
        <p className="mb-3">Role: {user.role}</p>
        <p className="mb-3">Email: {user.email}</p>
        <Link to="/">
          <CustomButton
            variant="warning"
            value="Log Out"
            onClick={handleClick}
          />
        </Link>
      </div>
    </>
  );
};

export default Profile;
