
import ReactCardFlip from 'react-card-flip';
import {useEffect, useState} from 'react'
import {Box, Center, useColorMode, Image, HStack, extendTheme, ChakraProvider, Icon , IconButton, Button} from '@chakra-ui/react';
import { CgMore } from "react-icons/cg";
import Fonts from "../Fonts"
import axios from 'axios';
import React from 'react'

 const MoonCard = ({ user }) => {

    const [moonSign, setMoonSign] = useState()
   
    useEffect(() => {
       grabMoon()
      }, []);

    const grabMoon = () => {
        var userId = "615875";
        var apiKey = "5c21d3f71cfa8be2e7de0f3adc0ec33c";
        const moonData = axios
        .post("https://json.astrologyapi.com/v1/general_sign_report/tropical/moon",
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
          .then((moonData) => {
              setMoonSign(moonData.data)
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
        <Box  overflowY="scroll" h="58vh" w="20vw" border="4px solid rgba(212, 175, 53, 0.6)" borderRadius={16} backgroundImage="url(./mooncard.jpg)" bgSize="cover">
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
            MOON
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
              Since the Moon is the closest ‘planet’ to Earth, this satellite literally zips around the zodiac, completing its circuit in less than a month. It also touches us more deeply than most planets.

              As the ruler of the tides, it is fitting that the Moon should be the ruler of our emotions. Still waters run deep? Making waves? A wellspring of emotion? Yes, our emotions have long been portrayed in terms of the sea: fluid, momentous, churning from within. Mood swings, instinct, 
              how we feel about things and how our feelings affect others are all influenced by the Moon. Whereas the Sun gives us our spirit, it’s the Moon that gives us our soul.
            </Box>
            <Button variant="ghost" textColor='rgb(180, 130, 70)' onClick={handleClick}> <CgMore /> </Button>
          </Box>

          {moonSign && 
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
            {moonSign.planet_name}
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
            {moonSign.report}
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

export default MoonCard
