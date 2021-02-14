
import ReactCardFlip from 'react-card-flip';
import {useEffect, useState} from 'react'
import {Box, Center, useColorMode, Image, HStack, extendTheme, ChakraProvider, Icon , IconButton, Button} from '@chakra-ui/react';
import { CgMore } from "react-icons/cg";
import {Fonts} from "../Fonts"
import axios from 'axios';
import React from 'react'

 const MoonCard = () => {



    const [moonSign, setMoonSign] = useState()
   

    useEffect(() => {
       grabMoon()
      }, []);

    const grabMoon = () => {
        var userId = "615745";
        var apiKey = "758b876f8345a5b798e2f02e38e7c7ab";
        const moonData = axios
        .post("https://json.astrologyapi.com/v1/general_sign_report/tropical/moon",
        {
            day: '24',
            month: '2',
            year: '1998',
            hour: '06',
            min: '16',
            lat: '34.1808',
            lon: '118.3090',
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

 console.log("HIIIIIIIIII", moonSign)




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
          body: "Tryst-Regular",
        },
      })

    return (
        <ChakraProvider theme={theme}>
            <Fonts />
        <Center>
         <Box h="75vh" w="26vw" borderRadius={16} backgroundImage="url(./mooncard.jpg)" bgSize="cover">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
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
                MOON
                
                </Box>
            <Box
                padding="4"
                textAlign="center"
                as="p"
                fontFamily="body"
                fontSize="md"
                fontWeight="light"
                mt="2"
                color={textColor[colorMode]}
                wrap
                >
                Since the Moon is the closest ‘planet’ to Earth, this satellite literally zips around the zodiac, completing its circuit in less than a month. It also touches us more deeply than most planets.

                As the ruler of the tides, it is fitting that the Moon should be the ruler of our emotions. Still waters run deep? Making waves? A wellspring of emotion? Yes, our emotions have long been portrayed in terms of the sea: fluid, momentous, churning from within. Mood swings, instinct, 
                how we feel about things and how our feelings affect others are all influenced by the Moon. Whereas the Sun gives us our spirit, it’s the Moon that gives us our soul.
                
                </Box>
                <Button variant="ghost" onClick={handleClick}> <CgMore /> </Button>
                </Box>

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
                padding="2"
                textAlign="center"
                as="p"
                fontFamily="body"
                fontSize="sm"
                fontWeight="light"
                mt="2"
                color={textColor[colorMode]}
                wrap
                >
                {moonSign.report}
                
                </Box>
                <Button variant="ghost" onClick={handleClick}> <CgMore /> </Button>
                </Box>
                </ReactCardFlip>
        </Box>
        </Center>
        </ChakraProvider>
    )
}

export default MoonCard
