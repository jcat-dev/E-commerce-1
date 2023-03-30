import Logo from "./Logo"
import Nav from "./Nav"
import ShoppingCart from "./shoppingCart/ShoppingCart"
import styles from "@/styles/component/header/Header.module.css"
import Menu from "./Menu"
import Avatar from "./Avatar"

const Header: React.FC = () => {
  return (
    <header className={styles.container} >
      <Menu />
      <Logo />

      <div className={styles.nav} >
        <Nav />
      </div>

      <ShoppingCart />
      <Avatar />         
    </header>
  )
}

export default Header