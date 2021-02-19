import React from "react";
import { useCurrentUser } from "../hooks/index.js";
import HoroscopePics from "@/components/HoroscopePics.js";
import AstroFacts from "@/components/AstroFacts.js";
import News from "@/components/News.js";

import {
  Box,
  Center,
  ChakraProvider,
  extendTheme,
  useColorMode,
  colorMode,
} from "@chakra-ui/react";
import Fonts from "../components/Fonts";
// import Test from "../components/Test.js"





const IndexPage = () => {
  const [user] = useCurrentUser();

  const theme = extendTheme({
    fonts: {
      heading: "Philosopheri",
      body: "Philosopher",
    },
  });

  const bgColor = {
    light: "rgba(112, 131, 153, 0.4)",
    dark: "rgba(0, 0, 10, 0.9)",
  };
  const textColor = { light: "cyan.900", dark: "gray.300" };
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Box>
        <Box
          bgColor={bgColor[colorMode]}
          zIndex="-1"
          bgPosition="center"
          bgSize="cover"
          minH="100%"
          minW="32vw"
          w="100vw"
          h="auto"
          position="fixed"
          overflowX="scroll"
          top="0"
          right="0"
          bgImage="url('./homewppp.png')"
        />
        <Center>
          <Box
            color={textColor[colorMode]}
            mb="2rem"
            fontFamily="Philosopheri"
            mt="2"
          >
            {" "}
            Hello, {user ? user.name : "stranger"}!
          </Box>
        </Center>

        <HoroscopePics />
        <Box color="white" textAlign="center">
          <News />
        </Box>
      </Box>

      <AstroFacts />
    </ChakraProvider>
  );
};
export default IndexPage;