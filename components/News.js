import { Box, Icon, Center,colorMode, Text, useColorMode, Image, HStack, extendTheme, ChakraProvider, Heading, List , VStack, UnorderedList, ListItem, ListIcon, Divider } from '@chakra-ui/react';
import axios from 'axios';
import {useEffect, useState} from 'react'
import Fonts from "./Fonts"
import CardFlip from "./CardFlip"
import { WiMoonFull,WiMoonAltWaxingCrescent5,  WiMoonAltWaxingCrescent6, WiMoonAltWaxingGibbous1, WiMoonAltWaxingGibbous2,WiMoonAltWaxingGibbous3, WiMoonAltWaxingGibbous4, WiMoonAltWaxingGibbous6, } from "react-icons/wi";

import { HiOutlineSparkles } from "react-icons/hi";



const News = () => {
    // initial state of retrograde
    const [retrograde, setRetrograde] = useState([])

    const [infoGrade, setInfoGrade] = useState([])

    const colorScheme = {
        light: "rgba(212, 175, 53, 0.5)",
        dark: "rgba(212, 175, 53, 0.5)",
      };

      const { colorMode, toggleColorMode } = useColorMode();
         
    //func that runs the api code
        useEffect(() => {
           retro()
          }, []);


    //how to get todays date
    let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/")
    console.log(month, date, year)



    const retro = () =>{
        axios.get(`https://mercuryretrogradeapi.com?date=${year}-${month}-${date}`,{
        })
        .then((response)=>{
           setRetrograde(response.data)
     })
    .catch((error) => {
      console.error(error)
    })
    } 

    const theme = extendTheme({
      fonts: {
        heading: 'Philosopheri',
        body: 'Philosopher',
      },
    })



    return (
      
      <ChakraProvider theme={theme}>
      <Fonts />
        <Box marginTop="50px" >
            <Heading fontFamily="Philosopheri"> Is Mercury in Retrograde? </Heading>
            <Text fontSize='2xl' fontFamily="Tryst-Regular" marginBottom="10px">
                {(retrograde.is_retrograde ===true)? "Yes ✨"  : "No" }
            </Text> 

                {retrograde.is_retrograde ===true ? (
             <Box>
<HStack justifyContent="center"> 
        <Box>
        <Image height='22vh'  src = "https://media.giphy.com/media/lIeUAWuLK7cv6/giphy.gif" /> 
        </Box>
            <Box as="p" align="left" width="40%"  marginBottom="30px" fontFamily="Philosopher" fontSize="2vh" >
"Yes, that may account for the weirdness... Mercury is known as the planet that rules all communication, B.C.-based astrologist Georgia Nicols explains. This means that when Mercury appears retrograde, people may experience communication issues, problems with technology, or even things like lost mail Be careful not to make huge life changing decisions during this time, Mercury in retrograde has a way of making sure it won’t work out as planned. This goes for things like changing jobs, a move, plastic surgery, signing contracts, etc. Be cautious of new job opportunities or business offers, they can easily turn out to be nothing like what you had first expected. Take this time to relax, heal old wounds, and protect your energy."
            </Box>  
            </HStack>
            <Box height='1.5px' bgColor="rgba(212, 175, 53, 0.5)" width='50%' justifyContent='center' marginLeft='25%'>
                </Box> 
            {/* <Center>

            <Divider  colorScheme={colorScheme[colorMode]} width='50%'/>

            </Center> */}
            <Center> 
                  <List marginBottom="50px" align="left" fontFamily="Philosopher">
                      <HStack align="left"> 
                      <VStack align="left" >
                        <ListItem> 
                            <ListIcon as={WiMoonFull} color="white" align="left" /> 
                          Don’t start any new projects.
                        </ListItem>
                        <ListItem> 
                        <ListIcon as={WiMoonAltWaxingCrescent5} color="white"/> 
                          Clear yourself of others' energy.
                        </ListItem>
                        <ListItem> 
                        <ListIcon as={WiMoonAltWaxingCrescent6} color="white"/> 
                          Double check all your work.
                        </ListItem>
                        <ListItem> 
                        <ListIcon as={WiMoonAltWaxingGibbous1} color="white"/> 
                          Back up your computer and devices.
                        </ListItem>
                        </VStack>
                        
                        <VStack align="left"> 
                        <ListItem> 
                        <ListIcon as={WiMoonAltWaxingGibbous2} color="white"/> 
                          Tie up or cut off all loose ends.
                        </ListItem>
                        <ListItem> 
                        <ListIcon as={WiMoonAltWaxingGibbous3} color="white"/> 
                          Listen to your intuition.
                        </ListItem>
                        <ListItem> 
                        <ListIcon as={WiMoonAltWaxingGibbous4} color="white"/>
                            Don't take people’s irritability personally.</ListItem>
                        <ListItem> 
                        <ListIcon as={WiMoonAltWaxingGibbous6} color="white"/>
                            Think before you speak.
                        </ListItem>
                        </VStack>
                        </HStack>
                  </List>
                  </Center>
                  </Box>
                ): (
                    <Box>
                    Mercury is not in Retrograde right now. 
                    </Box>
                )}  
   
                
                  
        </Box>
        </ChakraProvider>
    )
}


export default News
