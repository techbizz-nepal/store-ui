import {createContext, useContext, useEffect, useState} from "react";
import api from "../utils/api";

const DepartmentContext = createContext({departmentsArray: []})

export const DepartmentContextProvider = ({children}) => {
    const [departmentsArray, setDepartmentsArray] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        const loadDepartments = async () => {
            await api()
                .get(`/v1/admin/getNestedCategory`)
                .then(
                    ({data}) => {
                        // if (!data[0].error) {
                        setDepartmentsArray([...data[1].categories].slice(0, 18))
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
    const getDepartmentByValue = value => {
        return departmentsArray.find(department => department.value === value)
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