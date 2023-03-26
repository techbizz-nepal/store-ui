import React from 'react';
import {useRouter} from "next/router";
import Head from "next/head";
import Layout from "../../components/Layout";

const Category = () => {
    const router = useRouter()
    const {categoryId} = router.query
    return (
        <div>
            <Layout>
                <Head><title>{categoryId}</title></Head>
                <div className={`containerDiv flex justify-center items-center h-screen`}>
                    <p className={`text-6xl`}>{categoryId}</p>
                </div>
            </Layout>
        </div>
    );
};

export default Category;