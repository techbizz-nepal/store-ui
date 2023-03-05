import Layout from "../components/Layout";
import React from "react";
import Head from "next/head";
import Content from "../components/common/Content";

const Home = ({serverData, error}) => {
    if (error) {
        return <h1>Error Occurred</h1>
    }

    return (
        <Layout>
            <Head>
                <title>Welcome to Thamelmart</title>
            </Head>
        </Layout>
    )
}

export default Home