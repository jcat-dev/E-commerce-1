import { ProductImage } from "@/types/product"
import { useState } from "react"

export const useProductImgGallery = (productImgs: ProductImage[]) => {
  const [imgIndex, setImgIndex] = useState<number>(0)

  const handleSmallImgClick = (index: number) => {
    setImgIndex(index)
  }

  const handleNextImgClick = () => {
    if ((imgIndex + 1) < productImgs.length) {
      return setImgIndex(imgIndex + 1)
    }

    return setImgIndex(0)
  }

  const handlePreviousImgClick = () => {
    if ((imgIndex - 1) >= 0) {
      return setImgIndex(imgIndex - 1)
    }

    return setImgIndex(productImgs.length - 1)
  }

  return {
    imgIndex,
    handleSmallImgClick,
    handleNextImgClick,
    handlePreviousImgClick
  }
}