import { Product } from "@/types/product"
import { useToggle } from "src/hooks/useToggle"
import Modal from "src/components/modal/Modal"
import ProductImages from "src/components/product/ProductImages"
import productAPI from "@/utils/api"
import styles from "@/styles/pages/product/id.module.css"
import Layout from "src/components/Layout"
import ProductBuyButton from "src/components/product/ProductBuyButton"

interface Props {
  product: Product
}

const Item: React.FC<Props> = ({product}) => {
  const {
    setActive,
    setInactive,
    isActive
  } = useToggle()

  return (
    <Layout>
      <main className={styles.container} >
        <div className={styles["product-images"]} >
          <ProductImages 
            images={product.img}
            handleOpenModal={setActive}
          />
        </div>

        <div className={styles["product-info"]} >
          <h1 className={styles["product-info__companyName"]} >
            { product.companyName }
          </h1>

          <h2 className={styles["product-info__title"]} >
            { product.title }
          </h2>

          <p className={styles["product-info__text"]} >
            { product.text }
          </p>

          <div className={styles["product-price"]} > 
            <span className={styles["product-price__discounted"]} >
              ${ product.price * product.discount }.00 
            </span>

            <span className={styles["product-price__discount"]} >
              { product.discount * 100}% 
            </span>

            <span className={styles["product-price__real"]} >
              ${ product.price }.00
            </span>  
          </div>     

          <ProductBuyButton 
            item={product}
          />              
        </div>        

        <Modal 
          productImages={product.img}
          isActive={isActive}
          handleCloseModal={setInactive}
        />
      </main>
    </Layout>
  )
}

export default Item

export async function getStaticPaths() {
  const product = productAPI

  const url = product.map((value) => ({
    params: {
      id: value.title.toLowerCase().replaceAll(" ", "-")
    }
  }))

  return {
    paths: url,
    fallback: false
  }
}

export async function getStaticProps({params}: any) { 
  const product = productAPI.find((value) => {
    const url = value.title.toLowerCase().replaceAll(" ", "-")

    return url === params.id
  })
  
  return {
    props: {
      product
    }
  }
}