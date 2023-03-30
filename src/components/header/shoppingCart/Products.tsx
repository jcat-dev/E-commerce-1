import { useDispatch } from "react-redux"
import { removeProduct } from "@/features/shoppingCart/shoppingCartSlice"
import { Product } from "@/types/product"
import Image from "next/image"
import removeIcon from "@/image/icon-delete.svg"
import styles from "@/styles/component/header/shoppingCart/Products.module.css"

interface Props {
  products: Product[]
  isEmpty: boolean
}

const Products: React.FC<Props> = ({products, isEmpty}) => {
  const dispatch = useDispatch()
  
  return (
    <div 
      hidden={isEmpty}
      className={styles["container"]}
    >
      {
        products.map((value) => 
          <div 
            key={value.id}
            className={styles["product"]}
          >
            <Image
              className={styles["product__img"]}
              src={value.img[0].small}
              alt="product image"
            />

            <div className={styles["product__title"]} >
              {value.title}
            </div>

            <div className={styles["product__price"]} >
              <span className={styles["price__price-unit"]} >
                ${value.price * value.discount}.00
              </span>

              <span className={styles["price__price-quantity"]}>
                x {value.quantity} 
              </span>

              <span className={`${styles["price__price-total"]} ${styles["price__price-total--bold-font"]}`} >
                ${value.price * value.discount * value.quantity}.00
              </span>
            </div>

            <div
              className={styles["product__remove"]}              
              onClick={() => dispatch(removeProduct(value.id))}
            >
              <Image 
                className={styles["product__remove-icon"]}
                src={removeIcon}
                alt="remove icon"
              />
            </div>
          </div>
        )
      }    
    </div>
  )
}

export default Products