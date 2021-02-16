import React from 'react'
import {useEffect, useState} from 'react'
import {Box, Center, useColorMode, Image, VStack, extendTheme, ChakraProvider, Icon , IconButton, Button, Heading, Flex, Stack, FormControl, InputGroup, InputLeftElement, Input, Divider, Grid, GridItem} from '@chakra-ui/react';
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon, StarIcon } from '@chakra-ui/icons'
import {FaGlobeAmericas } from "react-icons/fa";
import { MdCake, MdAccessTime } from "react-icons/md";


import axios from 'axios';


const FriendshipReport2 = () => {

    const badgeRadius = 4;
    const [friendship, setFriendship] = useState()
    const [location, setLocation] = useState()


    const grabComp = (dataToSend) => {
        let userId = "615745";
        let apiKey = "758b876f8345a5b798e2f02e38e7c7ab";
        const friendData = axios
        .post("https://json.astrologyapi.com/v1/friendship_report/tropical", dataToSend,
          {headers: {
            "authorization": "Basic " + btoa(userId+":"+apiKey),
            "Content-Type":'application/json'
            }})
          .then((friendData) => {
              console.log('FRIEND DATA', friendData.data)
              setFriendship(friendData.data)
          })    
    }


    const grabLocation = (location) => {
        console.log('location', location)
        var userId = "615745";
        var apiKey = "758b876f8345a5b798e2f02e38e7c7ab";
        const geoData = axios
        .post("https://json.astrologyapi.com/v1/geo_details",
        {
            place: location,
            maxRows: 1
          },
          {headers: {
            "authorization": "Basic " + btoa(userId+":"+apiKey),
            "Content-Type":'application/json'
            }})
          .then((geoData) => {
              console.log('GET DATA', geoData.data)
              
              //setLocation(geoData.data)
          })   
    }

    const handleSubmit = (e) => {
        e.preventDefault();

         //take a date and split it into day/month/year
        let date = e.currentTarget.birthday.value.split('-');
        let dateF = e.currentTarget.birthdayF.value.split('-');

        //take a time and split it into hour/min
        let time = e.currentTarget.timeM.value.split(':');
        let timeF = e.currentTarget.timeF.value.split(':');

        let latLon = grabLocation(e.currentTarget.locationM.value);
        let latLonF = grabLocation(e.currentTarget.locationF.value);

        //would need to call grabComp in here and pass in the data
        const dataToSend = {
            p_day: `${date[2]}`,
            p_month: `${date[1]}`,
            p_year: `${date[0]}`,
            p_hour: `${time[0]}`,
            p_min: `${time[1]}`,
            p_lat: '34.1808',
            p_lon: '118.3090',
            p_tzone: '5.5',
            s_day: `${dateF[2]}`,
            s_month: `${dateF[1]}`,
            s_year: `${dateF[0]}`,
            s_hour: `${timeF[0]}`,
            s_min: `${timeF[1]}`,
            s_lat: '34.1808',
            s_lon: '118.3090',
            s_tzone: '5.5',
        }
        //call grabComp and pass in the object of data
        grabComp(dataToSend);
    }


    const bgColor = {
        light: "rgba(70, 93, 114, 0.9)",
        dark: "rgba(74, 85, 104, 0.9)",
    };

    const textColor = { light: "blue.200", dark: "yellow.500" };
    const { colorMode, toggleColorMode } = useColorMode();

    const theme = extendTheme({
    fonts: {
        body: "Tryst-Regular",
    },
    })

    return (
        
        <Center>
        <Box zIndex="-1" bgColor={bgColor[colorMode]}  bgPosition="center" bgSize="cover" minH="100%" minW="32vw" w="100vw" h="auto" position="fixed" overflowX="scroll" top="0" right="0" bgImage="url('./loginwp.png')" /> 
       
       
           <VStack>
           <Box>
           <Flex mt={6} border="4px solid rgba(212, 175, 53, 0.9)" alignItems="center" justifyContent="center" color="gray.200" bg="gray.400" borderRadius="full"  mb={`-${badgeRadius}em`} shadow="md" zIndex="docked">
            <Image
                src="./icon.png" height="22vh"  width="13vw" size={`${badgeRadius + 1}em`} mt={`${badgeRadius / 6}em`} />
             </Flex>  
             <Box border="4px solid rgba(212, 175, 53, 0.9)" w="38vw" h="64vh" p={4} pt="24" color={textColor[colorMode]} bgColor={bgColor[colorMode]} borderRadius="md" shadow="lg" >
             <Center>
                 <VStack>
        <Heading as="h1" mt="-2vh" textAlign="center" textTransform="uppercase" color={textColor[colorMode]} letterSpacing={2}>
            Compatible Amongst The Stars
            </Heading>
            <Heading mb="2" as="h2" color="gray.300" fontSize="lg" color={textColor[colorMode]} textAlign="center">
           Friendship
            </Heading>
            </VStack>
            </Center>
           
           
           <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)" gap={2}>
           <form onSubmit={handleSubmit}>
            <GridItem colStart={1} rowSpan={2}>
            <VStack spacing={4}>
            <FormControl isRequired>
                <InputGroup>
                    <InputLeftElement>
                    <StarIcon />
                    </InputLeftElement>
                    <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    />
                </InputGroup>
                </FormControl>


                <FormControl isRequired>
                <InputGroup>
                    <InputLeftElement>
                    <Icon as={MdCake} />
                    </InputLeftElement>
                    <Input
                    id="birthday"
                    type="date"
                    name="birthday"
                    placeholder="Enter Birth Date"
                    />
                </InputGroup>
                </FormControl>


                <FormControl isRequired>
                <InputGroup>
                    <InputLeftElement>
                    <Icon as={MdAccessTime} />
                    </InputLeftElement>
                    <Input
                    id="time"
                    type="time"
                    name="timeM"
                    placeholder="Enter Birth Time"
                    />
                </InputGroup>
                </FormControl>

                <FormControl isRequired>
                <InputGroup>
                    <InputLeftElement>
                    <Icon as={FaGlobeAmericas} />
                    </InputLeftElement>
                    <Input
                    id="location"
                    type="text"
                    name="locationM"
                    placeholder="Enter Birth Place"
                    />
                </InputGroup>
                </FormControl>
            </VStack>
            </GridItem>

            <GridItem colStart={2} rowSpan={2}>
                <VStack spacing={4}>
                <FormControl isRequired>
                    <InputGroup>
                        <InputLeftElement>
                        <StarIcon />
                        </InputLeftElement>
                        <Input
                        id="name"
                        type="text"
                        name="nameF"
                        placeholder="Your Friend's Name"
                        />
                    </InputGroup>
                    </FormControl>


                    <FormControl isRequired>
                    <InputGroup>
                        <InputLeftElement>
                        <Icon as={MdCake} />
                        </InputLeftElement>
                        <Input
                        id="sbirthday"
                        type="date"
                        name="birthdayF"
                        placeholder="Friend's Birth Date"
                        />
                    </InputGroup>
                    </FormControl>


                    <FormControl isRequired>
                    <InputGroup>
                        <InputLeftElement>
                        <Icon as={MdAccessTime} />
                        </InputLeftElement>
                        <Input
                        id="time"
                        type="time"
                        name="timeF"
                        placeholder="Friend's Birth Time"
                        />
                    </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                    <InputGroup>
                        <InputLeftElement>
                        <Icon as={FaGlobeAmericas} />
                        </InputLeftElement>
                        <Input
                        id="location"
                        type="text"
                        name="locationF"
                        placeholder="Friend's Birth Place"
                        />
                    </InputGroup>
                    </FormControl>
                </VStack>
               </GridItem>
               <Center>
                    <Button w="12vw" mt={6} variantColor="blue" bgColor="blue.600" type="submit" shadow="md">
                    Check Synastry
                    </Button>
                </Center>
            </form>
           </Grid>

           </Box>
           </Box>
           <br></br>
           <br></br>
           <Box mt="2" bgColor={bgColor[colorMode]} borderRadius="15px" border="4px solid rgba(212, 175, 53, 0.5)" width="70vw" height="62vh" mt="4vh" justifyContent="center" alignContent="center" alignItems="center" textAlign="center">
         
        {/* <Box
        textAlign="center"
        as="h3"
        fontFamily="body"
        fontSize="md"
        fontWeight="light"
        mt="2"
        color={textColor[colorMode]}
        wrap
        >
            FRIENDSHIP COMPATIBILITY
                        
        </Box> */}
       </Box>
       <br></br>
        <br></br>
       </VStack>
       
       </Center>
       
       
       
       
       
       
       
       
       

    )
}

export default FriendshipReport2