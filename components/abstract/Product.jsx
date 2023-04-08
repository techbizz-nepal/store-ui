import React, {useState} from "react";
import {toast} from "react-toastify";
import Image from "next/image";
import {Button} from "@nextui-org/react";
import {FaShoppingCart, FaPlayCircle} from "react-icons/fa";
import ImageBox from "./ImageBox";
import ProductAction from "./ProductAction";

const Product = ({product}) => {
    const [quantity, setQuantity] = useState(1);
    const addToCartToastId = React.useRef(null)
    const [decrementEffect, setDecrementEffect] = useState(false);
    const [incrementEffect, setIncrementEffect] = useState(false);
    const handleQuantityDecrement = () => {
        setDecrementEffect(true)
        setQuantity(prevState => prevState !== 0 ? prevState - 1 : prevState)
    }
    const handleQuantityIncrement = () => {
        setIncrementEffect(true)
        setQuantity(prevState => prevState >= 0 ? quantity + 1 : prevState)
    }
    const handleAddToCartAction = () => {
        if (!toast.isActive(addToCartToastId.current)) {
            addToCartToastId.current = toast.success("Item Added");
        }
    }

    return <div id={`content`}
                className={`containerDiv flex flex-col items-center md:flex-row justify-start gap-x-4 `}>

        <div id={`productImageBox`} className={`basis-2/3 relative `}>
            <ImageBox product={product} imageHost={`https://nextui.org`}/>
        </div>


        <div id={`productAction`}
             className={`flex flex-col basis-1/3 items-center gap-y-10 flex-none p-4`}>
            <ProductAction product={product}
                           quantity={quantity}
                           decrementEffect={decrementEffect}
                           incrementEffect={incrementEffect}
                           setDecrementEffect={setDecrementEffect}
                           setIncrementEffect={setIncrementEffect}
                           handleQuantityDecrement={handleQuantityDecrement}
                           handleQuantityIncrement={handleQuantityIncrement}
                           handleAddToCartAction={handleAddToCartAction}/>
        </div>
    </div>
}
export default Product