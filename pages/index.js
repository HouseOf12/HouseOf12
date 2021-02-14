import React from "react";
import { useCurrentUser } from "../hooks/index.js";
import HoroscopePics from "@/components/HoroscopePics.js";
import {Box, Center, ChakraProvider, extendTheme} from '@chakra-ui/react'
import {Fonts} from "../components/Fonts"
// import Test from "../components/Test.js"


const IndexPage = () => {
  const [user] = useCurrentUser();

  const theme = extendTheme({
    fonts: {
      body: "Tryst-Regular",
    },
  })

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
    <Box> 
     <Center>
     <div style={{ marginBottom: "2rem" }}>
        <Box  fontFamily="Tryst-Regular" mt="2">   Hello, {user ? user.name : "stranger"}!</Box>
      </div>
    </Center>

      <HoroscopePics />
      
      <Box zIndex="-1"  bgPosition="center" bgSize="cover" minH="100%" minW="32vw" w="100vw" h="auto" position="fixed" overflowX="scroll" top="0" right="0" bgImage="url('./wapperino.jpg')" /> 
       
       
      </Box>
      </ChakraProvider>
    
      // {/* </Box> */}
    
  );
};
export default IndexPage;