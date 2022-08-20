import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {useRecoilValue} from "recoil";
import {sidebarState} from "../../store/atoms";

function Navigation(props) {
    const {open} = useRecoilValue(sidebarState)
    return (
        <div className={`bg-gray-300`} id={`navigationWrapper`}>
            <div className={`containerDiv flex justify-start items-center`} id={`navigationContainer`}>
                <div
                    className={`flex gap-x-2 items-center pr-6 py-4 px-2 cursor-pointer hover:bg-blue-800 hover:text-white`}
                    id={`departmentDiv`}>
                    <GiHamburgerMenu/>
                    <p className={`text-2xl font-light`}>Departments</p>
                </div>
            </div>
        </div>
    );
}

export default Navigation;