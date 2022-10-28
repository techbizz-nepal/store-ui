import '../styles/globals.css'
import {RecoilRoot} from "recoil";
import {ThemeProvider} from "next-themes";
import {DepartmentContextProvider} from "../contexts/department";
import {SidebarContextProvider} from "../contexts/sidebarContext";

function MyApp({Component, pageProps}) {
    return (
            <ThemeProvider attribute="class">
                <SidebarContextProvider>
                    <DepartmentContextProvider>
                        <Component {...pageProps} />
                    </DepartmentContextProvider>
                </SidebarContextProvider>
            </ThemeProvider>
    )
}

export default MyApp
