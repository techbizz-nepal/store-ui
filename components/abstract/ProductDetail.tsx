import {IDetail, IProductDetailProps} from "../../TS/interfaces";
import React from "react";

export default function ProductDetail ({title, wrapper: {id, classes}, product}: IProductDetailProps) {
    return <div className={classes} id={id}>
        <h3 className={`text-md font-extralight`}>{title}</h3>
        <div className={`flex flex-col`}>
            {Array.isArray(product.details) && [...product.details].slice(0, 5).map((detail: IDetail, index) =>
                <div key={index} className={`flex justify-start w-full`}>
                    <div className={`border border-black basis-1/2 p-2`}>{detail.label}</div>
                    <div className={`border border-black basis-1/2 p-2`}>{detail.value}</div>
                </div>
            )}
        </div>
    </div>
}