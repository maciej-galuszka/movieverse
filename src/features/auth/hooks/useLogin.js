import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { resetError, login } from "../authSlice";

export default function useLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const error = useSelector((state) => state.auth.error);
  const [email, setEmail] = useState("John@example.com");
  const [password, setPassword] = useState("test123");

  function handleLogin(e) {
    e.preventDefault();
    dispatch(login({ email, password }));
  }

  useEffect(
    function () {
      dispatch(resetError());
      if (isAuthenticated) navigate("/", { replace: true });
    },
    [isAuthenticated, navigate, dispatch]
  );

  return { email, password, setEmail, error, setPassword, handleLogin };
}
