import React from "react";
import { login } from "../../../api/auth/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await login({
      email: e.target.email.value,
      password: e.target.password.value,
    });
    if (!response.success) alert(response.message);
    else {
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        className="flex flex-col justify-center items-center  w-3/12 p-10 shadow-2xl"
        onSubmit={handleLogin}
      >
        <span className="text-xl font-bold text-[#999]">SignIn</span>
        <input
          className="bg-[#ebe1e1] w-10/12 border-none outline-none rounded-sm mt-4 pl-2"
          placeholder="email"
          type="email"
          name="email"
        />
        <input
          className="bg-[#ebe1e1] w-10/12 border-none outline-none mt-4 pl-2 "
          placeholder="password"
          type="password"
          name="password"
        />
        <button
          type="submit"
          className="bg-primary text-white border border-primary w-10/12 h-7 border-none rounded-sm mt-7 font-bold"
        >
          SignIn
        </button>
        <Link to="" className="w-10/12 h-7 border border-primary mt-2">
          <button className=" text-primary w-full h-full  rounded-sm  font-bold">
            SignUp
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
