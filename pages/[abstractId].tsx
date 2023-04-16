import React from 'react';
import {useRouter} from "next/router";
import Layout from "../components/Layout";
import Head from "next/head";
import BreadcrumbNew from "../components/common/BreadcrumbNew";
import Product from "../components/abstract/Product";
import useLatestProducts from "../hooks/common/useLatestProducts";

const AbstractProductDetail = () => {
    const {getProductBySlug} = useLatestProducts()
    const router = useRouter()
    const {abstractId} = router.query
    const product = getProductBySlug(abstractId)
    if (product === undefined) return <h1>Product not found!</h1>
    return (
        <Layout>
            <Head><title>{product?.title}</title></Head>
            <BreadcrumbNew/>
            <Product product={product}/>
        </Layout>
    );
};

export default AbstractProductDetail;