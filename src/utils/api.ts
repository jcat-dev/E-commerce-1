import productImage from "src/assets/productImage";
import { Product } from "../types/product";

const text = "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubbe outer sole, they'll withstand everything the weather can offer."

const API: Product = {
  id: "1",
  companyName: "SNEAKER COMPANY",
  discount: 0.5,
  img: productImage,
  price: 250,
  text: text,
  title: "Fall Limited Edition Sneakers",
  quantity: 0
}

export default [API]