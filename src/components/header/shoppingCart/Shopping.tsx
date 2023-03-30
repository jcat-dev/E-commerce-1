import styles from "@/styles/component/header/shoppingCart/Shopping.module.css"

interface Props {
  isActive: boolean
  isEmpty: boolean
  children: React.ReactNode
}

const Shopping: React.FC<Props> = ({isActive, isEmpty, children}) => {
  return (
    <div className={
        isActive
        ? `${styles["shopping-box"]} ${styles["shopping-box--active"]}`
        : `${styles["shopping-box"]}`
      }
    >
      <div className={styles["shopping-box__title"]} >Cart</div>

      <p className={
          isEmpty 
          ? `${styles["shopping-box__empty"]} ${styles["shopping-box__empty--active"]}`
          : `${styles["shopping-box__empty"]}`
        }
      >
        Your cart is empty.
      </p>
      
      {
        children  
      }

      <button
        hidden={isEmpty}
        className={styles["shopping-box__checkout-btn"]}
      >
        Checkout
      </button> 
    </div>  
  )
}

export default Shopping