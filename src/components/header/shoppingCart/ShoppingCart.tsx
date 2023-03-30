import { useToggle } from "src/hooks/useToggle"
import { useSelector } from "react-redux"
import { getProducts } from "@/features/shoppingCart/shoppingCartSlice"
import { RootState } from "src/appRedux/store"
import Image from "next/image"
import cartIcon from "@/image/icon-cart.svg"
import styles from "@/styles/component/header/shoppingCart/ShoppingCart.module.css"
import Shopping from "./Shopping"
import Products from "./Products"

const ShoppingCart: React.FC = () => {
  const products = useSelector((state: RootState) => getProducts(state))
  const totalProduct = products
  .map((value) => value.quantity)
  .reduce((previusValue, currentValue) => previusValue + currentValue, 0)
  
  const {
    isActive,
    toggleIsActive
  } = useToggle()
  

  return (
    <div className={styles.container} >     
      <div 
        className={styles["shopping-cart"]} 
        onClick={toggleIsActive}
      >
        <Image
          className={styles["shopping-cart__icon"]}
          src={cartIcon}
          alt="cart icon"
        />

        <div 
          className={styles["shopping-cart__total" ]}
          hidden={totalProduct === 0}
        >
          {totalProduct}
        </div>
      </div>

      <Shopping
        isActive={isActive}
        isEmpty={totalProduct === 0}
      >
        <Products 
          products={products}
          isEmpty={totalProduct === 0}
        />
      </Shopping>
      
           
    </div>
  )
}

export default ShoppingCart