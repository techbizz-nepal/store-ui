"use client"
import React, {useState} from 'react';

const useRequestPath = () => {
    const [getNestedCategory, setGetNestedCategory] = useState('/v1/admin/getNestedCategory');
    const [getUser, setGetUser] = useState('user');
    const [loginPath, setLoginPath] = useState('/v1/auth/login');
    const [logoutPath, setLogoutPath] = useState('v1/auth/logout');
    return {getNestedCategory, getUser, loginPath, logoutPath}
};

export default useRequestPath;
