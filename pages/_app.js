import '../styles/globals.css'
import Layout from '../components/layout.js';
import '../styles/index.module.css'


function MyApp({ Component, pageProps }) {
 return(
  <Layout>
   <Component {...pageProps} />
  </Layout>
 )
}

export default MyApp
