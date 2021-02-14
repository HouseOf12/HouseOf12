import { Table, Thead, Tbody,Tfoot, Tr, Th, Td, TableCaption, Box, Center, useColorMode, Image, HStack, extendTheme, ChakraProvider } from '@chakra-ui/react';
import axios from 'axios';
import {useEffect, useState} from 'react'
import {Fonts} from "./Fonts"
import CardFlip from "./CardFlip"


// Houses have a house number and a sign
// Platents have a name and the sign 
// Compare sign from planets, find match in houses and return

const theme = extendTheme({
    fonts: {
      body: "Tryst-Regular",
    },
  })

const Natalchart = () => {
    const [chart, setChart] = useState([])
   

    useEffect(() => {
       grabNatal()
      }, []);

    const grabNatal = () => {
        var userId = "615745";
        var apiKey = "758b876f8345a5b798e2f02e38e7c7ab";
        const natalData = axios
        .post("https://json.astrologyapi.com/v1/western_horoscope",
        {
            day: '25',
            month: '12',
            year: '1988',
            hour: '10',
            min: '12',
            lat: '25.123',
            lon: '82.34',
            tzone: '5.5',
          },
          {headers: {
            "authorization": "Basic " + btoa(userId+":"+apiKey),
            "Content-Type":'application/json'
            }})
          .then((natalData) => {
              
              setChart(natalData.data)
          })
            
    }
    
    
    const bgColor = {
        light: "rgba(70, 93, 114, 0.9)",
        dark: "rgba(74, 85, 104, 0.9)",
      };
      const textColor = { light: "gray.300", dark: "yellow.500" };
      const { colorMode, toggleColorMode } = useColorMode();

     

    
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
        <Box color="white" bgSize="cover" minH="100%" minW="1024px" w="100%" h="auto" position="absolute" overflowX="scroll" top="0" right="0" bgImage="url('./chartwpp.jpg')" > 
        <Center>
        <Image src="./chart.png" w="26vw" h="48vh " mt="12vh" mb="5vh"/> 
        </Center>
        <CardFlip />
        {/* <Center>
        <HStack spacing={24}>
        <Box h="58vh" w="20vw" borderRadius={16} backgroundImage="url(./suncard.jpg)" bgSize="cover">
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
                    The sun is your identity. It is the essence that you shine out into the world. 
                    It represents the vital force that drives you to seek the highest expression of your true self.
                    Your sun sign is how you answer the question “I am” and how you experience life and express your individuality.
                    As the sun puts forth light, so it brings forth life. This planet (also known as a luminary and a star) represents the self, one’s personality and ego, the spirit and what it is that makes the individual unique. It is our identity and our face to the world. The sun also speaks to creative ability and the power of the individual to meet the challenges of everyday life.
                </Box>
        </Box>
        
        
        <Box h="58vh" w="20vw" borderRadius={16} backgroundImage="url(./mooncard.jpg)" bgSize="cover">
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

                As the ruler of the tides, it is fitting that the Moon should be the ruler of our emotions. Still waters run deep? Making waves? A wellspring of emotion? Yes, our emotions have long been portrayed in terms of the sea: fluid, momentous, churning from within. Mood swings, instinct, how we feel about things and how our feelings affect others are all influenced by the Moon. Whereas the Sun gives us our spirit, it’s the Moon that gives us our soul.
                </Box>
        </Box>
        
       
        <Box h="58vh" w="20vw" borderRadius={16} backgroundImage="url(./asccard.jpg)" bgSize="cover">
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
        </Box>
        
        </HStack>
        </Center> */}

        {/* <Center> 
        <Box 
        borderRadius={16}
        color={textColor[colorMode]}
        bgColor={bgColor[colorMode]}
        mt="10vh"
        w="2xl" 
        h="md">
        <Table variant="simple" size="sm">
        <Thead>
            <Tr>
            <Th>Planet</Th>
            <Th>Sign</Th>
            <Th isNumeric>House</Th>
            </Tr>
        </Thead>
        <Tbody >
            <Tr>
            <Td>{chart.planets[0].name}</Td>
            <Td>{chart.planets[0].sign}</Td>
            <Td isNumeric>{chart.planets[0].house}</Td>
            </Tr>
            <Tr>
            <Td>{chart.planets[1].name}</Td>
            <Td>{chart.planets[1].sign}</Td>
            <Td isNumeric>{chart.planets[1].house}</Td>
            </Tr>
            <Tr>
            <Td>{chart.planets[2].name}</Td>
            <Td>{chart.planets[2].sign}</Td>
            <Td isNumeric>{chart.planets[2].house}</Td>
            </Tr>
            <Tr>
            <Td>{chart.planets[3].name}</Td>
            <Td>{chart.planets[3].sign}</Td>
            <Td isNumeric>{chart.planets[3].house}</Td>
            </Tr>
            <Tr>
            <Td>{chart.planets[4].name}</Td>
            <Td>{chart.planets[4].sign}</Td>
            <Td isNumeric>{chart.planets[4].house}</Td>
            </Tr>
            <Tr>
            <Td>{chart.planets[5].name}</Td>
            <Td>{chart.planets[5].sign}</Td>
            <Td isNumeric>{chart.planets[5].house}</Td>
            </Tr>
            <Tr>
            <Td>{chart.planets[6].name}</Td>
            <Td>{chart.planets[6].sign}</Td>
            <Td isNumeric>{chart.planets[6].house}</Td>
            </Tr>
            <Tr>
            <Td>{chart.planets[7].name}</Td>
            <Td>{chart.planets[7].sign}</Td>
            <Td isNumeric>{chart.planets[7].house}</Td>
            </Tr>
            <Tr>
            <Td>{chart.planets[8].name}</Td>
            <Td>{chart.planets[8].sign}</Td>
            <Td isNumeric>{chart.planets[8].house}</Td>
            </Tr>
            <Tr>
            <Td>{chart.planets[9].name}</Td>
            <Td>{chart.planets[9].sign}</Td>
            <Td isNumeric>{chart.planets[9].house}</Td>
            </Tr>
            <Tr>
            <Td>{chart.planets[10].name}</Td>
            <Td>{chart.planets[10].sign}</Td>
            <Td isNumeric>{chart.planets[10].house}</Td>
            </Tr>
            <Tr>
            <Td>{chart.planets[11].name}</Td>
            <Td>{chart.planets[11].sign}</Td>
            <Td isNumeric>{chart.planets[11].house}</Td>
            </Tr>
            <Tr>
            <Td>{chart.planets[12].name}</Td>
            <Td>{chart.planets[12].sign}</Td>
            <Td isNumeric>{chart.planets[12].house}</Td>
            </Tr>
        </Tbody>
        </Table>
        </Box>
        </Center> */}
        </Box>
        </ChakraProvider>
    )
}


export default Natalchart