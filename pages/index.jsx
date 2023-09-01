import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })

function TitleCinnamon() {
    return (
    <>
        <h1>Hello From React</h1>
        <p>Hello there</p>
    </>
    );
}

export default function MyApp() {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
            />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <title>Cinnamon</title>
            <TitleCinnamon></TitleCinnamon>
        </>

    );
}
