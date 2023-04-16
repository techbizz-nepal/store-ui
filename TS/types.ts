export type TProduct = {
    title: string,
    slug: string,
    img: string,
    details?: { label: string; value: string; }[],
    description: string,
    sound?: {},
    price: string
}
export type TWrapper = { id: string, classes: string }
export type TSlide={id:string, url:string}