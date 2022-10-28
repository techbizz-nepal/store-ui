import {createContext, useContext, useEffect, useState} from "react";
import api from "../utils/api";

const DepartmentContext = createContext({})

export const DepartmentContextProvider = ({children}) => {
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        const loadDepartments = async () => {
            await api().get(`/v1/admin/getNestedCategory`).then(({data}) => {
                if (!data[0].error) {
                    // console.log(data[1])
                    setDepartments(data[1].categories)
                }
            })
        }
        loadDepartments().then(r => r)
    }, []);

    const context = {departments}
    return (
        <DepartmentContext.Provider value={context}>
            {children}
        </DepartmentContext.Provider>
    )
}

export const useDepartmentContext = () => {
    return useContext(DepartmentContext)
}