import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang="en" className={`scroll-smooth`}>
            <Head/>
            <body>
            <Main/>
            <div id={`modalPortal`}></div>
            <NextScript/>
            </body>
        </Html>
    )
}
