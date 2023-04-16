import {Dispatch, HTMLAttributes, SetStateAction} from "react";
import {TProduct, TWrapper} from "./types";

export interface IProductDetailProps extends HTMLAttributes<HTMLElement> {
    title: string,
    wrapper: TWrapper
    product: TProduct
}

export interface IProductDescriptionProps extends IProductDetailProps {
}

export interface IImageBoxProps extends HTMLAttributes<HTMLElement> {
    wrapper: TWrapper,
    product: TProduct,
    imageHost: string
}

export interface IProductActionProps extends HTMLAttributes<HTMLElement> {
    wrapper: TWrapper,
    product: TProduct,
    setIncrementEffect: Dispatch<SetStateAction<boolean>>,
    setDecrementEffect: Dispatch<SetStateAction<boolean>>,
    incrementEffect: boolean,
    decrementEffect: boolean,
    handleQuantityIncrement: () => void,
    handleQuantityDecrement: () => void,
    handleAddToCartAction: () => void,
    quantity: number
}

export interface IProductProps {
    product: TProduct
}

export interface IDetail {
    label: string,
    value: string
}