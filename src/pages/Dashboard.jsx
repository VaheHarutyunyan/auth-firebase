import React from "react";
import {useDispatch} from "react-redux";
import {Navigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import {setRemoveUser} from "../store/slice/userSlice";

const Dashboard = () => {
  const {isAuth, token, email} = useAuth();
  console.log("Tokin is", token);
  const dispatch = useDispatch();

  return isAuth ? (
    <div className="dashboard">
      <div className="row">
        <div className="col">
          <h1>Dashboard</h1>
        </div>
        <div className="col">
          <button onClick={() => dispatch(setRemoveUser())}>
            Log out from {email}
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to={`/sign-in`} />
  );
};

export default Dashboard;
