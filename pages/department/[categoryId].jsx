import React from 'react';
import {useRouter} from "next/router";
import Head from "next/head";
import Layout from "../../components/Layout";
import {Collapse, Text} from "@nextui-org/react";

const Category = () => {
    const router = useRouter()
    const {categoryId} = router.query
    return (
        <div>
            <Layout>
                <Head><title>{categoryId}</title></Head>
                <Collapse.Group>
                    <Collapse title="Option A">
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </Text>
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
                <div className={`containerDiv flex justify-center items-center h-screen`}>
                    <p className={`text-6xl`}>{categoryId}</p>
                </div>
            </Layout>
        </div>
    );
};

export default Category;