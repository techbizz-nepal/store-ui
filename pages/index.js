import Layout from "../components/Layout";
import React, {useState} from "react";
import Head from "next/head";
import HeroSlider from "../components/home/HeroSlider";
import useSliderAction from "../hooks/useSliderAction";
import {Spacer} from "@nextui-org/react";
import LatestProduct from "../components/home/LatestProduct";
import TopProduct from "../components/home/TopProduct";
import useLatestProducts from "../hooks/useLatestProducts";

const Home = ({serverData, error}) => {
    const {currentIndex, slides, prevSlide, nextSlide, goToSlide} = useSliderAction()
    const {latestProducts} = useLatestProducts()

    if (error) {
        return <h1>Error Occurred</h1>
    }
    return (
        <Layout>
            <Head>
                <title>Welcome to Thamelmart</title>
            </Head>
            <HeroSlider index={currentIndex}
                        slides={slides}
                        onGotoSlideClick={goToSlide}
                        onPrevSlideClick={prevSlide}
                        onNextSlideClick={nextSlide}
            />
            <Spacer y={3}/>
            <LatestProduct title={`Latest Products`} latestProducts={latestProducts}/>
            <Spacer y={5}/>
            <TopProduct title={`Top Products`} topProducts={latestProducts}/>
        </Layout>
    )
}

export default Home