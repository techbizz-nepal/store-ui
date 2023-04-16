import React, {useState} from 'react';
import {TProduct} from "../../TS/types";

const useLatestProducts = () => {
    const [latestProducts, setLatestProducts] = useState<TProduct[]>([
        {
            title: "Orange Orange Orange Orange Orange ",
            slug: "orange",
            img: "/images/fruit-1.jpeg",
            price: "$5.50",
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores debitis dicta dolorum eveniet facere, incidunt laudantium nulla quia, quod repellendus ut vero? A facilis numquam rem ut voluptatum.',
            details: [
                {label: 'key', value: 'value'},
                {label: 'key1', value: 'value1'},
                {label: 'key2', value: 'value2'},
                {label: 'key3', value: 'value3'}
            ]
        },
        {
            title: "Tangerine",
            slug: "tangerine",
            img: "/images/fruit-2.jpeg",
            price: "$3.00",
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores debitis dicta dolorum eveniet facere, incidunt laudantium nulla quia, quod repellendus ut vero? A facilis numquam rem ut voluptatum.',
            details: [
                {label: 'key', value: 'value'},
                {label: 'key1', value: 'value1'},
                {label: 'key2', value: 'value2'},
                {label: 'key3', value: 'value3'}
            ]
        },
        {
            title: "Cherry",
            slug: "cherry",
            img: "/images/fruit-3.jpeg",
            price: "$10.00",
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores debitis dicta dolorum eveniet facere, incidunt laudantium nulla quia, quod repellendus ut vero? A facilis numquam rem ut voluptatum.',
            details: [
                {label: 'key', value: 'value'},
                {label: 'key1', value: 'value1'},
                {label: 'key2', value: 'value2'},
                {label: 'key3', value: 'value3'}
            ]
        },
        {
            title: "Lemon",
            slug: "lemon",
            img: "/images/fruit-4.jpeg",
            price: "$5.30",
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores debitis dicta dolorum eveniet facere, incidunt laudantium nulla quia, quod repellendus ut vero? A facilis numquam rem ut voluptatum.',
            details: [
                {label: 'key', value: 'value'},
                {label: 'key1', value: 'value1'},
                {label: 'key2', value: 'value2'},
                {label: 'key3', value: 'value3'}
            ]
        },
        {
            title: "Avocado",
            slug: "avocado",
            img: "/images/fruit-5.jpeg",
            price: "$15.70",
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores debitis dicta dolorum eveniet facere, incidunt laudantium nulla quia, quod repellendus ut vero? A facilis numquam rem ut voluptatum.',
            details: [
                {label: 'key', value: 'value'},
                {label: 'key1', value: 'value1'},
                {label: 'key2', value: 'value2'},
                {label: 'key3', value: 'value3'}
            ]
        },
        {
            title: "Lemon 2",
            slug: "lemon-2",
            img: "/images/fruit-6.jpeg",
            price: "$8.00",
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores debitis dicta dolorum eveniet facere, incidunt laudantium nulla quia, quod repellendus ut vero? A facilis numquam rem ut voluptatum.',
            details: [
                {label: 'key', value: 'value'},
                {label: 'key1', value: 'value1'},
                {label: 'key2', value: 'value2'},
                {label: 'key3', value: 'value3'}
            ]
        },
        {
            title: "Banana",
            slug: "banana",
            img: "/images/fruit-7.jpeg",
            price: "$7.50",
            sound: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores debitis dicta dolorum eveniet facere, incidunt laudantium nulla quia, quod repellendus ut vero? A facilis numquam rem ut voluptatum.',
            details: [
                {label: 'key', value: 'value'},
                {label: 'key1', value: 'value1'},
                {label: 'key2', value: 'value2'},
                {label: 'key3', value: 'value3'}
            ]
        },
        {
            title: "Watermelon",
            slug: "watermelon",
            img: "/images/fruit-8.jpeg",
            price: "$12.20",
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores debitis dicta dolorum eveniet facere, incidunt laudantium nulla quia, quod repellendus ut vero? A facilis numquam rem ut voluptatum.',
            details: [
                {label: 'key', value: 'value'},
                {label: 'key1', value: 'value1'},
                {label: 'key2', value: 'value2'},
                {label: 'key3', value: 'value3'}
            ]
        },
    ]);
    const getProductBySlug = (slug: string | string[] | undefined): TProduct | undefined => {
        if (Array.isArray(slug) || slug === undefined) return undefined
        return latestProducts.find(product => product.slug === slug)
    }
    return {latestProducts, getProductBySlug}
};

export default useLatestProducts;
