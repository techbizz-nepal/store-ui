import '../styles/globals.css'
import {RecoilRoot} from "recoil";
import {ThemeProvider} from "next-themes";
import {DepartmentContextProvider} from "../contexts/department";

function MyApp({Component, pageProps}) {
    return (
        <RecoilRoot>
            <ThemeProvider attribute="class">
                <DepartmentContextProvider>
                    <Component {...pageProps} />
                </DepartmentContextProvider>
            </ThemeProvider>
        </RecoilRoot>
    )
}

export default MyApp
