import React from 'react'
import axios from 'axios';
import ReactCardFlip from 'react-card-flip';
import {useEffect, useState} from 'react'
import {Box, Center, useColorMode, Image, HStack, extendTheme, ChakraProvider, Icon , IconButton, Button} from '@chakra-ui/react';
import { CgMore } from "react-icons/cg";
import {Fonts} from "../Fonts"

const RisingCard = () => {

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
          .then((risingData) => {
            //   console.log("HEYYYYYYYYYYYYY", risingData.data.asc_report.report)
              setRisingSign(risingData.data)
          })
           
    }
    //  console.log(risingSign)
    // console.log("HEYYYYYYYYYYYYY", risingSign.asc_report.report)

    // let report = risingData.data.asc_report.report
    // let name = risingData.data.asc_report.ascendant



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
                   ASCENDANT
                    
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
                    Your rising sign represents the way others see you, your general impression on people and your spontaneous reactions. It reflects the zodiacal sign that was ascending on the eastern horizon the moment you were born. Until the early 20th century, the ascendant, rather than the sun sign, was the dominant indicator of one’s nature.
                    Upon meeting you, people will interact with your rising sign. Does the way people describe you puzzle you? That’s because it’s hard for us to see what others see. What you project may not be how you see yourself at all. If you feel nervous and anxious inside, yet everyone sees you as calm and laid-back, your rising sign may be dramatically different from your moon or sun sign.
                    
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
                   {/* {risingSign.asc_report.ascendant} */}
                    
                </Box>
                <Box
                padding="2"
                textAlign="center"
                as="h3"
                fontFamily="body"
                fontSize="md"
                fontWeight="light"
                mt="2"
                color={textColor[colorMode]}
                wrap
                >
                   {/* {risingSign.asc_report.report} */}
                    
                </Box>
                <Button variant="ghost" onClick={handleClick}> <CgMore /> </Button>
                </Box>
                </ReactCardFlip>
        </Box>


            </Center>
        </ChakraProvider>
    )
}

export default RisingCard