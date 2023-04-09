import {Card, Grid, Row, Text} from "@nextui-org/react";
import React from "react";
import {useRouter} from "next/router";

const LatestProduct = ({latestProducts, title, wrapperClass}) => {
    const router = useRouter()
    return (
        <div className={`${wrapperClass} px-4 flex flex-col`}>
            {
                title && <div className={`flex items-center justify-between px-4`}>
                    <div><Text h2>Latest Deals</Text></div>
                    <div className={`text-sm hover:text-secondary-600 text-black cursor-pointer select-none`}>View All</div>
                </div>
            }
            <div>
                <Grid.Container gap={2} justify="flex-start">
                    {latestProducts && latestProducts.map((item, index) => (
                        <Grid xs={6} sm={3} key={index}>
                            <Card isPressable onPress={() => router.push('/' + item.slug)}>
                                <Card.Body css={{p: 0}}>
                                    <Card.Image
                                        src={"https://nextui.org" + item.img}
                                        objectFit="cover"
                                        width="100%"
                                        height={240}
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

export default LatestProduct