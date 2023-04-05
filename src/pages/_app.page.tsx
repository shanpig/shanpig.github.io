import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
