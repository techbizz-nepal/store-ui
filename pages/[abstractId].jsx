import React, {useState} from 'react';
import {useRouter} from "next/router";
import Layout from "../components/Layout";
import Head from "next/head";
import BreadcrumbNew from "../components/common/BreadcrumbNew";
import {Button} from "@nextui-org/react";
import Image from "next/image";
import {FaShoppingCart} from "react-icons/fa";

const ProductDetail = ({productDetail}) => {
    const [quantity, setQuantity] = useState(1);

    return <div id={`content`}
                className={`flex justify-start gap-x-4 containerDiv`}>
        <div id={`image`} className={`w-full relative basis-2/3`}>
            <Image
                src={productDetail.imageSrc}
                width={1440} height={764}/>
        </div>
        <div id={`detailAction`} className={`flex flex-col gap-y-10 basis-1/3 px-2`}>
            <div id={`title`} className={`text-3xl font-medium`}>{productDetail.pageName}</div>
            <div id={`price`} className="text-7xl font-semibold">$10</div>
            <div id={`quantity`} className={`flex flex-col gap-y-4`}>
                <div id={`quantityLabel`} className={`text-lg font-extralight`}>Quantity</div>
                <div id={`quantityAction`} className="flex gap-x-6 items-center text-2xl">
                    <div
                        onClick={() => setQuantity(prevState => prevState !== 0 ? prevState - 1 : prevState)}
                        className={`flex px-2 font-semibold text-action-600 select-none cursor-pointer py-1 w-10 h-10 border border-action-300 rounded-full items-center justify-center`}>-
                    </div>
                    <div className={`flex items-center justify-center w-6`}>{quantity}</div>
                    <div
                        onClick={() => setQuantity(prevState => prevState >= 0 ? quantity + 1 : prevState)}
                        className={`flex px-2 font-semibold text-action-600 select-none cursor-pointer py-1 w-10 h-10 border border-action-300 rounded-full items-center justify-center`}>+
                    </div>
                </div>
            </div>
            <div id={`addToCartBtn`}>
                <Button size={`lg`} icon={<FaShoppingCart className={`text-white`}/>}>Add to Cart</Button>
            </div>
        </div>
    </div>
}
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