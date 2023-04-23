import React from 'react';
import MainHeader from "./common/MainHeader";
import Navigation from "./common/Navigation";
import SideBar from "./common/SideBar";
import {useDepartmentContext} from "../contexts/department";
import Content from "./common/Content";
import {Loading, Spacer} from "@nextui-org/react";
import Footer from "./common/Footer";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Loader from "./common/Loader";

function Layout({children}) {
    const {departmentsArray, loading, error} = useDepartmentContext()
    if (loading) return <Loader/>
    if (error) return <h1>Error occurred: {error}</h1>
    return (
        <div id={`rootDiv`} className={`flex flex-col w-screen h-screen`}>
            {/*<InfoHeader></InfoHeader>*/}
            <MainHeader></MainHeader>
            <Navigation/>
            <Content>{children}</Content>
            <Spacer y={5}/>
            <Footer></Footer>
            <SideBar departments={departmentsArray}/>
            <ToastContainer
                position="top-right"
                theme="dark"
                limit={3}
            />
        </div>
    );
}

export default Layout;