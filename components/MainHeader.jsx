import React from 'react';
import Image from 'next/image';
import {BiCart, BiLogIn} from "react-icons/bi";
import HeaderSearchInput from "./HeaderSearchInput";

function MainHeader(props) {
    return (
        <div
            className={`containerDiv flex items-center py-1  `}>
            <div className={`basis-1/4 flex items-center`}>
                <Image src={`https://via.placeholder.com/300x50.png?text=Logo+Placeholder`}
                       width={300}
                       height={50}
                       alt={`logo`}
                       layout={"responsive"}
                />
            </div>
            <div className={`md:basis-2/4 sm:basis-3/4 `}>

                <HeaderSearchInput/>

            </div>
            <div className={`md:basis-1/4 hidden md:flex justify-end gap-x-5 `}>
                <div className={`flex items-center md:text-md lg:text-lg cursor-pointer`}>
                    <BiCart
                        className={`text-2xl`}/>
                </div>
                <div className={`flex items-center gap-x-2  cursor-pointer`}>
                    <BiLogIn
                        className={`text-2xl`}/> Login
                </div>

            </div>
        </div>
    );
}

export default MainHeader;