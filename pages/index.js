import Layout from "../components/Layout";
import React from "react";
import Head from "next/head";

const Home = ({serverData, error}) => {
    if (error) {
        return <h1>Error Occurred</h1>
    }

    return (
            <>
                <Head>
                    <title>Welcome to Thamelmart</title>
                </Head>
                <Layout>

                </Layout>
            </>
    )
}

export default Home