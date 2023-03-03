import React from 'react';
import MainHeader from "./common/MainHeader";
import Navigation from "./common/Navigation";
import SideBar from "./common/SideBar";
import {useSidebarContext} from "../contexts/sidebarContext";

function Layout({children}) {
    const {toggleSidebar} = useSidebarContext()
    return (
        <div className={`bg-slate-300`}>
            {/*<InfoHeader></InfoHeader>*/}
            <MainHeader></MainHeader>
            <Navigation/>

            {/*<Content>{children}</Content>*/}
            {/*<Footer></Footer>*/}
            <SideBar toggleSidebar={toggleSidebar} />
        </div>
    );
}

export default Layout;