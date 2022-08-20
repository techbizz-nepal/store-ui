import {BsChevronLeft, BsChevronRight} from "react-icons/bs";

const menus = [
    {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"},{name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}
]
const SingleMenuItem = ({items}) => {
    return (
        <div className={`flex gap-x-2 overflow-auto`}>
            {items.map((item, key) => <div key={key} className={`py-1 px-4 bg-slate-300`}>{item.name}</div>)}
        </div>
    )
}

const TopSearchComponent = () => {
    return (
<div className={`bg-white mt-2`}>
    <div id={`topSearch`} className={`containerDiv flex gap-x-2 py-2 items-center justify-between`}>
        <div className={`hidden md:flex font-light md:basis-1/4`}>
            <div>Top Searches</div>
        </div>
        <div className={`flex gap-x-2 items-center md:basis-2/4 overflow-auto scroll-smooth`}>
            <BsChevronLeft className={`text-2xl hidden md:flex`} />
            <SingleMenuItem items={menus} />
            <BsChevronRight className={`text-2xl hidden md:flex`} />
        </div>
        <div className={`hidden md:flex md:basis-1/4  justify-end`}>Blog</div>
    </div>
</div>
    )
}
export default TopSearchComponent;