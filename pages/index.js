import Layout from "../components/Layout";
import React, {useState} from "react";
import Head from "next/head";
import HeroSlider from "../components/home/HeroSlider";
import useSliderAction from "../hooks/useSliderAction";
import {Card, Grid, Link, Row, Spacer, Text} from "@nextui-org/react";

const LatestProduct = ({latestProducts}) => {

    return (
        <div className={`containerDiv px-4 flex flex-col`}>
            <div className={`flex items-center justify-between px-4`}>
                <div><Text h2>Latest Deals</Text></div>
                <div className={`text-sm hover:text-secondary-600 text-black cursor-pointer select-none`}>View All</div>
            </div>
            <div>
                <Grid.Container gap={2} justify="flex-start">
                    {latestProducts.map((item, index) => (
                        <Grid xs={6} sm={3} key={index}>
                            <Card isPressable>
                                <Card.Body css={{p: 0}}>
                                    <Card.Image
                                        src={"https://nextui.org" + item.img}
                                        objectFit="cover"
                                        width="100%"
                                        height={140}
                                        alt={item.title}
                                    />
                                </Card.Body>
                                <Card.Footer css={{justifyItems: "flex-start"}}>
                                    <Row wrap="wrap" justify="space-between" align="center">
                                        <Text b>{item.title}</Text>
                                        <Text css={{color: "$accents7", fontWeight: "$semibold", fontSize: "$sm"}}>
                                            {item.price}
                                        </Text>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </Grid>
                    ))}
                </Grid.Container>
            </div>
        </div>
    )
}
const TopProduct = ({topProducts}) => {

    return (
        <div className={`containerDiv px-4 flex flex-col`}>
            <div className={`flex items-center justify-between px-4`}>
                <div><Text h2>Top Products</Text></div>
                <div className={`text-sm hover:text-secondary-600 text-black cursor-pointer select-none`}>View All</div>
            </div>
            <div>
                <Grid.Container gap={2} justify="flex-start">
                    {topProducts.map((item, index) => (
                        <Grid xs={6} sm={3} key={index}>
                            <Card isPressable>
                                <Card.Body css={{p: 0}}>
                                    <Card.Image
                                        src={"https://nextui.org" + item.img}
                                        objectFit="cover"
                                        width="100%"
                                        height={140}
                                        alt={item.title}
                                    />
                                </Card.Body>
                                <Card.Footer css={{justifyItems: "flex-start"}}>
                                    <Row wrap="wrap" justify="space-between" align="center">
                                        <Text b>{item.title}</Text>
                                        <Text css={{color: "$accents7", fontWeight: "$semibold", fontSize: "$sm"}}>
                                            {item.price}
                                        </Text>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </Grid>
                    ))}
                </Grid.Container>
            </div>
        </div>
    )
}
const Home = ({serverData, error}) => {
    const {currentIndex, slides, prevSlide, nextSlide, goToSlide} = useSliderAction()
    const [latestProducts, setLatestProducts] = useState([
        {
            title: "Orange",
            img: "/images/fruit-1.jpeg",
            price: "$5.50",
        },
        {
            title: "Tangerine",
            img: "/images/fruit-2.jpeg",
            price: "$3.00",
        },
        {
            title: "Cherry",
            img: "/images/fruit-3.jpeg",
            price: "$10.00",
        },
        {
            title: "Lemon",
            img: "/images/fruit-4.jpeg",
            price: "$5.30",
        },
        {
            title: "Avocado",
            img: "/images/fruit-5.jpeg",
            price: "$15.70",
        },
        {
            title: "Lemon 2",
            img: "/images/fruit-6.jpeg",
            price: "$8.00",
        },
        {
            title: "Banana",
            img: "/images/fruit-7.jpeg",
            price: "$7.50",
        },
        {
            title: "Watermelon",
            img: "/images/fruit-8.jpeg",
            price: "$12.20",
        },
    ])
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
            <Spacer y={3} />
            <LatestProduct latestProducts={latestProducts}/>
            <Spacer y={5} />
            <TopProduct topProducts={latestProducts}/>
        </Layout>
    )
}

export default Home