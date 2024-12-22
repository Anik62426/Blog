
import { useNavigate } from 'react-router-dom';
import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';


export const Appbar = () => {
    const navigate = useNavigate();
    const [isLogged, setIsLogged] = useState(false);
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLogged(true);
        }  
    }, [])

    const checkLogin = () => {
        if (isLogged) {
            navigate('/publish');
        }
        navigate('/signup');   
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/signup');
    };
    
    

    return (
        <div className="border-b flex justify-between px-10 py-4">
            <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer">
                Medium
            </Link>
            <div>
                {/* <Link to={`/publish`}> */}
                    <button onClick={checkLogin} type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                        New
                    </button>
                {/* </Link> */}
                <Avatar   size={"big"} name="harkirat" />
                  
                {isLogged ? <button className=' mx-3 px-4 py-2 text-center  font-bold bg-[#1599e6] hover:bg-[#2cacf6] rounded-full text-white'  onClick={handleLogout}>Logout</button> : <> </>}
            </div>
        </div>
    );
};