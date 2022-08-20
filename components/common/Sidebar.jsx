import React, {useEffect, useRef} from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import {sidebarState} from "../../store/atoms";
import {CgClose} from "react-icons/cg";

function Sidebar(props) {
    const [isOpen, setIsOpen] = useRecoilState(sidebarState)

    const sidebarDivStyle = isOpen
        ? 'flex flex-col absolute top-0 bg-white w-3/12 p-4'
        : 'hidden absolute top-0 bg-white w-3/12 p-4'

    return (
        <div className={sidebarDivStyle}>
            <div className={`flex justify-between text-2xl pb-5 items-center`}>
                <div>Departments</div>
                <CgClose className={`cursor-pointer`} onClick={() => setIsOpen(!isOpen)}/>
            </div>

        </div>
    );
}

export default Sidebar;