import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../layout/Layout";

export default function Home() {
    return (
        <Layout>
            <div className={`flex flex-col gap-y-7 items-center cursor-pointer transition ease-in-out delay-150  `}>
                <div className={`w-80 transition ease-in-out blur-sm hover:blur-none hover:scale-110`}>
                    Index
                </div>
            </div>
        </Layout>
    )
}
