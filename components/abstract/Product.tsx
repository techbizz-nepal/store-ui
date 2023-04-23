import React from "react";
import ImageBox from "./ImageBox";
import ProductAction from "./ProductAction";
import useAbstractActions from "../../hooks/abstract/useAbstractActions";
import {IProductProps} from "../../TS/interfaces";
import ProductDescription from "./ProductDescription";
import ProductDetail from "./ProductDetail";
const Product = ({product}: IProductProps) => {
    const {
        quantity,
        decrementEffect,
        incrementEffect,
        setDecrementEffect,
        setIncrementEffect,
        handleQuantityDecrement,
        handleQuantityIncrement,
        handleAddToCartAction
    } = useAbstractActions()
    return <div id={`productWrapper`}
                className={`containerDiv flex flex-col gap-10`}>

        <div id={`actionWrapper`}
             className={`flex flex-col items-center md:items-start md:flex-row justify-start gap-y-2 md:gap-x-4`}>
            <ImageBox wrapper={{id: `productImageBox`, classes: `basis-2/3 relative`}}
                      product={product}
                      imageHost={`https://nextui.org`}/>

            <ProductAction
                wrapper={{id: `productAction`, classes: `flex flex-col basis-1/3 items-center gap-y-10 flex-none p-4`}}
                product={product}
                quantity={quantity}
                decrementEffect={decrementEffect}
                incrementEffect={incrementEffect}
                setDecrementEffect={setDecrementEffect}
                setIncrementEffect={setIncrementEffect}
                handleQuantityDecrement={handleQuantityDecrement}
                handleQuantityIncrement={handleQuantityIncrement}
                handleAddToCartAction={handleAddToCartAction}/>
        </div>
        <div id={`informationWrapper`}
             className={`flex flex-col items-start md:flex-row justify-start gap-y-2 md:gap-x-4`}>
            <ProductDescription title={`Description`} product={product} wrapper={{
                id: `productDescription`, classes: `flex flex-col basis-1/2 gap-y-3 flex-none p-4`
            }}/>
            <ProductDetail title={`Details`} product={product} wrapper={{
                id: `productDetail`, classes: `flex flex-col basis-1/2 gap-y-3 flex-none p-4`
            }}/>
        </div>
    </div>
}
export default Product