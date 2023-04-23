import React from 'react';
import Head from "next/head";
import Layout from "../components/Layout";

const Register = () => {
    return (
        <Layout>
            <Head>
                <title>Register</title>
            </Head>
            <p className={`text-4xl`}>Register</p>
        </Layout>
    );
};

export default Register;