import { ProductImage } from "@/types/product"
import styles from "@/styles/component/modal/Modal.module.css"
import Image from "next/image"
import closeIcon from "@/image/icon-close.svg"
import ProductImages from "../product/ProductImages"

interface Props {
  productImages: ProductImage[]
  isActive: boolean
  handleCloseModal: () => void
}

const Modal: React.FC<Props> = ({productImages, isActive, handleCloseModal}) => {
  return (
    <div 
      className={
        isActive 
        ? `${styles["modal"]} ${styles["modal--active"]}`
        : `${styles["modal"]}`
      }
    >
      <div className={styles["modal__content"]}>
        <div
          className={styles["modal__close"]}
          onClick={handleCloseModal}
        >
          <Image
            className={styles["modal__close-icon"]}
            src={closeIcon}
            alt="close icon"            
          />
        </div>       

        <div className={styles["modal__content-images"]} >
          <ProductImages
            images={productImages}
          />
        </div>
      </div>      
    </div>
  )
}

export default Modal