import Layout from "../components/Layout";
import React from "react";

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