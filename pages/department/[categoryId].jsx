import React from 'react';
import {useRouter} from "next/router";
import Head from "next/head";
import Layout from "../../components/Layout";
import {Collapse, Text} from "@nextui-org/react";
import LatestProduct from "../../components/home/LatestProduct";
import latestProduct from "../../components/home/LatestProduct";
import useLatestProducts from "../../hooks/useLatestProducts";
import BreadcrumbNew from "../../components/common/BreadcrumbNew";



const Category = () => {
    const router = useRouter()
    const {latestProducts} = useLatestProducts()
    const {categoryId} = router.query
    const pageName = categoryId.toString().replaceAll('-', ' ').toUpperCase().substring(0, 20)
    return (
            <Layout>
                <Head><title>{categoryId}</title></Head>
                <BreadcrumbNew divider={`>`}/>
                <div id={`title`} className={`flex items-center justify-start containerDiv gap-x-4 px-2 py-6`}>
                    <Text h1>{pageName}</Text>
                </div>

                <div className={`flex justify-start containerDiv gap-x-16`}>
                    <div id={`filterSide`} className={`w-64`}>
                        <Collapse.Group>
                            <Collapse title="Option A">
                                <div className={`flex items-center gap-x-2 px-4`}>
                                    <input type={`checkbox`}/> Check 1
                                </div>
                            </Collapse>
                            <Collapse title="Option B">
                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                </Text>
                            </Collapse>
                            <Collapse title="Option C">
                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                </Text>
                            </Collapse>
                        </Collapse.Group>
                    </div>
                    <div id={`contentSide`} className={`flex flex-col gap-y-6 w-full px-4 py-2`}>
                        <div className={`flex justify-between items-center px-4 py-2 text-sm`}>
                            <div>12 results</div>
                            <div>Per Page: 12</div>
                            <div>Sort By Name Ascending</div>
                        </div>
                        <div>
                            <LatestProduct latestProducts={latestProducts}/>
                        </div>
                    </div>
                </div>
            </Layout>
    );
};

export default Category;