import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import Layout from "../components/Layout";
import Head from "next/head";
import BreadcrumbNew from "../components/common/BreadcrumbNew";
import * as PropTypes from "prop-types";
import ProductDetail from "../components/abstract/ProductDetail";
import useLatestProducts from "../hooks/useLatestProducts";
import productDetail from "../components/abstract/ProductDetail";
import {Loading} from "@nextui-org/react";

ProductDetail.propTypes = {productDetail: PropTypes.shape({imageSrc: PropTypes.string, pageName: PropTypes.string})};
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
            <ProductDetail product={product}/>
        </Layout>
    );
};

export default AbstractProductDetail;