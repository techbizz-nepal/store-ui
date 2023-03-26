import React, {useState} from 'react';
import Image from 'next/image';
import {BiCart, BiLogIn} from "react-icons/bi";
import HeaderSearchInput from "./HeaderSearchInput";
import AuthModal from "./AuthModal";
import {Portal} from "../Portal";

function MainHeader(props) {
    const [open, setOpen] = useState(false)
    const handleLoginClick = () => {
        setOpen(!open)
    }
    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <div id={`mainHeader`}
             className={`containerDiv flex items-center px-1 py-4 gap-x-2 sticky gap-y-3`}
        >
            <div className={`basis-1/4 `}>
                <h1 className={`text-4xl`}>THAMELMART</h1>
            </div>

            <div className={`md:basis-2/4 sm:basis-3/4 `}>

                <HeaderSearchInput/>

            </div>

            <div className={`md:basis-1/4 hidden md:flex justify-end gap-x-5 `}>
                <div className={`flex items-center md:text-md lg:text-lg cursor-pointer text-black`}>
                    <BiCart
                        className={`text-2xl`}/>
                </div>
                <div className={`flex items-center gap-x-2  cursor-pointer text-black`} onClick={handleLoginClick}>
                    <BiLogIn
                        className={`text-2xl`}/> Login
                </div>

            </div>
            <Portal><AuthModal open={open} setOpen={handleOpen}/></Portal>
        </div>
    );
}

export default MainHeader;