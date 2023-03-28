import React from 'react';
import {useRouter} from "next/router";
import Layout from "../components/Layout";
import Head from "next/head";
import BreadcrumbNew from "../components/common/BreadcrumbNew";
import {Text} from "@nextui-org/react";
import Image from "next/image";

const AbstractProductDetail = () => {
    const router = useRouter()
    const {abstractId} = router.query
    const pageName = abstractId.toString().replaceAll('-', ' ').toUpperCase().substring(0, 20)

    return (
        <Layout>
            <Head><title>{pageName}</title></Head>
            <BreadcrumbNew divider={`>`}/>
            <div id={`title`} className={`flex items-center justify-start containerDiv gap-x-4 px-2 py-6`}>
                <Text h1>{pageName}</Text>
            </div>
            <div id={`content`} className={`flex justify-start gap-x-4 containerDiv`}>
                <div id={`image`} className={`w-full relative basis-3/5`}>
                    <Image
                        src={`https://images.unsplash.com/photo-1520564816385-4f9d711941aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
                        layout={`fill`}/>
                </div>
                <div id={`detail`} className={`flex flex-col gap-y-2 basis-2/5`}>
                    <div id="description" className="text-3xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Dignissimos, eaque earum eius enim eum, excepturi expedita iusto laborum laudantium maiores
                        minima neque placeat quae quis sit tenetur unde. Perspiciatis, voluptatibus.
                    </div>
                    <div id="quantity" className="flex gap-x-2">
                        <div>-</div>
                        <div>20</div>
                        <div>+</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AbstractProductDetail;