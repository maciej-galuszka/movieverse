import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, resetError } from "../auth/authSlice.js";
import Button from "../../components/Button";

function LoginForm() {
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

  return (
    <section className="mx-auto flex h-full items-start justify-center sm:max-w-4xl md:max-w-5xl">
      <div className="bg-lightGray mt-10 rounded-lg border-2 border-violet-500 px-6 py-5 sm:mt-12 sm:px-10 sm:py-6 md:mt-20 md:w-1/2 lg:w-1/2">
        <form action="" className="flex flex-col text-white" onSubmit={handleLogin}>
          <label className="text-xs font-medium sm:text-base">Email address</label>
          <input
            className="mt-2 h-6 rounded-md pl-2 text-xs text-dark sm:h-9 sm:text-base"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="mt-2 text-xs font-medium sm:mt-4 sm:text-base">Password</label>
          <input
            type="password"
            className="mt-2 h-6 rounded-md pl-2 text-xs text-dark sm:h-9 sm:text-base"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="mt-4 rounded-sm bg-red-200 px-2 py-1 text-red-700">{error}</p>}
          <div className="mt-3 flex justify-between gap-1 sm:mt-6 sm:block sm:space-x-5">
            <Button htmlType="submit">LOGIN</Button>
            <Button>CREATE ACCOUNT</Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginForm;
