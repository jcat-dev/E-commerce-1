import Link from "next/link"
import styles from "@/styles/component/header/Nav.module.css"

const Nav: React.FC = () => {
  return (
    <nav className={styles["container"]} >
      <ul className={styles["list"]} >
        <li className={styles["list__item"]} >
          <Link 
            className={styles["list__item-link"]} 
            href={"#"} 
          >
            Collections
          </Link>
        </li>
        <li className={styles["list__item"]} >
          <Link 
            className={styles["list__item-link"]} 
            href={"#"} 
          >
            Men
          </Link>
        </li>
        <li className={styles["list__item"]} >
          <Link 
            className={styles["list__item-link"]} 
            href={"#"} 
          >
            Women
          </Link>
        </li>
        <li className={styles["list__item"]} >
          <Link 
            className={styles["list__item-link"]} 
            href={"#"} 
          >
            About
          </Link>
        </li>
        <li className={styles["list__item"]} >
          <Link 
            className={styles["list__item-link"]} 
            href={"#"} 
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav