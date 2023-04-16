import React, {useState} from 'react';
import {toast} from "react-toastify";

const UseAbstractActions = () => {
    const [quantity, setQuantity] = useState<number>(1);
    const [decrementEffect, setDecrementEffect] = useState<boolean>(false);
    const [incrementEffect, setIncrementEffect] = useState<boolean>(false);

    const addToCartToastId: React.MutableRefObject<any> = React.useRef(null)
    const handleQuantityDecrement = (): void => {
        setDecrementEffect(true)
        setQuantity(prevState => prevState !== 0 ? prevState - 1 : prevState)
    }
    const handleQuantityIncrement = (): void => {
        setIncrementEffect(true)
        setQuantity(prevState => prevState >= 0 ? quantity + 1 : prevState)
    }
    const handleAddToCartAction = (): void => {
        if (!toast.isActive(addToCartToastId.current)) {
            addToCartToastId.current = toast.success("Item Added");
        }
    }
    return {
        quantity,
        decrementEffect,
        incrementEffect,
        setDecrementEffect,
        setIncrementEffect,
        handleQuantityDecrement,
        handleQuantityIncrement,
        handleAddToCartAction
    }
};

export default UseAbstractActions;