import React, {useState} from 'react';
import {AiOutlineCloseCircle} from "react-icons/ai";
import {FieldValues, useForm} from "react-hook-form";

const LoginModal = ({open, setOpen}) => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    if (!open) return null
    const onSubmit = () => {
        console.log('submitted')
    }
    return (
        <div
            className={`absolute top-0 bottom-0 bg-opacity-40 bg-slate-200 w-full h-screen flex items-center justify-center z-50`}>
            <div className={`flex flex-col gap-y-2 bg-white text-black rounded-md p-5 shadow-lg`}>

                <div onClick={setOpen} className={`flex text-2xl text-red-800 justify-end cursor-pointer`}>
                    <AiOutlineCloseCircle/></div>
                <form className={`flex flex-col gap-y-8 `}
                      onSubmit={handleSubmit(onSubmit)}>
                    <div className={`flex flex-col gap-x-3 `}>
                        <label>Email</label>
                        <input name={`email`}
                               type={`email`}
                               className={`inputDiv`}
                               placeholder={`Email`}/>
                    </div>
                    <div className={`flex flex-col gap-x-3 `}>
                        <label>Password</label>
                        <input type={`password`}
                               name={`password`}
                               placeholder={`password`}
                               className={`inputDiv`}/>
                    </div>
                    <div className={`flex flex-col gap-y-2`}>
                        <input type={`submit`}
                               value={`Login`}
                               className={`border p-2 bg-blue-600 text-white font-bold rounded border-blue-300  p-1 cursor-pointer bg-white`}/>
                        <input type={`submit`}
                               value={`Signup`}
                               className={`border p-2 bg-blue-600 text-white font-bold rounded border-blue-300  p-1 cursor-pointer bg-white`}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;