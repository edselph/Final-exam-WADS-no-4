import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
      console.log("You have successfully logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="max-w-[600px] mx-auto my-16 p-4">
      <h1 className="text-2xl font-bold py-4 text-white">Account</h1>
      <img
        src="https://i.ibb.co/HY4kRHj/userblank.png"
        width="130px"
        height="130px"
      />
      <p className="text-2xl font-bold py-2 text-white">
        User Email: {user && user.email}
      </p>

      <button onClick={handleLogout} className="border px-3 py-1 my-1">
        Logout
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Account;
