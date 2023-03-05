import React, {useState} from 'react';
import {AiOutlineCloseCircle} from "react-icons/ai";

const LoginModal = ({open, setOpen}) => {
    if (!open) return null
    return (
        <div className={`absolute top-0 bottom-0 bg-blend-overlay bg-red-200 w-full h-screen flex items-center justify-center z-50`}>
            <div className={`flex flex-col w-[50vh] gap-y-2 bg-white text-black rounded-md p-5 shadow-lg`}>
                <div  onClick={setOpen} className={`flex text-2xl text-red-800 justify-end cursor-pointer`}><AiOutlineCloseCircle  /></div>
                <form className={`flex flex-col gap-y-8 `}>
                    <div className={`flex flex-col gap-x-3 `}>
                        <label>Name</label>
                        <input name={`email`} className={`border border-blue-300  p-1  bg-white`} placeholder={`name`}/>
                    </div>
                    <div className={`flex flex-col gap-x-3 `}>
                        <label>Password</label>
                        <input  name={`password`} placeholder={`password`} className={`border border-blue-300  p-1  bg-white`}/>
                    </div>
                    <div className={`flex flex-col gap-x-3 `}>
                        <input  type={`submit`} value={`Login`} className={`border p-2 bg-blue-600 text-white font-bold rounded border-blue-300  p-1  bg-white`}/>
                    </div>
                    <div className={`flex flex-col gap-x-3 `}>
                        <input  type={`submit`} value={`Signup`} className={`border p-2 bg-blue-600 text-white font-bold rounded border-blue-300  p-1  bg-white`}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;