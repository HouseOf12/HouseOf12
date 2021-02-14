import '../styles/globals.css'
import Navbar from '../components/Navbar.js';
import { Box, ChakraProvider, VStack } from '@chakra-ui/react';
import Layout from '../components/layout.js';
import '../styles/index.module.css'


function MyApp({ Component, pageProps }) {
 return(
   <ChakraProvider>
    
   <Navbar />
   <Box>
   <Component {...pageProps} />
   </Box>
   {/* </Layout> */}
   
   </ChakraProvider>
  
 )
}

export default MyApp
