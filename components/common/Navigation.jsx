import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {useSidebarContext} from "../../contexts/sidebarContext";

function Navigation(props) {
    const {isOpen, toggleSidebar} = useSidebarContext()

    return (
        <div className={`bg-blue-500 text-white`} id={`navigationWrapper`}>
            <div className={`containerDiv flex justify-start items-center`} id={`navigationContainer`}>
                <div
                    onClick={toggleSidebar}
                    className={`flex gap-x-2 items-center pr-6 py-4 px-2 cursor-pointer hover:bg-blue-800 hover:text-white select-none`}
                    id={`departmentDiv`}>
                    <GiHamburgerMenu className={`text-2xl font-light`}/>
                    <p className={`text-2xl font-light`}>Departments</p>
                </div>

            </div>
        </div>
    );
}

export default Navigation;