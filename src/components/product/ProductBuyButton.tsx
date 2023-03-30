import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addProduct,getProductById, updateProduct,  } from "@/features/shoppingCart/shoppingCartSlice"
import { Product } from "@/types/product"
import { RootState } from "src/appRedux/store"
import Image from "next/image"
import plusImg from "@/image/icon-plus.svg"
import minusImg from "@/image/icon-minus.svg"
import cartIcon from "@/image/icon-cart.svg"
import styles from "@/styles/component/product/ProductBuyButton.module.css"

interface Props {
  item: Product
}

const ProductBuyButton: React.FC<Props> = ({item}) => {
  const [quantity, setQuantity] = useState<number>(1)
  const dispatch = useDispatch()
  const product = useSelector((state: RootState) => getProductById(state, item.id))

  const handlePlusIconClick = () => {
    if (product) {
      dispatch(updateProduct({
        id: item.id,
        changes: { quantity: quantity + 1 }
      }))
    }

    setQuantity(quantity + 1)
  }

  const handleMinusIconClick = () => {
    if ((quantity - 1) > 0 ) {
      if (product) {
        dispatch(updateProduct({
          id: item.id,
          changes: { quantity: quantity - 1 }
        }))        
      }

      setQuantity(quantity - 1)
    }
  }

  const handleAddToCartClick = () => {
    if (quantity >= 1 ) {
      dispatch(addProduct({...item, quantity}))
    }
  }

  return (
    <div className={styles.container} >
      <div className={styles["buy-btn"]} >
        <button 
          className={styles["buy-btn__minus"]} 
          onClick={handleMinusIconClick}
        >
          <Image 
            src={minusImg}
            alt="minus image"                    
          />
        </button>

        <span className={styles["buy-btn__quantity"]} >
          { quantity }
        </span>

        <button 
          className={styles["buy-btn__plus"]}                
          onClick={handlePlusIconClick}
        >
          <Image
            src={plusImg}
            alt="plus image"
          />         
        </button>                
      </div>
      
      <button 
        className={styles["cart-btn"]} 
        onClick={handleAddToCartClick}
      >
        <Image 
          className={styles["cart-btn__icon"]}
          src={cartIcon}
          alt="cart icon"
        />

        <span className={styles["cart-btn__text"]} >
          Add to cart
        </span>
      </button>
    </div>
  )
}

export default ProductBuyButton