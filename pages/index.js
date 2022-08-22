import Layout from "../components/Layout";
import axios from "axios";
import React from "react";
import Sidebar from "../components/common/Sidebar";

export const DepartmentContext = React.createContext(null)
const Home = ({serverData, error}) => {
    if (error) {
        return <h1>Error Occurred</h1>
    }

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
        const response = await axios.get(process.env.SERVER_API);
        const {data} = await response
        serverData = data
    } catch (e) {
        error = JSON.stringify(e)
    }
    return {
        props: {serverData, error}, // will be passed to the page component as props
    }
}

export default Home