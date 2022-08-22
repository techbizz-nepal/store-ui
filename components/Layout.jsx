import React from 'react';
import TopSearchComponent from "./common/TopSearchComponent";
import Content from "./common/Content";
import Footer from "./common/Footer";
import InfoHeader from "./common/InfoHeader";
import MainHeader from "./common/MainHeader";
import Navigation from "./common/Navigation";
import Sidebar from "./common/Sidebar";

function Layout({children}) {
    return (
        <div className={`bg-slate-100`}>

            <InfoHeader></InfoHeader>
            <MainHeader></MainHeader>
            <Navigation/>

            <Content>{children}</Content>
            <Footer></Footer>
            <Sidebar/>
        </div>
    );
}

export default Layout;