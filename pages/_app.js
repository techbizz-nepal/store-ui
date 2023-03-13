import '../styles/globals.css'
import {ThemeProvider} from "next-themes";
import {DepartmentContextProvider} from "../contexts/department";
import {SidebarContextProvider} from "../contexts/sidebarContext";
import {NextUIProvider} from "@nextui-org/react";

function MyApp({Component, pageProps}) {
    return (
                <SidebarContextProvider>
                    <DepartmentContextProvider>
                        <NextUIProvider>
                            <Component {...pageProps} />
                        </NextUIProvider>
                    </DepartmentContextProvider>
                </SidebarContextProvider>
    )
}

export default MyApp
