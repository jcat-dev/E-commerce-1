import { useToggle } from "src/hooks/useToggle"
import menuIcon from "@/image/icon-menu.svg"
import Image from "next/image"
import styles from "@/styles/component/header/Menu.module.css"
import closeIcon from "@/image/icon-close.svg"
import Nav from "./Nav"

const Menu: React.FC = () => {
  const {
    isActive,
    toggleIsActive
  } = useToggle()

  return (
    <div className={styles.container} >
      <Image 
        className={styles["menu-icon"]}
        hidden={isActive}
        src={menuIcon}
        alt="menu icon"
        onClick={toggleIsActive}
      />

      <div 
        className={styles.menu} 
        hidden={!isActive}
      >
        <Image
          className={styles["menu-close"]}
          src={closeIcon}
          alt="close icon"
          onClick={toggleIsActive}
        />

        <Nav />
      </div>
    </div>
  )
}

export default Menu