"use client"
import {createContext, useContext, useEffect, useState} from "react";

const SidebarContext = createContext({})

export const SidebarContextProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const context = {isOpen, setIsOpen}
    return (
        <SidebarContext.Provider value={context}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebarContext = () => {
    return useContext(SidebarContext)
}