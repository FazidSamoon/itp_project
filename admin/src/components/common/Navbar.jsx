import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    
  },[user])
  return (
    <div className="flex h-12 border-b-2 drop-shadow-2xl">
      <div className="flex-1 flex items-center justify-center border-r-2">
        <Link to="/">
          <span className="font-extrabold text-lg text-primary">
            Heritage Admin
          </span>
        </Link>
      </div>
      <div className="flex-[7] flex items-center justify-end mr-4">
        {user ? (
          <div className="flex items-center">
            <span className="mr-2 text-slate-800">{user.otherDetails.username}</span>
            <img
              src="/assets/avatar.png"
              alt=""
              className="h-8 w-8 "
            />
          </div>
        ) : (
          <div>
            <Link to="auth/login">
              <button className="bg-primary p-1 w-16 font-medium text-sm">
                <span className="text-white">SignIn</span>
              </button>
            </Link>
            <Link to="auth/register">
              <button className="border border-primary p-1 w-16 font-medium text-sm ml-3">
                <span className="text-primary">SignUp</span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
