import React, {createContext, FC, useContext, useEffect, useState} from "react";
import api from "../utils/api";
import useRequestPath from "../hooks/common/useRequestPath";

interface IDepartmentArray {
    [index: number]: { id: string, label: string, children_array: [] }
}

const DepartmentContext = createContext({})

export const DepartmentContextProvider: React.FC<any> = ({children}) => {
    const [departmentsArray, setDepartmentsArray] = useState<IDepartmentArray>();
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<{}>()
    const {getNestedCategory} = useRequestPath()

    useEffect(() => {
        const loadDepartments = async () => {
            await api()
                .get(getNestedCategory)
                .then(
                    ({data}) => {
                        setDepartmentsArray([...data[1].categories])
                        setLoading(false)
                        // }
                    },
                    ({response}) => {
                        const [error, message] = [...response.data]
                        setError(message.message)
                        setLoading(false)
                    }
                )
                .finally(() => setLoading(false))

        }
        loadDepartments().then(r => r)
    }, []);
    const getDepartmentByValue: FC<string> = value => {
        return Array.isArray(departmentsArray) && departmentsArray.find(department => department.value === value)
    }
    const context = {departmentsArray, getDepartmentByValue, loading, error}
    return (
        <DepartmentContext.Provider value={context}>
            {children}
        </DepartmentContext.Provider>
    )
}

export const useDepartmentContext = () => {
    return useContext(DepartmentContext)
}