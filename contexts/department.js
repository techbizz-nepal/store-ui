import {createContext, useContext, useEffect, useState} from "react";
import api from "../utils/api";

const DepartmentContext = createContext({departmentsArray:[]})

export const DepartmentContextProvider = ({children}) => {
    const [departmentsArray, setDepartmentsArray] = useState([]);

    useEffect(() => {
        const loadDepartments = async () => {
            await api().get(`/v1/admin/getNestedCategory`).then(({data}) => {
                if (!data[0].error) {
                    setDepartmentsArray([...data[1].categories].slice(0, 18))
                }
            })
        }
        loadDepartments().then(r => r)
    }, []);

    const context = {departmentsArray}
    return (
        <DepartmentContext.Provider value={context}>
            {children}
        </DepartmentContext.Provider>
    )
}

export const useDepartmentContext = () => {
    return useContext(DepartmentContext)
}