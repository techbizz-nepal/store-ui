import React from 'react';
import {Button} from "@nextui-org/react";
import {FaPlayCircle, FaShoppingCart} from "react-icons/fa";

const ProductAction = ({
                           wrapper: {id, classes},
                           product,
                           setIncrementEffect,
                           setDecrementEffect,
                           incrementEffect,
                           decrementEffect,
                           handleQuantityIncrement,
                           handleQuantityDecrement,
                           handleAddToCartAction,
                           quantity
                       }) => {
    return (
        <div id={id} className={classes}>
            <div id={`title`} className={`text-3xl font-medium`}>{product.title}</div>
            <div id={`price`} className="text-7xl font-semibold">{product?.price ?? 'N/A'}</div>
            <div id={`quantity`} className={`flex flex-col gap-y-2 items-center`}>
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
            <div id={`actions`} className={`flex flex-col gap-y-2`}>
                <div id={`previewBtn`}>
                    {
                        product?.sound !== undefined
                        && <Button
                            onPress={handleAddToCartAction}
                            size={`lg`}
                            icon={<FaPlayCircle
                                className={`text-white`}/>}>
                            Preview
                        </Button>
                    }
                </div>
                <div id={`addToCartBtn`}>
                    <Button onPress={handleAddToCartAction} size={`lg`}
                            icon={<FaShoppingCart className={`text-white`}/>}>Add to Cart</Button>
                </div>
            </div>
        </div>
    );
};

export default ProductAction;