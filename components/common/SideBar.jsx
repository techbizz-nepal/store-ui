"use client"
import React from 'react';
import {useSidebarContext} from "../../contexts/sidebarContext";
import {useRouter} from "next/router";

const SingleDepartment = ({
                              department: {id, label, value, children_categories},
                              onDepartmentClick,
                              refObject
                          }) => {
    return (
        <div className={`singleDepartmentDiv`}
             ref={refObject}
             onClick={(event) => onDepartmentClick(event, value)}
        >
            <p>
                {label} ({children_categories.length})
            </p>
        </div>
    )
}

function SideBar({departments}) {
    const {isOpen, setIsOpen} = useSidebarContext()
    const visibility = isOpen ? `translate-0` : `-translate-x-full`
    const router = useRouter()
    const handleDepartmentClick = (e, value) => {
        router.push('/department/'+value).catch((e) => console.log(e))
        setTimeout(() => {
            setIsOpen(!isOpen)
        }, 1000)
    }
    return (
        <div
            id={`absoluteWrapper`}
            className={`z-50 fixed flex top-0 left-0 w-full h-screen transition-all ease-in-out duration-300 ${visibility}`}>
            <div className={`singleDepartmentWrapper`}>

                {
                    departments?.length
                    && departments.map((department) => <SingleDepartment
                        onDepartmentClick={handleDepartmentClick}
                        department={department}
                        key={department.id}/>)
                }
            </div>
            <div className={`flex-1`} onClick={() => setIsOpen(!isOpen)}></div>
        </div>
    );
}

export default SideBar;