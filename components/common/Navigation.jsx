import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {useSidebarContext} from "../../contexts/sidebarContext";

function Navigation(props) {
    const {isOpen, setIsOpen} = useSidebarContext()

    return (
        <div className={`bg-gray-800 text-white`} id={`navigationWrapper`}>
            <div className={`containerDiv flex justify-start items-center`} id={`navigationContainer`}>
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className={`flex gap-x-2 items-center pr-6 py-4 px-2 cursor-pointer hover:bg-gray-900 hover:text-white select-none`}
                    id={`departmentDiv`}>
                    <GiHamburgerMenu className={`text-2xl font-light`}/>
                    <p className={`text-2xl font-light`}>Departments</p>
                </div>

            </div>
        </div>
    );
}

export default Navigation;