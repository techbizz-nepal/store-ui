const menus = [
    {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}, {name: "items"}
]
const SingleMenuItem = ({item}) => <div>{item.name}</div>

const Navigation = () => {
    return (
        <div className={`sticky top-0 bg-white bg-opacity-50 z-10 shadow-sm`}>
            <div
                className={`containerDiv`}>
                <div className={`flex items-center justify-between`}>
                    <div className={`cursor-pointer hover:bg-slate-400 py-1 md:py-4 sm:px-4 md:px-2 basis-1/2`}>Shop All Departments</div>
                    {
                        menus.map((item, key) => <SingleMenuItem key={key} item={item}>Item</SingleMenuItem>)
                    }
                </div>

            </div>
        </div>
    )
}
export default Navigation;