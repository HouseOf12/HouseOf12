import React from "react";
import { useCurrentUser } from "../hooks/index.js";
import HoroscopePics from "@/components/HoroscopePics.js";
import News from "@/components/News.js";

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
    light: "rgba(196, 199, 202, 0.4)",
    dark: "rgba(74, 85, 104, 0.6)",
  };
  const textColor = { light: "blue.400", dark: "gray.100" };
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
    <Box bgColor={bgColor[colorMode]}> 
     <Center>
     
        <Box  color={textColor[colorMode]} mb="2rem" fontFamily="Tryst-Regular" mt="2">   Hello, {user ? user.name : "stranger"}!</Box>
      
    </Center>

      <HoroscopePics />
      <Box color="white" textAlign="center">
      <News />

      </Box>
      <Box zIndex="-1"  bgPosition="center" bgSize="cover" minH="100%" minW="32vw" w="100vw" h="auto" position="fixed" overflowX="scroll" top="0" right="0" bgImage="url('./homewppp.png')" /> 
       
       
      </Box>
      </ChakraProvider>
    
      // {/* </Box> */}
    
  );
};
export default IndexPage;