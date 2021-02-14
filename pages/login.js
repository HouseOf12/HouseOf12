import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCurrentUser } from '../hooks/index.js';
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
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

const LoginPage = () => {
  const [showPass, setShowPass] = useState(false);
  const badgeRadius = 4;
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState('');
  const [user, { mutate }] = useCurrentUser();

  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) router.push('/');
  }, [user]);

  async function onSubmit(e) {
    e.preventDefault();
    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      const userObj = await res.json();
      mutate(userObj);
    } else {
      setErrorMsg('Incorrect username or password. Try again!');
    }
  }

  function handleToggle(e) {
    e.preventDefault();
    setShowPass(!showPass);
  }

  
  

  return (
    
    <Box
          display="flex"
          position="absolute"
          left={0}
          right={0}
          top={96}
          bottom={0}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
           <Flex
            alignItems="center"
            justifyContent="center"
            color="gray.200"
            bg="gray.800"
            // size="sm"
            // size={`${badgeRadius * 2}em`}
            borderRadius="50%"
            mb={`-${badgeRadius}em`}
            shadow="sm"
            zIndex="docked"
          >
            <Image
              src="./icon.png"
              height="20vh"  
              width="13vw"
              size={`${badgeRadius + 1}em`}
              mt={`${badgeRadius / 6}em`}
            />
          </Flex>
          <Box
            w="sm"
            p={4}
            pt="24"
            color="gray.100"
            bg="gray.700"
            borderRadius="md"
            shadow="lg"
          >
            <Stack spacing={4}>
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
                Here To Guide You
              </Heading>
              <form onSubmit={onSubmit}>
              {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
                <Stack spacing={4}>
                  <FormControl isRequired>
                    <InputGroup>
                      <InputLeftElement>
                        <EmailIcon />
                      </InputLeftElement>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
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
                    Login
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
    </Box>
    
  );
};
export default LoginPage;

