import React from 'react';
import {useRouter} from "next/router";
import Head from "next/head";
import Layout from "../../components/Layout";

const Page = () => {
    const router = useRouter()
    const {pageId} = router.query
    return (
        <Layout>
            <Head><title>{pageId}</title></Head>
            <div className={`containerDiv flex justify-center items-center h-screen`}>
                <p className={`text-6xl`}>{pageId}</p>
            </div>
        </Layout>
    );
};

export default Page;