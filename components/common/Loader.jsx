import React from 'react';
import {Loading} from "@nextui-org/react";

const Loader = () => {
    return (
        <div className={`flex w-full h-screen items-center justify-center`}><Loading size="xl"/></div>
    );
};

export default Loader;