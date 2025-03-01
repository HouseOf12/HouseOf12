import React from 'react'
import axios from 'axios';
import ReactCardFlip from 'react-card-flip';
import {useEffect, useState} from 'react'
import {Box, Center, useColorMode, Image, HStack, extendTheme, ChakraProvider, Icon , IconButton, Button} from '@chakra-ui/react';
import { CgMore } from "react-icons/cg";
import Fonts from "../Fonts"

const SunCard = ({ user }) => {

    const [sunSign, setSunSign] = useState()
   

    useEffect(() => {
       grabSun()
      }, []);

    const grabSun = () => {
        var userId = "615875";
        var apiKey = "5c21d3f71cfa8be2e7de0f3adc0ec33c";
        const sunData = axios
        .post("https://json.astrologyapi.com/v1/general_sign_report/tropical/sun",
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
          .then((sunData) => {
              
              setSunSign(sunData.data)
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
        <Box overflowY="scroll" h="58vh" w="20vw" border="4px solid rgba(212, 175, 53, 0.6)" borderRadius={16} backgroundImage="url(./mooncard.jpg)" bgSize="cover">
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
                RISING
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
                    The sun is your identity. It is the essence that you shine out into the world. 
                    It represents the vital force that drives you to seek the highest expression of your true self.
                    Your sun sign is how you answer the question “I am” and how you experience life and express your individuality.
                    As the sun puts forth light, so it brings forth life. This planet (also known as a luminary and a star) represents the self, one’s personality and ego, the spirit and what it is that makes the individual unique. 
                    It is our identity and our face to the world. The sun also speaks to creative ability and the power of the individual to meet the challenges of everyday life.
                        
                </Box>
                <Button variant="ghost" textColor='rgb(180, 130, 70)' onClick={handleClick}> <CgMore /> </Button>
                 </Box>

              
                {sunSign && 
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
                  {sunSign.planet_name}     
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
                  {sunSign.report}       
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

export default SunCard