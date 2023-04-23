import {IProductDescriptionProps} from "../../TS/interfaces";
import React from "react";

export default function ProductDescription({title, wrapper: {id, classes}, product}: IProductDescriptionProps) {
    return <div className={classes} id={id}>
        <h3 className={`text-md font-extralight`}>{title}</h3>
        <p>{product?.description}</p>
    </div>
}