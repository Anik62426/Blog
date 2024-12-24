import { useNavigate } from "react-router-dom";
import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Appbar = () => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogged(true);
    }
  }, []);

  const checkLogin = () => {
    if (isLogged) {
      navigate("/publish");
    } else {
      navigate("/signup");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signup");
  };

  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link
        to={"/blogs"}
        className="flex flex-col justify-center cursor-pointer capri text-xl hover:font-bold"
      >
        BlogX
      </Link>
      <div>
        {/* <Link to={`/publish`}> */}
        {/* <button  type="button" className="mr-4 text-white bg-purple-700 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                        New
                    </button> */}
        <button
          onClick={checkLogin}
          className="inline-flex items-center justify-center px-6 py-2 mr-3 rounded-lg bg-white text-gray-800 font-semibold text-base border border-gray-200 shadow-sm transition-transform duration-250 ease-in-out hover:shadow-md hover:-translate-y-1 focus:shadow-md active:translate-y-0 active:bg-gray-100 active:border-gray-300 hover:font-bold"
        >
          New
        </button>

        {/* </Link> */}
        <Avatar size={"big"} name="A" />

        {isLogged ? (
          <button
            onClick={handleLogout}
            className="inline-block px-5 py-2 rounded-full ml-3 bg-green-200  font-medium text-base border-0 shadow-[inset_0_-25px_18px_-14px_rgba(44,187,99,0.2),0_1px_2px_rgba(44,187,99,0.15),0_2px_4px_rgba(44,187,99,0.15),0_4px_8px_rgba(44,187,99,0.15),0_8px_16px_rgba(44,187,99,0.15),0_16px_32px_rgba(44,187,99,0.15)] transition-transform duration-250 ease-in-out cursor-pointer text-center select-none hover:shadow-[inset_0_-25px_18px_-14px_rgba(44,187,99,0.35),0_1px_2px_rgba(44,187,99,0.25),0_2px_4px_rgba(44,187,99,0.25),0_4px_8px_rgba(44,187,99,0.25),0_8px_16px_rgba(44,187,99,0.25),0_16px_32px_rgba(44,187,99,0.25)] hover:scale-105 hover:-rotate-1"
            role="button"
          >
            Logout
          </button>
        ) : (
          <> </>
        )}
      </div>
    </div>
  );
};
