import React, {useState} from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {useSidebarContext} from "../../contexts/sidebarContext";
import {MdSupportAgent} from "react-icons/md";
import {useRouter} from "next/router";

const SidebarButton = ({setIsOpen, isOpen}) => {
    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className={`flex gap-x-2 items-center pr-6 py-4 px-4 cursor-pointer hover:bg-highlight hover:text-white select-none`}
            id={`departmentDiv`}
        >
            <GiHamburgerMenu/>
            <div>Departments</div>
        </div>
    )
}
const PageNavigation = ({navigations}) => {
    const router = useRouter()
    if(!navigations.length) return null
    return (
        <div className={`flex gap-x-5 `}>
            {navigations.map(navigation => (
                <div key={navigation.id}
                     onClick={() => router.push(navigation.path)}
                     className={`flex items-center py-4 px-4 cursor-pointer hover:bg-highlight hover:text-white select-none`}>{navigation.label}
                </div>
            ))}

        </div>
    )
}
const SupportDiv = () => {
    return (
        <div
            className={`flex gap-x-2 items-center pr-6 py-4 px-4 cursor-pointer hover:bg-highlight hover:text-white select-none`}>
            <MdSupportAgent/>
            <a href={`tel:0.00.0000`} className={`select-none cursor-pointer text-white`}>0.00.0000</a>
        </div>
    )
}

function Navigation() {
    const {isOpen, setIsOpen} = useSidebarContext()
    const [navigations, setNavigations] = useState([
        {"id": 1, "active": 1, "label": "Home", "path": "/"},
        {"id": 2, "active": 1, "label": "About", "path": "/page/about"},
        {"id": 3, "active": 1, "label": "Contact", "path": "/page/contact"}
    ])
    return (
        <div className={`navigationWrapper`} id={`navigationWrapper`}>
            <div
                className={`navigationContainer`}
                id={`navigationContainer`}>
                <SidebarButton setIsOpen={setIsOpen} isOpen={isOpen}/>
                <PageNavigation navigations={navigations}/>
                <SupportDiv/>
            </div>
        </div>
    );
}

export default Navigation;