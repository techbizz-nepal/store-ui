import Layout from "../components/Layout";
import axios from "axios";
import {useSetRecoilState} from "recoil";
import {departmentsState} from "../store/atoms";
import React from "react";

export const DepartmentContext = React.createContext(null)
export default function Home({serverData, error}) {
    // const setDepartmentState = useSetRecoilState(departmentsState)
    // if (error !== null) {
    //     setDepartmentState(serverData.categories)
    // }
    return (
        <DepartmentContext.Provider value={serverData.categories}>
            <Layout>

            </Layout>
        </DepartmentContext.Provider>
    )
}

export async function getServerSideProps(context) {
    let serverData = null
    let error = null
    try {
        const response = await axios.get('http://api.techbizz.test');
        const {data} = await response
        serverData = data
    } catch (e) {
        error = e.response.data
    }
    return {

        props: {serverData, error}, // will be passed to the page component as props
    }
}

