import "@/styles/global.css"
import { Provider } from "react-redux"
import { store } from "src/appRedux/store"

export default function MyApp({ Component, pageProps }: any) {
  return (
    <Provider store={store} >
      <Component {...pageProps} />
    </Provider>
  )
}