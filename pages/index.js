import Layout from "../components/Layout";
import React from "react";
import Head from "next/head";
import HeroSlider from "../components/home/HeroSlider";
import useSliderAction from "../hooks/useSliderAction";


const Home = ({serverData, error}) => {
    const {currentIndex, slides, prevSlide, nextSlide, goToSlide} = useSliderAction()
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
        </Layout>
    )
}

export default Home