import { StaticImageData } from "next/image"

export interface ProductImage {
  small: StaticImageData
  big: StaticImageData
}

export interface Product {
  id: string
  companyName: string
  title: string
  text: string
  price: number
  discount: number
  img: ProductImage[]
  quantity: number
}

