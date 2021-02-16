import React from 'react'
import {useEffect, useState} from 'react'
import {Box, Center, useColorMode, Image, VStack, extendTheme, ChakraProvider, Icon , IconButton, Button, Heading, Flex, Stack, FormControl, InputGroup, InputLeftElement, Input, Divider, Grid, GridItem} from '@chakra-ui/react';
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon, StarIcon } from '@chakra-ui/icons'
import {FaGlobeAmericas } from "react-icons/fa";
import { MdCake, MdAccessTime } from "react-icons/md";


import axios from 'axios';





const FriendshipReport = () => {


    const [firstBday, setFirstBday] = useState('');
    const [secondBday, setSecondBday] = useState('');


    const [firstTime, setFirstTime] = useState('');
    const [secondTime, setSecondTime] = useState('');

    const [firstLocation, setFirstLocation] = useState('')
    const [secondLocation, setSecondLocation] = useState('')




    //handles onchange for date
    const handleInput = (event) =>{
        setFirstBday(event.target.value)
    }

    const handleInput2 = (event) =>{
        setSecondBday(event.target.value)
    }


    //handles onchange for time
    const handleTime = (event) =>{
        setFirstTime(event.target.value)
    }


    const handleSecondTime = (event) =>{
        setSecondTime(event.target.value)
    }


    //handles on change for location
    const handleLocation = (event) =>{
        setFirstLocation(event.target.value)
    }

    const handleSecondLocation = (event) =>{
        setSecondLocation(event.target.value)
    }




    //handles split dates
    let newDate = `${firstBday}`.split('-')
    //console.log("first friend", newDate)
    //returns year, month day

    let secondDate = `${secondBday}`.split('-')
    //console.log("second friend", secondDate)




    //handles split  time
    let newTime = `${firstTime}`.split(":")
    //console.log("first time", newTime)
    //returns "13", "00" instead of 1pm


    let friendTime = `${secondTime}`.split(":")
    //console.log("second time", friendTime)


    


    //returns exactly what we wrote in the input, if user writes boston, it returns boston.
    //console.log("this is the first location", firstLocation)
    //console.log("this is the second location", secondLocation)




    // p_day: `${newDate[2]}`,
    // p_month: `${newDate[1]}`,
    // p_year: `${newDate[0]}`,
    // p_hour: `{newTime[0]}`,
    // p_min: `{newTime[1]}`,
    // p_lat: '34.1808',
    // p_lon: '118.3090',
    // p_tzone: '5.5',
    // s_day: `{secondDate[2]}`,
    // s_month: `{secondDate[1]}`',
    // s_year: `{secondDate[0]}`,
    // s_hour: `{friendTime[0]}`,
    // s_min: {friendTime[1]}`,
    // s_lat: '34.1808',
    // s_lon: '118.3090',
    // s_tzone: '5.5',









    const badgeRadius = 4;
    const [friendship, setFriendship] = useState()
    const [location, setLocation] = useState()
    // useEffect(() => {
    //    grabComp()
    //    grabLocation()
    // }, []);

    const grabComp = () => {
        const dataToSend = {
            p_day: `${newDate[2]}`,
            p_month: `${newDate[1]}`,
            p_year: `${newDate[0]}`,
            p_hour: `${newTime[0]}`,
            p_min: `${newTime[1]}`,
            p_lat: '34.1808',
            p_lon: '118.3090',
            p_tzone: '5.5',
            s_day: `${secondDate[2]}`,
            s_month: `${secondDate[1]}`,
            s_year: `${secondDate[0]}`,
            s_hour: `${friendTime[0]}`,
            s_min: `${friendTime[1]}`,
            s_lat: '34.1808',
            s_lon: '118.3090',
            s_tzone: '5.5',
        }

        console.log('dataTosend', dataToSend)

        // let userId = "615745";
        // let apiKey = "758b876f8345a5b798e2f02e38e7c7ab";
        // const friendData = axios
        // .post("https://json.astrologyapi.com/v1/friendship_report/tropical",,
        //   {headers: {
        //     "authorization": "Basic " + btoa(userId+":"+apiKey),
        //     "Content-Type":'application/json'
        //     }})
        //   .then((friendData) => {
        //       console.log('FRIEND DATA', friendData.data)
        //       setFriendship(friendData.data)
        //   })
           
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
              console.log('GET DATA', geoData.data)
              setLocation(geoData.data)
          })
           
    }

    const handleSubmit = (e) => {
        console.log('HELLLOOOOOOO')
        console.log('target', e.target)
        //would need to call grabComp in here

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
                    id="pbirthday"
                    type="date"
                    name="pbirthday"
                    value={firstBday}
                    placeholder="Enter Birth Date"
                    onChange={handleInput}
                    />
                </InputGroup>
                </FormControl>


                <FormControl isRequired>
                <InputGroup>
                    <InputLeftElement>
                    <Icon as={MdAccessTime} />
                    </InputLeftElement>
                    <Input
                    id="ptime"
                    type="time"
                    name="ptime"
                    value={firstTime}
                    onChange ={handleTime}
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
                    id="plocation"
                    type="text"
                    name="plocation"
                    value={firstLocation}
                    onChange = {handleLocation}
                    placeholder="Enter Birth Place"
                    />
                </InputGroup>
                </FormControl>

            </VStack>
            </form>
        
               </GridItem>

               <GridItem colStart={2} rowSpan={2}>
               
       
       {/* <form> */}
       <form onSubmit={handleSubmit}>
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
               id="sbirthday"
               type="date"
               name="sbirthday"
               value={secondBday}
               onChange={handleInput2}
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
               id="stime"
               type="time"
               name="stime"
               value={secondTime}
               onChange={handleSecondTime}
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
               id="slocation"
               type="text"
               name="slocation"
               value={secondLocation}
               onChange = {handleSecondLocation}
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