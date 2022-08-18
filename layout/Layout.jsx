import React from 'react';
import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";

// import
function Layout({children}) {
    return (
        <div className={`bg-slate-100 `}>
            <Navigation></Navigation>
            <Content>{children}</Content>
            <Footer></Footer>
        </div>
    );
}

export default Layout;