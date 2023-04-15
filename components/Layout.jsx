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
import api from "../utils/api";
import useRequestPath from "../hooks/common/useRequestPath";

const getDepartments = async (getNestedCategory) => {
    let departmentsArray
    let errorObject
    let loading = true
    await api()
        .get(getNestedCategory)
        .then(
            ({data}) => {
                departmentsArray = [...data[1].categories]
                loading = false
                // }
            },
            ({response}) => {
                const [error, message] = [...response.data]
                errorObject = message.message
                loading = false
            }
        )
        .finally(() => loading = false)
    return {departmentsArray, loading, errorObject}
}
async function Layout({children}) {
    const {getNestedCategory} = useRequestPath()
    const {departmentsArray, loading, errorObject} = getDepartments(getNestedCategory)
    if (loading) return <Loader/>
    if (errorObject) return <h1>Error occurred: {errorObject}</h1>
    return (
        <>
            {/*<InfoHeader></InfoHeader>*/}
            <MainHeader></MainHeader>
            <Navigation/>
            <Content>{children}</Content>
            <Spacer y={5}/>
            <Footer></Footer>
            <SideBar departments={departmentsArray}/>
            <ToastContainer
                position="top-right"
                autoClose="5000"
                hideProgressBar="false"
                closeOnClick="true"
                pauseOnHover="true"
                progress="undefined"
                theme="dark"
                limit={3}
            />
        </>
    );
}

export default Layout;