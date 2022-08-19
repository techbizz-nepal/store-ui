import React from 'react';
import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";
import InfoHeader from "./InfoHeader";
import MainHeader from "./MainHeader";

// import
function Layout({children}) {
    return (
        <div className={`bg-slate-100 `}>
            <InfoHeader></InfoHeader>
            <MainHeader></MainHeader>
            <Navigation></Navigation>
            <Content>{children}</Content>
            <Footer></Footer>
        </div>
    );
}

export default Layout;