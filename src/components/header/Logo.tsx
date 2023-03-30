import Image from "next/image"
import logo from "@/image/logo.svg"
import styles from "@/styles/component/header/Logo.module.css"

const Logo: React.FC = () => {
  return ( 
    <Image
      className={styles.logo}
      src={logo}
      alt="logo image"
    />
  )
}

export default Logo