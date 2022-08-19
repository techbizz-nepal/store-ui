const menus = [
    {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}
]
const SingleMenuItem = ({item, classes}) => <div className={classes}>{item.name}</div>

const Navigation = () => {
    return (
        <div className={`sticky top-0 bg-white bg-opacity-50 z-10 shadow-sm`}>
            <div
                className={`containerDiv`}>
                <div className={`flex items-center justify-between gap-x-2`}>
                    <div className={`cursor-pointer hover:bg-slate-400 py-1 md:py-4 sm:px-4 md:px-2 basis-1/6`}>Shop All Departments</div>
                    <div className={`basis-5/6 flex justify-between `}>
                        {
                            menus.map((item, key) =>
                                <SingleMenuItem key={key} item={item} classes={`py-2 md:py-4 sm:px-4 md:px-2 hover:bg-slate-400 cursor-pointer`}>Item</SingleMenuItem>)
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Navigation;