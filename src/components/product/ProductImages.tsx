import { ProductImage } from "@/types/product"
import { useProductImgGallery } from "src/hooks/useProductImgGallery"
import Image from "next/image"
import styles from "@/styles/component/product/ProductImages.module.css"
import nextIcon from "@/image/icon-next.svg"
import previusIcon from "@/image/icon-previous.svg"

interface Props {
  images: ProductImage[]
  handleOpenModal?: () => void 
}

const ProductImages: React.FC<Props> = ({images, handleOpenModal}) => {
  const {
    imgIndex,
    handleSmallImgClick,
    handleNextImgClick,
    handlePreviousImgClick
  } = useProductImgGallery(images)

  return (
    <div className={styles["product-images"]} >
      <Image 
        className={styles["product-images__previous-icon"]}
        src={previusIcon}
        alt="previus icon"
        onClick={handlePreviousImgClick}
        hidden={Boolean(handleOpenModal)}
      />

      <Image 
        className={styles["product-images__next-icon"]}
        src={nextIcon}
        alt="next icon"
        onClick={handleNextImgClick}
        hidden={Boolean(handleOpenModal)}
      />
      
      <Image 
        className={styles["product-images__big-image"]}
        src={images[imgIndex].big}
        alt="big product image"
        priority={true}
        onClick={handleOpenModal}
      />
      
      <div 
        className={
          handleOpenModal 
          ? `${styles["small-images"]} ${styles["product-images__small-images"]}`
          : `${styles["small-images"]} ${styles["small-images--width"]} ${styles["product-images__small-images"]}`
        } 
      >
        {
          images.map((value, index) => 
            <div 
              key={index}
              className={
                index === imgIndex 
                ? `${styles["small-images__box"]} ${styles["small-images__box--orange-border"]}`
                : `${styles["small-images__box"]}`
              }
            >
              <Image                    
                className={
                  index === imgIndex 
                  ? `${styles["small-images__image"]} ${styles["small-images__image--opacity"]}`
                  : `${styles["small-images__image"]}`
                }
                src={value.small}
                alt="small producto image"
                onClick={() => handleSmallImgClick(index)}
              />
            </div>
          )
        }  
      </div>
    </div> 
  )
}

export default ProductImages