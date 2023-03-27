import React from 'react';
import MainHeader from "./common/MainHeader";
import Navigation from "./common/Navigation";
import SideBar from "./common/SideBar";
import {useDepartmentContext} from "../contexts/department";
import Content from "./common/Content";
import {Loading} from "@nextui-org/react";
import Footer from "./common/Footer";

function Layout({children}) {
    const {departmentsArray, loading, error} = useDepartmentContext()
    if (loading) return <Loading size="xl" />
    if (error) return <h1>Error occurred: {error}</h1>
    return (
        <>
            {/*<InfoHeader></InfoHeader>*/}
            <MainHeader></MainHeader>
            <Navigation/>

            <Content>{children}</Content>
            <Footer></Footer>
            <SideBar departments={departmentsArray}/>
        </>
    );
}

export default Layout;