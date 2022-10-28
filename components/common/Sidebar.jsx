import React from 'react';
import {useRecoilState} from "recoil";
import {sidebarState} from "../../store/atoms";
import {CgClose} from "react-icons/cg";
import {BiChevronDown} from "react-icons/bi";
import {useDepartmentContext} from "../../contexts/department";
import {useSidebarContext} from "../../contexts/sidebarContext";

function Sidebar(props) {
    const {isOpen, toggleSidebar} = useSidebarContext()
    const {departments} = useDepartmentContext()
    const sidebarDivStyle = isOpen
        ? 'flex flex-col absolute  top-0 bg-white md:w-3/12 w-screen overflow-hidden'
        : 'hidden'

    const TestComponent = ({id, label, children_categories}) => {
        if (!children_categories.length) {
            return null
        }

        return (
            <ul className={`flex justify-between items-center cursor-pointer`}
                 onClick={(event) => console.log(id)}>
                <li
                    className={`p-3`}
                    key={id}>
                    <a className={`hover:text-blue-400`}>
                        {label}
                    </a>
                </li>
                {
                    children_categories.length ? <BiChevronDown className={`cursor-pointer`}/> : null
                }
            </ul>
        )
    }

    const SingleDepartment = ({department: {id, label, children_categories}}) => {



        return (
            <div className={`flex justify-between items-center cursor-pointer`}
                 onClick={(event) => console.log(id)}>
                <li
                    className={`p-3`}
                    key={id}>
                    <a className={`hover:text-blue-400`}>
                        {label}

                    </a>
                    <TestComponent id={id} children_categories={children_categories} label={label} />

                </li>
                {
                    children_categories.length ? <BiChevronDown className={`cursor-pointer`}/> : null
                }
            </div>
        )
    }


    return (
        <div className={sidebarDivStyle}>

            <div className={`flex justify-between text-2xl p-3 items-center border-b-4 border-b-gray-900`}>
                <div className={`text-2xl font-bold`}>Departments</div>
                <CgClose className={`cursor-pointer`} onClick={toggleSidebar}/>
            </div>

            <div>
                <ul className={`max-h-screen overflow-y-scroll`}>
                    {
                        departments?.length
                        && departments.map((department) => <SingleDepartment department={department}
                                                                             key={department.id}/>)
                    }
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;