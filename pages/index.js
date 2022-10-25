import Layout from "../components/Layout";
import axios from "axios";
import React from "react";
import Sidebar from "../components/common/Sidebar";

const Home = ({serverData, error}) => {
    if (error) {
        return <h1>Error Occurred</h1>
    }

    return (
            <Layout>

            </Layout>
    )
}

export default Home