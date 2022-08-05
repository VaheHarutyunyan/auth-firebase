import React from "react";
import {useNavigate} from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import Card from "../component/Card";
import Forms from "../component/Form";
import {setUser} from "../store/slice/userSlice";
import {useDispatch} from "react-redux";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const register = async ({email, password}) => {
    const auth = getAuth();
    console.log(auth);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(
          setUser({email: user.email, id: user.uid, token: user.accessToken})
        );
        navigate("/");
      })
      .catch(console.error);
  };
  return (
    <Card
      title="Sign Up"
      href="/sign-in"
      hrefName="Sign in"
      paragraph="Alredy an have account"
    >
      <Forms onFinish={register} btn="Sign up" />
    </Card>
  );
};

export default SignUp;
