import { Table, Thead, Tbody,Tfoot, Tr, Th, Td, TableCaption, Box, Center, useColorMode, Image, HStack, extendTheme, ChakraProvider, Heading, VStack } from '@chakra-ui/react';
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
    


    const [wheelChart, setWheelChart] = useState()
   

    useEffect(() => {
       grabWheel()
      }, []);

    const grabWheel = () => {
        var userId = "615745";
        var apiKey = "758b876f8345a5b798e2f02e38e7c7ab";
        const wheelData = axios
        .post("https://json.astrologyapi.com/v1/natal_wheel_chart",
        {
            day: '24',
            month: '2',
            year: '1998',
            hour: '06',
            min: '16',
            lat: '34.1808',
            lon: '118.3090',
            tzone: '5.5',
            planet_icon_color:"#0A2C52",
            inner_circle_background:"#7c8394",
            sign_icon_color:"#A38103",
            sign_background:"#0A2C52",
            chart_size:500,
            image_type:"png"
          },
          {headers: {
            "authorization": "Basic " + btoa(userId+":"+apiKey),
            "Content-Type":'application/json'
            }})
          .then((wheelData) => {
              
              setWheelChart(wheelData.data)
          })
           
    }
    console.log(wheelChart)
    
    const bgColor = {
        light: "rgba(70, 93, 114, 0.9)",
        dark: "rgba(74, 85, 104, 0.9)",
      };
      const textColor = { light: "gray.300", dark: "yellow.500" };
      const { colorMode, toggleColorMode } = useColorMode();

     

    
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
        <Center>
          
          <Box  bgSize="cover"  w="26vw" h="50vh " mt="12vh" mb="5vh"  bgImage={`url(${wheelChart.chart_url})`} />
          
        </Center>
        <CardFlip />
        

        <Center> 
          <VStack>
            <Box border="4px solid rgba(212, 175, 53, 0.6)" borderRadius="12px"mt={4} color={textColor[colorMode]} bgColor={bgColor[colorMode]}>
          <Heading padding={2}  fontWeight="light">
            YOUR NATAL PLACEMENTS
          </Heading>
          </Box>
        <Box 
        border="4px solid rgba(212, 175, 53, 0.6)"
        borderRadius={16}
        color={textColor[colorMode]}
        bgColor={bgColor[colorMode]}
        mt="8vh"
        w="2xl" 
        padding={2}
        h="56vh">
          
        <Table variant="simple" size="sm">
        <Thead>
            <Tr>
            <Th color={textColor[colorMode]} >Planet</Th>
            <Th color={textColor[colorMode]} >Sign</Th>
            <Th color={textColor[colorMode]} isNumeric>House</Th>
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
        
        </VStack>
        </Center>
        </ChakraProvider>
    )
}


export default Natalchart