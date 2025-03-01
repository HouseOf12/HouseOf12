import React from "react";
import ReactCardFlip from "react-card-flip";
import { useEffect, useState } from "react";
import {
  Box,
  Center,
  useColorMode,
  Image,
  HStack,
  extendTheme,
  ChakraProvider,
  Icon,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { CgMore } from "react-icons/cg";
import Fonts from "./Fonts";
import MoonCard from "./natalCards/MoonCard.js";
import SunCard from "./natalCards/SunCard.js";
import RisingCard from "./natalCards/RisingCard.js";




const CardFlip = ({ user }) => {
  // const [isFlipped, setIsFlipped] = useState(false)
  // const [isMoonFlipped, setIsMoonFlipped] = useState(false)
  // const [isRisingFlipped, setIsRisingFlipped] = useState(false)

  // const handleClick = () => {
  //     setIsFlipped(!isFlipped)
  // }
  // const handleMoonClick = () => {
  //     setIsMoonFlipped(!isMoonFlipped)
  // }
  // const handleRisingClick = () => {
  //     setIsRisingFlipped(!isRisingFlipped)
  // }

  const bgColor = {
    light: "rgba(70, 93, 114, 0.9)",
    dark: "rgba(0, 0, 0, 0.9)",
  };

  const textColor = { light: "gray.300", dark: "yellow.500" };
  const { colorMode, toggleColorMode } = useColorMode();

  const theme = extendTheme({
    fonts: {
      heading: "Philosopheri",
      body: "Philosopher",
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Center>
        <HStack spacing={20}>
          <SunCard user={user} />
          <MoonCard user={user} />
          <RisingCard user={user} />
        </HStack>
      </Center>
    </ChakraProvider>
  );
};

export default CardFlip;