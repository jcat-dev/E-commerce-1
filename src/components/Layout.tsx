import Head from "next/head"
import Header from "./header/Header"
import favicon from "@/image/favicon-32x32.png"

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <>
      <Head>
        <title>Frontend Mentor | E-commerce product page</title>
        <link rel="icon" href={favicon.src} />
      </Head>

      <Header />

      { children }
    </>
  )
}

export default Layout