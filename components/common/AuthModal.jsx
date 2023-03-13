import React, {useState} from 'react';
import {AiOutlineCloseCircle} from "react-icons/ai";
import {useForm} from "react-hook-form";
import FormField from "./FormField";
import SignupForm from "../auth/SignupForm";
import LoginForm from "../auth/LoginForm";

const AuthModal = ({open, setOpen}) => {
    const [activeForm, setActiveForm] = useState('register')
    const {
        register:loginFormRegister,
        handleSubmit:loginFormHandleSubmit,
        watch:loginFormWatch,
        formState: {errors:loginFormErrors}
    } = useForm({mode:"onBlur"});
    const {
        register:signupFormRegister,
        handleSubmit:signupFormHandleSubmit,
        watch:signupFormWatch,
        formState: {errors:signupFormErrors}
    } = useForm({mode:"onBlur"});
    const [effect, setEffect] = useState(false);
    const [disable, setDisable] = useState(false)
    const [loginSubmitText, setLoginSubmitText] = useState('Login')
    const [registerSubmitText, setRegisterSubmitText] = useState('Register')
    if (!open) return null
    const handleLoginSubmit = (formValues) => {
        console.log(formValues)
        setEffect(true)
        setDisable(true)
        setLoginSubmitText('Please wait...')
        setTimeout(() => {
            setLoginSubmitText('Login')
            setDisable(false)
        }, 4000)
    }
    const handleRegisterSubmit = (formValues) => {
        setEffect(true)
        setDisable(true)
        setRegisterSubmitText('Please wait...')
        setTimeout(() => {
            setRegisterSubmitText('Register')
            setDisable(false)
        }, 4000)
    }
    return (
        <div
            className={`absolute top-0 bottom-0 bg-opacity-80 bg-black w-full h-screen flex items-center justify-center`}>

            <div className={`flex flex-col gap-y-2 bg-white rounded-md p-5 shadow-lg`}>

                <div onClick={setOpen} className={`flex text-2xl text-red-800 justify-end cursor-pointer`}>
                    <AiOutlineCloseCircle/></div>

                <div id={`switcher`} className={`flex px-2 py-6 items-center h-full gap-x-2`}>
                    <div
                        onClick={() => setActiveForm('register')}
                        className={`p-4 flex-1 bg-neutral-400 shadow-lg rounded-t-lg cursor-pointer text-white ${activeForm === 'register' && 'bg-action'}`}>
                        <p>Register</p>
                    </div>
                    <div
                        onClick={() => setActiveForm('login')}
                        className={`p-4 flex-1 bg-neutral-400 shadow-lg rounded-t-lg cursor-pointer text-white ${activeForm === 'login' && 'bg-action'}`}>
                        <p>Login</p>
                    </div>
                </div>

                {/* signup form starts here*/}
                {activeForm === 'register' && <SignupForm
                    register={signupFormRegister}
                    onRegisterSubmit={handleRegisterSubmit}
                    effect={effect}
                    disable={disable}
                    errors={signupFormErrors}
                    handleSubmit={signupFormHandleSubmit}
                    setEffect={setEffect}
                    registerSubmitText={registerSubmitText}/>}

                {/* login Form starts here*/}
                {activeForm === 'login' && <LoginForm
                    register={loginFormRegister}
                    onLoginSubmit={handleLoginSubmit}
                    effect={effect}
                    disable={disable}
                    errors={loginFormErrors}
                    handleSubmit={loginFormHandleSubmit}
                    setEffect={setEffect}
                    LoginSubmitText={loginSubmitText}/>}
            </div>
        </div>
    );
};

export default AuthModal;