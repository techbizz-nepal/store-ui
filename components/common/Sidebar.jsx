import React, {useEffect} from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import {sidebarState} from "../../store/atoms";
import {CgClose} from "react-icons/cg";
import {DepartmentContext} from "../../pages";
import {BiChevronDown} from "react-icons/bi";

function Sidebar(props) {
    const [isOpen, setIsOpen] = useRecoilState(sidebarState)
    const departments = React.useContext(DepartmentContext)
    useEffect(() => {
        console.log(departments)
    });

    const sidebarDivStyle = isOpen
        ? 'flex flex-col absolute top-0 bg-white w-3/12 p-5 overflow-hidden'
        : 'hidden'
    const SingleDepartment = ({department}) =>
        <div className={`flex justify-between`}>
            <li
                className={`p-3 cursor-pointer`}
                key={department.id}>
                <a className={`hover:text-blue-400`}>
                    {department.title}
                </a>
            </li>
            <BiChevronDown className={`cursor-pointer`}/>
        </div>

    return (
        <div className={sidebarDivStyle}>

            <div className={`flex justify-between text-2xl pb-5 items-center `}>
                <div>Departments</div>
                <CgClose className={`cursor-pointer`} onClick={() => setIsOpen(!isOpen)}/>
            </div>
            <div>
                <ul>
                    {
                        departments.length
                        && departments.map((department) => <SingleDepartment department={department}
                                                                             key={department.id}/>)
                    }
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;