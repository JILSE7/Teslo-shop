import Head from "next/head"
import { FC, ReactNode } from "react";
import Navbar from "../ui/Navbar";
import SideMenu from "../ui/SideMenu";

interface IProps {
   title: string;
   pageDescription: string;
   imageUrl?: string;
   children: ReactNode 
}

export const ShopLayout: FC<IProps> = ({children, imageUrl, pageDescription, title}) => {
  return (
    <>
    <Head>
        <title>{ title }</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />

        {
            imageUrl && (
                <meta name="og:image" content="imageFullUrl" />
            )
        }

    </Head>
    <nav>
        <Navbar/>
    </nav>
    <SideMenu/>
    <main style={{
        margin: '60px',
        maxWidth: '2000px'
    }}>
        {
            children
        }
    </main>
    <footer>
        soy el footer
    </footer>

    </>
  )
}
