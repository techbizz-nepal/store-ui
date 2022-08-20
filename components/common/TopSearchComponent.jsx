import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import {FaBlog} from "react-icons/fa";

const menus = [
    {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"},{name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}
]
const SingleMenuItem = ({items}) => {
    return (
        <div className={`flex gap-x-2 overflow-auto`}>
            {items.map((item, key) => <div key={key} className={`py-1 px-4 bg-slate-300 font-light`}>{item.name}</div>)}
        </div>
    )
}

const TopSearchComponent = () => {
    return (
<div className={`bg-white mt-4`}>
    <div id={`topSearch`} className={`containerDiv flex gap-x-2 py-2 items-center justify-between`}>
        <div className={`hidden md:flex font-light md:basis-1/4 text-2xl`}>
            <div>Top Searches</div>
        </div>
        <div className={`flex gap-x-2 items-center md:basis-2/4 overflow-auto scroll-smooth`}>
            <BsChevronLeft className={`text-2xl hidden md:flex`} />
            <SingleMenuItem items={menus} />
            <BsChevronRight className={`text-2xl hidden md:flex`} />
        </div>
        <div className={`hidden md:flex md:basis-1/4 gap-x-2 font-light justify-end text-2xl`}><FaBlog/> Blog</div>
    </div>
</div>
    )
}
export default TopSearchComponent;