import '../styles/globals.css'
import Navbar from '../components/Navbar.js';
import { Box, ChakraProvider, VStack, extendTheme } from '@chakra-ui/react';
import { Global } from "@emotion/react"
import Layout from '../components/layout.js';
import '../styles/index.module.css'
import Fonts from "../components/Fonts"

const theme = extendTheme({
  fonts: {
    heading: 'Philosopheri',
    body: 'Philosopher',
  },
})

function MyApp({ Component, pageProps }) {
 return(
  
    <ChakraProvider theme={theme}>
      <Fonts />
   <Navbar />
   <Box>
   <Component {...pageProps} />
   </Box>
   </ChakraProvider>
  
 )
}

export default MyApp
