import React from 'react';
import {useRouter} from "next/router";
import Head from "next/head";
import Layout from "../../components/Layout";
import {Collapse, Text} from "@nextui-org/react";
import LatestProduct from "../../components/home/LatestProduct";
import useLatestProducts from "../../hooks/common/useLatestProducts";
import BreadcrumbNew from "../../components/common/BreadcrumbNew";
import {useDepartmentContext} from "../../contexts/department";


const Category = () => {
    const router = useRouter()
    const {getDepartmentByValue} = useDepartmentContext()
    const {latestProducts} = useLatestProducts()
    const {categoryId} = router.query
    const department = getDepartmentByValue(categoryId)
    const pageName = categoryId?.toString().replaceAll('-', ' ').toUpperCase().substring(0, 20)

    if (department === undefined) return <h1>Department Not found!!!</h1>
    return (
        <Layout>
            <Head><title>{categoryId}</title></Head>
            <BreadcrumbNew divider={`>`}/>
            <div id={`title`} className={`flex items-center justify-start containerDiv gap-x-4 px-2 py-6`}>
                <Text h1>{pageName}</Text>
            </div>

            <div className={`flex justify-start containerDiv gap-x-16`}>
                <div id={`filterSide`} className={`w-80`}>
                    <Collapse.Group>

                        <Collapse title="Option A">
                            <div className={`flex items-center gap-x-2 px-4`}>
                                <input type={`checkbox`}/> Check 1
                            </div>
                        </Collapse>

                        <Collapse title="Option B">
                            <div className={`flex items-center gap-x-2 px-4`}>
                                <input type={`checkbox`}/> Check 1
                            </div>
                        </Collapse>

                        <Collapse title="Option C">
                            <div className={`flex items-center gap-x-2 px-4`}>
                                <input type={`checkbox`}/> Check 1
                            </div>
                        </Collapse>

                    </Collapse.Group>
                </div>
                <div id={`contentSide`} className={`flex flex-col gap-y-6 w-full px-4 py-2`}>
                    <div id={`constraint`} className={`flex justify-between items-center px-4 py-2 text-sm`}>
                        <div>12 results</div>
                        <div>Per Page: 12</div>
                        <div>Sort By Name Ascending</div>
                    </div>
                    {
                        latestProducts && <LatestProduct latestProducts={latestProducts}/>
                    }
                </div>
            </div>
        </Layout>
    );
};

export default Category;