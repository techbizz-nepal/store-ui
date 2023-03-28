import React from 'react';
import {AiFillHome} from "react-icons/ai";
import {RxCaretRight} from "react-icons/rx";
import {useRouter} from "next/router";

const BreadcrumbNew = ({divider}) => {
    const router = useRouter()
    return <div id={`breadCrumb`}
                className={`flex items-center justify-start containerDiv gap-x-4 px-2 py-10`}>
        <div onClick={() => router.push('/')} className={`select-none cursor-pointer`}><AiFillHome/></div>
        <div><RxCaretRight/></div>
        {/*<div>Page</div>*/}
        <div className={`select-none`}>Department</div>
        <div><RxCaretRight/></div>
        <div className={`select-none`}>Category 1</div>
        {/*<div>About</div>*/}
    </div>
}

export default BreadcrumbNew;
