import React from 'react';
import {useRouter} from "next/router";
import Layout from "../components/Layout";
import Head from "next/head";
import S from "string"
const AbstractProductDetail = () => {
    const router = useRouter()
    const {abstractId} = router.query
    const abstractIdTitleCase = abstractId !== undefined && S(abstractId).replaceAll('-', ' ').titleCase().s
    return (
        <Layout>
            <Head><title>{abstractIdTitleCase}</title></Head>
            <div className={`containerDiv flex justify-center items-center h-screen`}>
                <p className={`text-6xl`}>{abstractIdTitleCase}</p>
            </div>
        </Layout>
    );
};

export default AbstractProductDetail;