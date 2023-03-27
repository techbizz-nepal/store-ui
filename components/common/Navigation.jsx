import React, {useState} from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {useSidebarContext} from "../../contexts/sidebarContext";
import {MdSupportAgent} from "react-icons/md";
import {useRouter} from "next/router";
import {BiCart, BiLogIn} from "react-icons/bi";
import AuthModal from "./AuthModal";
import {Portal} from "../Portal";

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

function Navigation() {
    const router = useRouter()
    const {isOpen, setIsOpen} = useSidebarContext()
    const [navigations, setNavigations] = useState([
        {"id": 1, "active": 1, "label": "Home", "path": "/"},
        {"id": 2, "active": 1, "label": "About", "path": "/page/about"},
        {"id": 3, "active": 1, "label": "Contact", "path": "/page/contact"}
    ])
    const [isAuthOpen, setIsAuthOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)

    const handleAuthOpen = () => {
        setIsAuthOpen(!isAuthOpen)
    }
    const handleCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    }
    const handleLoginClick = () => {
        setIsAuthOpen(!isAuthOpen)
    }
    const handleCartClick = () => {
        setIsCartOpen(!isCartOpen)
    }
    if (!navigations.length) return null
    return (
        <div className={`navigationWrapper sticky top-0 z-50` } id={`navigationWrapper`}>
            <div
                className={`navigationContainer`}
                id={`navigationContainer`}>

                {/* Sidebar button */}
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className={`flex gap-x-2 items-center pr-6 py-4 px-4 cursor-pointer hover:bg-highlight hover:text-white select-none`}
                    id={`departmentDiv`}
                >
                    <GiHamburgerMenu/>
                    <div>Departments</div>
                </div>

                {/*Page navigation*/}
                <div className={`flex gap-x-5 `}>
                    {navigations.map(navigation => (
                        <div key={navigation.id}
                             onClick={() => router.push(navigation.path)}
                             className={`flex items-center py-4 px-4 cursor-pointer hover:bg-highlight hover:text-white select-none`}>{navigation.label}
                        </div>
                    ))}

                </div>

                {/*login and cart div section*/}
                <div
                    className={`flex items-center lg:text-lg gap-x-4 text-white md:text-md lg:text-lg`}>

                    <div className={` cursor-pointer hover:bg-highlight hover:text-white pr-6 py-4 px-4`}>
                        <BiCart
                            className={`text-2xl`} onClick={handleCartClick} />
                    </div>
                    <div className={`flex items-center gap-x-1 cursor-pointer hover:bg-highlight hover:text-white pr-6 py-4 px-4`} onClick={handleLoginClick}>
                        <BiLogIn
                            className={`text-2xl`}/> Login
                    </div>
                </div>

            </div>
            <Portal>
                <AuthModal open={isCartOpen} setOpen={handleCartOpen}/>
            </Portal>
            <Portal>
                <AuthModal open={isAuthOpen} setOpen={handleAuthOpen}/>
            </Portal>
        </div>
    );
}

export default Navigation;