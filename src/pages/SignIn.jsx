import React from "react";
import {useNavigate} from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "react-redux";
import Card from "../component/Card";
import Forms from "../component/Form";
import {setUser} from "../store/slice/userSlice";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async ({email, password}) => {
    const auth = getAuth();
    console.log(auth);
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(
          setUser({email: user.email, id: user.uid, token: user.accessToken})
        );
        navigate("/");
      })
      .catch("We couldn't find an account");
  };
  return (
    <Card title="Sign in" href="/sign-up" hrefName="Sign up" paragraph="Or">
      <Forms onFinish={login} btn="Sign in" />
    </Card>
  );
};

export default SignIn;
