import React from 'react';
import Link from 'next/link';
import { useCurrentUser } from '../hooks/index.js';
import { Box, HStack, useColorMode, Center, Flex, Heading, Text } from '@chakra-ui/react';

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

  const MenuItems = ({ children }) => (
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
      {children}
    </Text>
  );
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      color={textColor[colorMode]}
      bgColor={bgColor[colorMode]}
      
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
        <Link href="/">
            <a>
              House Of 12 
            </a>
          </Link>
        </Heading>
      </Flex>
    <Box
    display="flex"
    alignItems="center">
           {!user ? (
               <Box>
                
                   <MenuItems>
                   <Link href="/login">
                  <a>Sign in </a>
                  </Link>
                  </MenuItems> 
                
              </Box>
              
              
            ) : (
                
               <Box>
                <Link  href={`/user/${user._id}`}>
                    <MenuItems>
                  <a>Profile</a> 
                  </MenuItems>
                </Link>
                </Box>
              
              
            )}
        
           {!user ? (
               <Box>
                
                    <MenuItems>
                    <Link href="/signup">
                  <a>Sign up</a>
                  </Link>
                  </MenuItems>
                
              </Box>
              
              
            ) : (
                
               <Box>
                <MenuItems>
                <a tabIndex={0} role="button" onClick={handleLogout}>
                  Logout
                </a>
               </MenuItems>
                </Box>
                
              
              
            )}
        
    </Box>
    </Flex>
      
         
      

      
      
    
  );
};

export default Navbar



{/* <Box>
          
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
          </Box> */}
