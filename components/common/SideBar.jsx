import React from 'react';
import {useSidebarContext} from "../../contexts/sidebarContext";
import {useRouter} from "next/router";

const SingleDepartment = ({department: {id, label, value, children_categories}, onDepartmentClick}) => {


    return (
        <div className={`flex justify-between items-center cursor-pointer`}
             onClick={(event) => onDepartmentClick(event, value)}>
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

function SideBar({departments}) {
    const {isOpen, setIsOpen} = useSidebarContext()
    const visibility = isOpen ? `translate-0` : `-translate-x-full`
    const router = useRouter()
    const handleDepartmentClick = (e, value) => {
        // console.log(e, value)
        router.push(value).catch((e) => console.log(e))
    }
    return (
        <div
            className={`z-10 absolute flex top-0 left-0 w-full h-screen transition-all ease-in-out duration-300 ${visibility} `}>

            <div className={`flex-none bg-slate-500 overflow-y-scroll`}>

                <ul className={`w-80`}>
                    {
                        departments?.length
                        && departments.map((department) => <SingleDepartment onDepartmentClick={handleDepartmentClick}
                                                                             department={department}
                                                                             key={department.id}/>)
                    }
                </ul>
            </div>

            <div className={`flex-1`} onClick={() => setIsOpen(!isOpen)}></div>

        </div>
    );
}

export default SideBar;