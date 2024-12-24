
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { Blog } from "../hooks";

interface ChildProps {
    blog: Blog;
    setEditClick: React.Dispatch<React.SetStateAction<boolean>>; 
  }

export const Edit: React.FC<ChildProps> = ({ blog,setEditClick }) => {
    const [title, setTitle] = useState( blog?.title || "");
    const [description, setDescription] = useState(blog?.content || "");
    const navigate = useNavigate();

    const handlechange = () => {
        setEditClick(false);
    }

  

    return <div>
        {/* <Appbar /> */}
        <div className="flex justify-center w-full pt-8"> 
            <div className="max-w-screen-lg w-full">
                <input onChange={(e) => {
                    setTitle(e.target.value)
                }} type="text" value={title} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5" placeholder="Title" />

                <TextEditor value={description} onChange={(e) => {
                    setDescription(e.target.value)
                }} />
                <button onClick={async () => {
                    const response = await axios.put(`${BACKEND_URL}/api/v1/blog`, {
                        id:blog.id,
                        title: title,
                        content: description
                    }, {
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    });
                    if (response) {
                        navigate(`/blog/${blog.id}`)
                    }
                    handlechange()
                    
                }} type="submit" className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Publish post
                </button>
            </div>
        </div>
    </div>
}


function TextEditor({ value, onChange }: { value: string, onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
    return <div className="mt-2">
        <div className="w-full mb-4 ">
            <div className="flex items-center justify-between border">
            <div className="my-2 bg-white rounded-b-lg w-full">
                <label className="sr-only">Publish post</label>
                <textarea value={value} onChange={onChange} id="editor" rows={8} className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2" placeholder="Write an article..." required />
            </div>
        </div>
       </div>
    </div>
    
}