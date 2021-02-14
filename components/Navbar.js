import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useCurrentUser } from '../hooks/index.js';
import { Box, HStack, useColorMode, Center } from '@chakra-ui/react';

const Navbar = () => {
  const [user, { mutate }] = useCurrentUser();
  const handleLogout = async () => {
    await fetch('/api/auth', {
      method: 'DELETE',
    });
    mutate(null);
  };

  const bgColor = {
    light: "rgba(204, 214, 224, 0.63)",
    dark: "rgba(74, 85, 104, 0.7)",
  };
  const textColor = { light: "black", dark: "gray.100" };
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    
      <Box>
        <HStack 
        h="24"
        w="100%"
        position="fixed"
        color={textColor[colorMode]}
        bgColor={bgColor[colorMode]}
        spacing="24"
        position="fixed">
            
                
          <Box>
          <Link href="/">
            <a>
              <h1>House Of 12 </h1>
            </a>
          </Link>
          </Box>
          

           <Box display="flex" justifyContent="flex-end">
          
            {!user ? (
              <Box border="2px solid red">
              
                <Link href="/login">
                  <a>Sign in  &nbsp;&nbsp;</a>
                </Link>
                
                
                <Link href="/signup">
                  <a>Sign up</a>
                </Link>
              
              </Box>
              
            ) : (
                <Box border="2px solid red" marginLeft="30%">
               
                <Link  href={`/user/${user._id}`}>
                  <a>Profile &nbsp;&nbsp;</a> 
                </Link>
                
                <a tabIndex={0} role="button" onClick={handleLogout}>
                  Logout
                </a>
               
              </Box>
              
            )}
            </Box>
          </HStack>
          </Box>
         
      

      
      
    
  );
};

export default Navbar
