import React from 'react';
import {useRouter} from "next/router";
import Layout from "../components/Layout";
import Head from "next/head";
import BreadcrumbNew from "../components/common/BreadcrumbNew";
import * as PropTypes from "prop-types";
import ProductDetail from "../components/abstract/ProductDetail";

ProductDetail.propTypes = {productDetail: PropTypes.shape({imageSrc: PropTypes.string, pageName: PropTypes.string})};
const AbstractProductDetail = () => {
    const router = useRouter()
    const {abstractId} = router.query
    const pageName = abstractId?.toString().replaceAll('-', ' ').toUpperCase().substring(0, 20)
    const productDetail = {
        pageName,
        "imageSrc": 'https://images.unsplash.com/photo-1520564816385-4f9d711941aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
    return (
        <Layout>
            <Head><title>{productDetail.pageName}</title></Head>
            <BreadcrumbNew divider={`>`}/>
            <ProductDetail productDetail={productDetail}/>
        </Layout>
    );
};

export default AbstractProductDetail;