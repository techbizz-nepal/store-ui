import React from 'react';
import Head from "next/head";
import Layout from "../components/Layout";

const Search = () => {
    return (
        <Layout>
            <Head>
                <title>Register</title>
            </Head>
            <p className={`text-4xl`}>search</p>
        </Layout>
    );
};

export default Search;