import React from 'react';
import {useRouter} from "next/router";
import Layout from "../components/Layout";
import Head from "next/head";
const AbstractProductDetail = () => {
    const router = useRouter()
    const {abstractId} = router.query
    return (
        <Layout>
            <Head><title>{abstractId}</title></Head>
            <div className={`containerDiv flex justify-center items-center h-screen`}>
                <p className={`text-6xl`}>{abstractId}</p>
            </div>
        </Layout>
    );
};

export default AbstractProductDetail;