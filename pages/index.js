import Layout from "../components/Layout";
import React, {useState} from "react";
import Head from "next/head";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";

const HeroSlider = ({index, onNextSlideClick, onPrevSlideClick, onGotoSlideClick, slides}) => {
    return (
        <div className={`max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group`}>
            <div style={{backgroundImage: `url(${slides[index].url})`}}
                 className={`w-full h-full rounded-2xl bg-center bg-cover duration-500`}></div>
            <div
                onClick={onPrevSlideClick}
                className={`hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer`}>
                <BsChevronCompactLeft size={30}/>
            </div>
            <div
                onClick={onNextSlideClick}
                className={`hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer`}>
                <BsChevronCompactRight size={30}/>
            </div>
            <div className={`flex top-4 justify-center py-2`}>
                {
                    slides.map((slide, slideIndex) => (
                        <div key={slide.id} onClick={() => onGotoSlideClick(slideIndex)}
                             className={`text-2xl cursor-pointer`}><RxDotFilled/></div>
                    ))
                }
            </div>
        </div>
    )
}
const Home = ({serverData, error}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [slides, setSlides] = useState([
        {
            id: "slide-1",
            url: 'https://images.unsplash.com/photo-1520564816385-4f9d711941aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            id: "slide-2",
            url: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
        },
        {
            id: "slide-3",
            url: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80'
        },
        {
            id: "slide-4",
            url: 'https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1227&q=80'
        },
    ])
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    const goToSlide = (index) => {
        setCurrentIndex(index)
    }
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