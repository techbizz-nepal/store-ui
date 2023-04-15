"use client"

import React from 'react';
import HeaderSearchInput from "./HeaderSearchInput";
import {useRouter} from "next/router";
import {MdSupportAgent} from "react-icons/md";

function MainHeader(props) {

    const router = useRouter()


    return (
        <div id={`mainHeader`}
             className={`containerDiv flex items-center px-1 py-4 gap-x-2 z-49 gap-y-3`}
        >
            <div className={`basis-1/4 `} onClick={() => router.push('/')}>
                <h1 className={`text-4xl cursor-pointer select-none`}>THAMELMART</h1>
            </div>

            <div className={`md:basis-2/4 sm:basis-3/4 `}>

                <HeaderSearchInput/>

            </div>

            <div className={`md:basis-1/4 hidden md:flex justify-end gap-x-5 `}>
                <div className={`flex gap-x-2 items-center cursor-pointer select-none`}>

                    <MdSupportAgent className={`text-4xl`}/>
                    <a href={`tel:0.00.0000`} className={`select-none cursor-pointer text-black text-4xl`}>0.00.0000</a>
                </div>

            </div>

        </div>
    );
}

export default MainHeader;