import React, {useState} from 'react';
import {toast} from "react-toastify";

const UseAbstractActions = () => {
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