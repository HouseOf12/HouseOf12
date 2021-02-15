import React from 'react'
import {useEffect, useState} from 'react'
import {Box, Center, useColorMode, Image, VStack, extendTheme, ChakraProvider, Icon , IconButton, Button, Heading, Flex, Stack, FormControl, InputGroup, InputLeftElement, Input, Divider, Grid, GridItem} from '@chakra-ui/react';
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon, StarIcon } from '@chakra-ui/icons'
import {FaGlobeAmericas } from "react-icons/fa";
import { MdCake, MdAccessTime } from "react-icons/md";


import axios from 'axios';

const FriendshipReport = () => {
    const badgeRadius = 4;
    const [friendship, setFriendship] = useState()
    const [location, setLocation] = useState()
    useEffect(() => {
       grabComp()
       grabLocation()
      }, []);

    const grabComp = () => {
        var userId = "615745";
        var apiKey = "758b876f8345a5b798e2f02e38e7c7ab";
        const friendData = axios
        .post("https://json.astrologyapi.com/v1/friendship_report/tropical",
        {
            p_day: '24',
            p_month: '2',
            p_year: '1998',
            p_hour: '06',
            p_min: '16',
            p_lat: '34.1808',
            p_lon: '118.3090',
            p_tzone: '5.5',
            s_day: '19',
            s_month: '07',
            s_year: '1997',
            s_hour: '05',
            s_min: '30',
            s_lat: '34.1808',
            s_lon: '118.3090',
            s_tzone: '5.5',
          },
          {headers: {
            "authorization": "Basic " + btoa(userId+":"+apiKey),
            "Content-Type":'application/json'
            }})
          .then((friendData) => {
              
              setLocation(friendData.data)
          })
           
    }


    const grabLocation = () => {
        var userId = "615745";
        var apiKey = "758b876f8345a5b798e2f02e38e7c7ab";
        const geoData = axios
        .post("https://json.astrologyapi.com/v1/geo_details",
        {
            place: 'los angeles',
            maxRows: 6
          },
          {headers: {
            "authorization": "Basic " + btoa(userId+":"+apiKey),
            "Content-Type":'application/json'
            }})
          .then((geoData) => {
              
              setFriendship(geoData.data)
          })
           
    }
    // console.log("THTHTHTHTHHTHTHTHTHTHT", friendship.friendship_report[0])
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
               <GridItem colStart={1} rowSpan={2}>
               
       
            <form>
            {/* <form onSubmit={handleSubmit}> */}
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
                    name="time"
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
                    name="location"
                    placeholder="Enter Birth Place"
                    />
                </InputGroup>
                </FormControl>

            </VStack>
            </form>
        
               </GridItem>

               <GridItem colStart={2} rowSpan={2}>
               
       
       <form>
       {/* <form onSubmit={handleSubmit}> */}
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
               id="birthday"
               type="date"
               name="birthday"
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
               name="time"
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
               name="location"
               placeholder="Friend's Birth Place"
               />
           </InputGroup>
           </FormControl>

           
           
       </VStack>
       </form>
  
               </GridItem>
               
           </Grid>
           <Center>
           <Button w="12vw" mt={6} variantColor="blue" bgColor="blue.600" type="submit" shadow="md">
           Check Synastry
           </Button>
           </Center>
           </Box>
           </Box>
           <br></br>
           <br></br>
           <Box mt="2" bgColor={bgColor[colorMode]} borderRadius="15px" border="4px solid rgba(212, 175, 53, 0.5)" width="70vw" height="62vh" mt="4vh" justifyContent="center" alignContent="center" alignItems="center" textAlign="center">
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
                FRIENDSHIP COMPATIBILITY
                        
                </Box>
                 {/* <Box
                padding="2"
                textAlign="center"
                as="p"
                fontFamily="body"
                fontSize="md"
                fontWeight="light"
                mt="2"
                color={textColor[colorMode]}
                wrap
                >
                {friendship.friendship_report[0]}
                {friendship.friendship_report[1]}
                {friendship.friendship_report[2]}
                {friendship.friendship_report[3]}
                {friendship.friendship_report[4]}
                {friendship.friendship_report[5]}
                {friendship.friendship_report[6]}
                {friendship.friendship_report[7]}
                {friendship.friendship_report[8]}
                        
                </Box>  */}
       </Box>
       <br></br>
        <br></br>
       </VStack>
       
       </Center>
       
       
       
       
       
       
       
       
       

    )
}

export default FriendshipReport