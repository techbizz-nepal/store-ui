import React, {useState} from "react";
import {toast} from "react-toastify";
import Image from "next/image";
import {Button} from "@nextui-org/react";
import {FaShoppingCart} from "react-icons/fa";

const ProductDetail = ({productDetail}) => {
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

        <div id={`image`} className={`flex-1 relative `}>
            <Image
                alt={productDetail.pageName}
                src={productDetail.imageSrc}
                width={1440} height={764}/>
        </div>


        <div id={`detailAction`}
             className={`flex flex-col items-center gap-y-10 flex-none p-4 rounded-tl-3xl rounded-br-3xl shadow-xl bg-action-50 dark:bg-neutral-800 dark:text-white`}>
            <div id={`title`} className={`text-3xl font-medium`}>{productDetail.pageName}</div>
            <div id={`price`} className="text-7xl font-semibold">$10</div>
            <div id={`quantity`} className={`flex flex-col gap-y-4`}>
                <div id={`quantityLabel`} className={`text-lg font-extralight`}>Quantity</div>
                <div id={`quantityAction`} className="flex gap-x-6 items-center text-2xl">
                    <div
                        onAnimationEnd={() => setDecrementEffect(false)}
                        onClick={handleQuantityDecrement}
                        className={`${decrementEffect && 'animate-scale'} flex px-2 font-semibold text-action-600 select-none cursor-pointer py-1 w-10 h-10 border border-action-300 rounded-full items-center justify-center`}>-
                    </div>
                    <div className={`flex items-center justify-center w-6`}>{quantity}</div>
                    <div
                        onAnimationEnd={() => setIncrementEffect(false)}
                        onClick={handleQuantityIncrement}
                        className={`${incrementEffect && 'animate-scale'} flex px-2 font-semibold text-action-600 select-none cursor-pointer py-1 w-10 h-10 border border-action-300 rounded-full items-center justify-center`}>+
                    </div>
                </div>
            </div>
            <div id={`addToCartBtn`}>
                <Button onPress={handleAddToCartAction} size={`lg`}
                        icon={<FaShoppingCart className={`text-white`}/>}>Add to Cart</Button>
            </div>
        </div>
    </div>
}
export default ProductDetail