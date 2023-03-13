import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {useSidebarContext} from "../../contexts/sidebarContext";
import {MdSupportAgent} from "react-icons/md";

const SidebarButton = ({setIsOpen, isOpen}) => {
    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className={`flex gap-x-2 items-center pr-6 py-4 px-4 cursor-pointer hover:bg-secondary hover:text-white select-none`}
            id={`departmentDiv`}
        >
            <GiHamburgerMenu/>
            <div>Departments</div>
        </div>
    )
}
const PageNavigation = () => {
    return (
        <div className={`flex gap-x-5 `}>
            <div
                className={`flex items-center py-4 px-4 cursor-pointer hover:bg-secondary hover:text-white select-none`}>Home
            </div>
            <div
                className={`flex items-center py-4 px-4 cursor-pointer hover:bg-secondary hover:text-white select-none`}>About
            </div>
            <div
                className={`flex items-center py-4 px-4 cursor-pointer hover:bg-secondary hover:text-white select-none`}>Contact
            </div>
        </div>
    )
}
const SupportDiv = () => {
    return (
        <div
            className={`flex gap-x-2 items-center pr-6 py-4 px-4 cursor-pointer hover:bg-secondary hover:text-white select-none`}>
            <MdSupportAgent/>
            <a href={`tel:0.00.0000`} className={`select-none cursor-pointer text-white`}>0.00.0000</a>
        </div>
    )
}

function Navigation(props) {
    const {isOpen, setIsOpen} = useSidebarContext()

    return (
        <div className={`bg-primary text-white text-lg`} id={`navigationWrapper`}>
            <div
                className={`containerDiv flex items-center justify-between sm:text-sm md:text-md lg:text-lg font-light font-semibold`}
                id={`navigationContainer`}>
                <SidebarButton setIsOpen={setIsOpen} isOpen={isOpen}/>
                <PageNavigation/>
                <SupportDiv/>
            </div>
        </div>
    );
}

export default Navigation;