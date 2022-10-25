import {createContext, useContext, useEffect, useState} from "react";
import api from "../utils/api";

const DepartmentContext = createContext({})

export const DepartmentContextProvider = ({children}) => {
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        const loadDepartments = async () => {
            // await api().get(``).then(({data}) => {
            //     if (!data[0].error) {
            //         setDepartments(data[1].departments)
            //     }
            // })
            setDepartments([
                {id: 1, title: "department1"},
                {id: 2, title: "department2"},
                {id: 3, title: "department3"}
            ])
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