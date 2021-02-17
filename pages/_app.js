import '../styles/globals.css'
import Navbar from '../components/Navbar.js';
import { Box, ChakraProvider, VStack } from '@chakra-ui/react';
import Layout from '../components/layout.js';
import '../styles/index.module.css'
import '../styles/date-picker.css'


function MyApp({ Component, pageProps }) {
 return(
   <ChakraProvider>
    
   <Navbar />
   <Box>
   <Component {...pageProps} />
   </Box>
   
   
   </ChakraProvider>
  
 )
}

export default MyApp
