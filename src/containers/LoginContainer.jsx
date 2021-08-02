import React, { useEffect } from "react";
import Login from "../components/Login";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../modules/auth";

const LoginContainer = (props) => {
  const { loading } = useSelector((state) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogin = ({ username, password }) => {
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    if (loading === false) {
      history.push("/todo");
    }
  }, [loading]);

  return <Login onLogin={onLogin} />;
};

export default LoginContainer;
