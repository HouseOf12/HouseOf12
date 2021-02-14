import React from "react";
import { useCurrentUser } from "../hooks/index.js";
import HoroscopePics from "@/components/HoroscopePics.js";
import {Box, Center, ChakraProvider, extendTheme, useColorMode, colorMode} from '@chakra-ui/react'
import {Fonts} from "../components/Fonts"
// import Test from "../components/Test.js"


const IndexPage = () => {
  const [user] = useCurrentUser();

  const theme = extendTheme({
    fonts: {
      body: "Tryst-Regular",
    },
  })

  const bgColor = {
    light: "rgba(140, 145, 151, 0.7)",
    dark: "rgba(74, 85, 104, 0.9)",
  };
  const textColor = { light: "blue.400", dark: "gray.100" };
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
    <Box> 
     <Center>
     
        <Box  color={textColor[colorMode]} mb="2rem" fontFamily="Tryst-Regular" mt="2">   Hello, {user ? user.name : "stranger"}!</Box>
      
    </Center>

      <HoroscopePics />
      
      <Box zIndex="-1"  bgPosition="center" bgSize="cover" minH="100%" minW="32vw" w="100vw" h="auto" position="fixed" overflowX="scroll" top="0" right="0" bgImage="url('./wapperino.jpg')" /> 
       
       
      </Box>
      </ChakraProvider>
    
      // {/* </Box> */}
    
  );
};
export default IndexPage;