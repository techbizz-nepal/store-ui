import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import Layout from "../components/Layout";
import Head from "next/head";
import BreadcrumbNew from "../components/common/BreadcrumbNew";
import * as PropTypes from "prop-types";
import Product from "../components/abstract/Product";
import useLatestProducts from "../hooks/common/useLatestProducts";
import productDetail from "../components/abstract/Product";
import {Loading} from "@nextui-org/react";

Product.propTypes = {productDetail: PropTypes.shape({imageSrc: PropTypes.string, pageName: PropTypes.string})};
const AbstractProductDetail = () => {
    const {getProductBySlug} = useLatestProducts()
    const router = useRouter()
    const {abstractId} = router.query
    const product = getProductBySlug(abstractId)
    if(product === undefined) return <h1>Product not found!</h1>
    return (
        <Layout>
            <Head><title>{product?.title}</title></Head>
            <BreadcrumbNew/>
            <Product product={product}/>
        </Layout>
    );
};

export default AbstractProductDetail;