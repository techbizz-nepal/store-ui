import React, {useState} from 'react';
import {AiOutlineCloseCircle} from "react-icons/ai";
import {FieldValues, useForm} from "react-hook-form";
import FormField from "./FormField";

const LoginModal = ({open, setOpen}) => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const [effect, setEffect] = useState(false);
    if (!open) return null
    const onSubmit = () => {
        console.log('submitted')
    }
    return (
        <div
            className={`absolute top-0 bottom-0 bg-opacity-40 bg-slate-200 w-full h-screen flex items-center justify-center`}>
            <div className={`flex flex-col gap-y-2 bg-white text-black rounded-md p-5 shadow-lg`}>

                <div onClick={setOpen} className={`flex text-2xl text-red-800 justify-end cursor-pointer`}>
                    <AiOutlineCloseCircle/></div>
                <div className={`gap-y-8`}>
                    <form
                        onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <FormField
                                register={register}
                                wrapperClass={`mb-4 flex flex-col`}
                                labelName={`Email`}
                                labelClassName={``}
                                defaultValue={``}
                                inputType={`text`}
                                inputName={`email`}
                                inputClassName={``}
                            />
                        </div>
                        <div>
                            <FormField
                                register={register}
                                wrapperClass={`mb-4 flex flex-col`}
                                labelName={`Password`}
                                labelClassName={``}
                                defaultValue={``}
                                inputType={`password`}
                                inputName={`password`}
                                inputClassName={``}
                            />
                        </div>
                        <div className={`flex flex-col gap-y-2`}>
                            <input type={`submit`}
                                   value={`Login`}
                                   className={`${effect && 'animate-scale'} border p-2 bg-action text-white font-bold rounded p-1 cursor-pointer bg-white`}
                                   onClick={() => setEffect(true)}
                                   onAnimationEnd={() => setEffect(false)}
                            />
                            <input type={`submit`}
                                   value={`Signup`}
                                   className={`border p-2 bg-action text-white font-bold rounded p-1 cursor-pointer bg-white`}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;