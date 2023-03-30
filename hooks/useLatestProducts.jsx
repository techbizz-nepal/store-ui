import React, {useState} from 'react';

const useLatestProducts = () => {
    const [latestProducts, setLatestProducts] = useState([
        {
            title: "Orange",
            slug: "orange",
            img: "/images/fruit-1.jpeg",
            price: "$5.50",
        },
        {
            title: "Tangerine",
            slug: "tangerine",
            img: "/images/fruit-2.jpeg",
            price: "$3.00",
        },
        {
            title: "Cherry",
            slug: "cherry",
            img: "/images/fruit-3.jpeg",
            price: "$10.00",
        },
        {
            title: "Lemon",
            slug: "lemon",
            img: "/images/fruit-4.jpeg",
            price: "$5.30",
        },
        {
            title: "Avocado",
            slug: "avocado",
            img: "/images/fruit-5.jpeg",
            price: "$15.70",
        },
        {
            title: "Lemon 2",
            slug: "lemon-2",
            img: "/images/fruit-6.jpeg",
            price: "$8.00",
        },
        {
            title: "Banana",
            slug: "banana",
            img: "/images/fruit-7.jpeg",
            price: "$7.50",
        },
        {
            title: "Watermelon",
            slug: "watermelon",
            img: "/images/fruit-8.jpeg",
            price: "$12.20",
        },
    ]);
    return {latestProducts}
};

export default useLatestProducts;
