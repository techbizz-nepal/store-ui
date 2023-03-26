import React from 'react';
import MainHeader from "./common/MainHeader";
import Navigation from "./common/Navigation";
import SideBar from "./common/SideBar";
import {useDepartmentContext} from "../contexts/department";
import Content from "./common/Content";

function Layout({children}) {
    const {departmentsArray} = useDepartmentContext()

    return (
        <>
            {/*<InfoHeader></InfoHeader>*/}
            <MainHeader></MainHeader>
            <Navigation />

            <Content>{children}</Content>
            {/*<Footer></Footer>*/}
            <SideBar departments={departmentsArray}/>
        </>
    );
}

export default Layout;