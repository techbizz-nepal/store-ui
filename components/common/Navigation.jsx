import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {sidebarState} from "../../store/atoms";
import Sidebar from "./Sidebar";

function Navigation(props) {
    const [isOpen, setIsOpen] = useRecoilState(sidebarState)

    return (
        <div className={`bg-gray-300`} id={`navigationWrapper`}>
            <div className={`containerDiv flex justify-start items-center`} id={`navigationContainer`}>
                <div
                    onClick={(e) => setIsOpen(!isOpen)}
                    className={`flex gap-x-2 items-center pr-6 py-4 px-2 cursor-pointer hover:bg-blue-800 hover:text-white select-none`}
                    id={`departmentDiv`}>
                    <GiHamburgerMenu className={`text-2xl font-light`}/>
                    <p className={`text-2xl font-light`}>Departments</p>
                </div>

            </div>
            <Sidebar/>
        </div>
    );
}

export default Navigation;