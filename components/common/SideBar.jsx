import React from 'react';
import {useSidebarContext} from "../../contexts/sidebarContext";
import {GiHamburgerMenu} from "react-icons/gi";
import {useDepartmentContext} from "../../contexts/department";
import {BiChevronDown} from "react-icons/bi";
const SingleDepartment = ({department: {id, label, children_categories}}) => {


    return (
        <div className={`flex justify-between items-center cursor-pointer`}
             onClick={(event) => console.log(id)}>
            <li
                className={`p-3`}
                key={id}>
                <a className={`hover:text-blue-400`}>
                    {label} ({children_categories.length})

                </a>

            </li>
        </div>
    )
}

function SideBar(props) {
    const {isOpen, setIsOpen} = useSidebarContext()
    const {departments} = useDepartmentContext()
    const visibility = isOpen ? `translate-0` : `-translate-x-full`

    return (
        <div
            className={`z-10 absolute flex top-0 left-0 w-full h-screen transition-all ease-in-out duration-300 ${visibility} `}>

            <div className={`flex-none bg-slate-500 overflow-y-scroll`}>

                <ul className={ `w-80`}>
                    {
                        departments?.length
                        && departments.map((department) => <SingleDepartment department={department}
                                                                             key={department.id}/>)
                    }
                </ul>
            </div>

            <div className={`flex-1`} onClick={() => setIsOpen(!isOpen)}></div>

        </div>
    );
}

export default SideBar;