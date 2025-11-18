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
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      dispatch(login({ email, password }));
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    dispatch(resetError());
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate, dispatch]);

  useEffect(() => {
    if (error) {
      setEmail("");
      setPassword("");
    }
  }, [error]);

  return { email, password, setEmail, error, setPassword, handleLogin, isLoading };
}
