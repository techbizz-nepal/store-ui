import React from 'react';
import TopSearchComponent from "./TopSearchComponent";
import Content from "./Content";
import Footer from "./Footer";
import InfoHeader from "./InfoHeader";
import MainHeader from "./MainHeader";

// import
function Layout({children}) {
    return (
        <div className={`bg-slate-100`}>
            <InfoHeader></InfoHeader>
            <MainHeader></MainHeader>
            <TopSearchComponent></TopSearchComponent>
            <Content>{children}</Content>
            <Footer></Footer>
        </div>
    );
}

export default Layout;