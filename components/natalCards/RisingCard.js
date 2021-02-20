import React from 'react'
import axios from 'axios';
import ReactCardFlip from 'react-card-flip';
import {useEffect, useState} from 'react'
import {Box, Center, useColorMode, Image, HStack, extendTheme, ChakraProvider, Icon , IconButton, Button} from '@chakra-ui/react';
import { CgMore } from "react-icons/cg";
import Fonts from "../Fonts"

const RisingCard = ({ user }) => {

  const [risingSign, setRisingSign] = useState()

  useEffect(() => {
    grabRising()
  }, []);

  const grabRising = () => {
    var userId = "615745";
    var apiKey = "758b876f8345a5b798e2f02e38e7c7ab";
    const risingData = axios
    .post("https://json.astrologyapi.com/v1/general_ascendant_report",
    {
      day: user.day,
      month: user.month,
      year: user.year,
      hour: user.hour,
      min: user.minute,
      lat: user.lat,
      lon: user.lon,
      tzone: '5.5',
      },
      {headers: {
        "authorization": "Basic " + btoa(userId+":"+apiKey),
        "Content-Type":'application/json'
        }})
      .then((risingData) => {
          setRisingSign(risingData.data)
      })   
    }

    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
      setIsFlipped(!isFlipped)
    }

    const bgColor = {
        light: "rgba(70, 93, 114, 0.9)",
        dark: "rgba(74, 85, 104, 0.9)",
    };
    const textColor = { light: "gray.300", dark: "yellow.500" };
    const { colorMode, toggleColorMode } = useColorMode();

    const theme = extendTheme({
      fonts: {
        heading: 'Philosopheri',
        body: 'Philosopher',
      },
    })

    return (
        <ChakraProvider theme={theme}>
        <Fonts />
        <Center>

        <Box  overflowY="scroll" h="58vh" w="20vw" border="4px solid rgba(212, 175, 53, 0.6)" boxShadow="dark-lg"  borderRadius={16} backgroundImage="url(./mooncard.jpg)" bgSize="cover">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <Box>
            <Box
            textAlign="center"
            as="p"
            fontFamily="body"
            fontSize="lg"
            fontWeight="light"
            mt="2"
            color={textColor[colorMode]}
            wrap
            >
            ASCENDANT       
            </Box>

            <Box
            padding="4"
            textAlign="center"
            as="p"
            fontFamily="body"
            fontSize="lg"
            fontWeight="light"
            mt="2"
            color={textColor[colorMode]}
            wrap
            >
              Your rising sign represents the way others see you, your general impression on people and your spontaneous reactions. It reflects the zodiacal sign that was ascending on the eastern horizon the moment you were born. Until the early 20th century, the ascendant, rather than the sun sign, was the dominant indicator of one’s nature.
              Upon meeting you, people will interact with your rising sign. Does the way people describe you puzzle you? That’s because it’s hard for us to see what others see. What you project may not be how you see yourself at all. If you feel nervous and anxious inside, yet everyone sees you as calm and laid-back, your rising sign may be dramatically different from your moon or sun sign.
            </Box>
            <Button variant="ghost" textColor='rgb(180, 130, 70)' onClick={handleClick}> <CgMore /> </Button>
          </Box>

          {risingSign && 
          <Box>
            <Box
            textAlign="center"
            as="h3"
            fontFamily="body"
            fontSize="md"
            fontWeight="light"
            mt="2"
            color={textColor[colorMode]}
            wrap
            >
            {risingSign.asc_report.ascendant}
            </Box>

            <Box
            padding="4"
            textAlign="center"
            as="p"
            fontFamily="body"
            fontSize="lg"
            fontWeight="light"
            mt="2"
            color={textColor[colorMode]}
            wrap
            >
            {risingSign.asc_report.report}   
            </Box>

            <Button variant="ghost" textColor='rgb(180, 130, 70)' onClick={handleClick}> <CgMore /> </Button>
          </Box>
          }

        </ReactCardFlip>
        </Box>
        </Center>
        </ChakraProvider>
    )
}

export default RisingCard