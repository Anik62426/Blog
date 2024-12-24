import { Blog } from "../hooks"
import { Edit } from "../pages/Edit";
import { useState } from "react";   
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"
import { FiEdit } from "react-icons/fi";


export const FullBlog = ({ blog }: {blog: Blog}) => {

    const [EditClick, setEditClick] = useState(false)

 
    
    const handleEditClick = () => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("You need to login to edit the blog")
            return;
        }else{
            setEditClick(true);
        }
    }
     
    return <div>
        <Appbar />
        {EditClick ? <Edit blog={blog} setEditClick={setEditClick}  /> :<div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                <div className="col-span-8 border-r">
                    <div className=" flex justify-between text-5xl mb-1 font-extrabold capri ">
                       <p>{blog.title}</p> 
                        <div onClick={handleEditClick} className="pr-2"> <FiEdit size={24}/> </div>
                    </div>
                    <div className="text-slate-500 pt-2 capri">
                        Post on 2nd December 2023
                    </div>
                    <div className="pt-4 capri mr-4 w-[95%]">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4 ml-4 p-1 border">
                    <div className="text-slate-600 text-lg capri border-b pb-1 ">
                        Author
                    </div>
                    <div className="flex w-full pt-1 capri tracking-tighter">
                        <div className="pr-4 flex flex-col justify-center ">
                            <Avatar size="big" name={blog.author.name || "Anonymous"} />
                        </div>
                        <div>
                            <div className="text-xl mt-2 font-mono font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500  w-[90%]">
                                Random catch phrase about the author's ability to grab the user's attention
                            </div>
                        </div>
                    </div>  
                </div>
                
            </div>
        </div>}
        
    </div>
}