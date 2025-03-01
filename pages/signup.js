import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { useCurrentUser } from '../hooks/index.js';
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon, StarIcon } from '@chakra-ui/icons'
import {FaGlobeAmericas } from "react-icons/fa";
// import { IconName } from "react-icons/fc"
import { MdCake, MdAccessTime } from "react-icons/md";
import { Icon, colorMode } from "@chakra-ui/react"
import {
  Box,
  Button,
  useColorMode,
  Divider,
  Flex,
  FormControl,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Image,
  Center
} from "@chakra-ui/react";
import Geocode from 'react-geocode';


const SignupPage = () => {
  const [user, { mutate }] = useCurrentUser();
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) Router.replace('/');
  }, [user]);

  async function getLatLon(place) {
    console.log('the location', place);
    Geocode.setApiKey("AIzaSyCN1OPqkR7QGFRbnbcQKFoqCIei84_dGSY");
    Geocode.setLanguage("en");
    Geocode.setRegion("us"); //optional
    Geocode.setLocationType("APPROXIMATE");
    try {
      const response = await Geocode.fromAddress(place);
      //console.log('the response', response);
      const { lat, lng } =  await response.results[0].geometry.location;
      console.log(lat, lng)
      return [lat, lng];

    }
    catch(err) {
      return console.log('error', err);
    }
   

  }
  // const getLatLon = (place) => {
  //   console.log('the location', place);
  //   Geocode.setApiKey("AIzaSyCN1OPqkR7QGFRbnbcQKFoqCIei84_dGSY");
  //   Geocode.setLanguage("en");
  //   Geocode.setRegion("us"); //optional
  //   Geocode.setLocationType("APPROXIMATE");
  //   Geocode.fromAddress(place)
  //   .then((response) => {
  //       const { lat, lng } =  response.results[0].geometry.location;
  //       console.log(lat, lng);
  //       setLatLon([lat, lng]);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }


  const handleSubmit = async (e) => {
    e.preventDefault();
    let name = e.currentTarget.name.value;
    let email = e.currentTarget.email.value;
    let password = e.currentTarget.password.value;

    //split up birthday into day/month/year
    //split up time into hour/min
    //split location lat lon

    //take a date and split it into day/month/year
    let date = e.currentTarget.birthday.value.split('-');
   

    //take a time and split it into hour/min
    let time = e.currentTarget.time.value.split(':');
    let latLon = await getLatLon(e.currentTarget.location.value);

    const userInfo = {
      name: name,
      email: email,
      password: password,
      day: date[2],
      month: date[1],
      year: date[0],
      hour: time[0],
      minute: time[1],
      lat: latLon[0],
      lon: latLon[1],
    };

    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo),
    });
   
    if (res.status === 201) {
      const userObj = await res.json();
      mutate(userObj);
    } else {
      setErrorMsg(await res.text());
    }
  };

  function handleToggle(e) {
    e.preventDefault();
    setShowPass(!showPass);
  }

  const bgColor = {
    light: "rgba(70, 93, 114, 0.9)",
    dark: "rgba(74, 85, 104, 0.9)",
  };

  const textColor = { light: "blue.200", dark: "yellow.500" };
  const { colorMode, toggleColorMode } = useColorMode();

  const [showPass, setShowPass] = useState(false);
  const badgeRadius = 4;

  return (
    <Box>
      <Box zIndex="-1" bgColor={bgColor[colorMode]}  bgPosition="center" bgSize="cover" minH="100%" minW="32vw" w="100vw" h="auto" position="fixed" overflowX="scroll" top="0" right="0" bgImage="url('./loginwp.png')" /> 
      <Box
      paddingTop={0}
      display="flex"
      position="absolute"
      left={0}
      right={0}
      top="50vh"
      bottom={0}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      >
      <Flex
        mt={20}
        alignItems="center"
        justifyContent="center"
        bgColor="gray.400"
        color={textColor[colorMode]}
        border="4px solid rgba(212, 175, 53, 0.9)"
        borderRadius="50%"
        mb={`-${badgeRadius}em`}
        shadow="sm"
        zIndex="docked"
      >
        <Image
          src="./icon.png"
          height="18vh"  
          width="10vw"
          size={`${badgeRadius + 1}em`}
          mt={`${badgeRadius / 6}em`}
        />
      </Flex>
<Center>
<Box
  w="32vw"
  p={4}
  pt="24"
  bgColor={bgColor[colorMode]}
  color={textColor[colorMode]}
  borderRadius="16px"
  border="4px solid rgba(212, 175, 53, 0.9)"
  shadow="dark-lg"
>
  <Stack spacing={3}>
    <Heading
      as="h1"
      textAlign="center"
      textTransform="uppercase"
      letterSpacing={2}
    >
      House Of 12
    </Heading>
    <Heading
      as="h2"
      color="gray.300"
      fontSize="lg"
      textAlign="center"
    >
      Sign Up
    </Heading>

    <form onSubmit={handleSubmit}>
    {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
      <Stack spacing={4}>
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
              <EmailIcon />
            </InputLeftElement>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Enter Email Address"
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

        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement>
              <LockIcon />
            </InputLeftElement>
            <Input
              id="pass"
              name="password"
              type={showPass ? "text" : "password"}
              placeholder="Password"
            />
            <InputRightElement>
              <IconButton
                icon={showPass ? <ViewOffIcon/> : <ViewIcon />}
                variant="ghost"
                size="sm"
                onClick={handleToggle}
                title={`${showPass ? "Hide" : "Show"} Password`}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Divider />
        <Button variantColor="blue" type="submit" shadow="md">
          Register
        </Button>
      </Stack>
    </form>
  </Stack>
</Box>

</Center>
</Box>
</Box>


  );
};
export default SignupPage;


