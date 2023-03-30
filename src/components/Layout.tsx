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
        <title>Sneakers | Fall Limited Edition Sneakers</title>
        <link rel="icon" href={favicon.src} />
      </Head>

      <Header />

      { children }
    </>
  )
}

export default Layout