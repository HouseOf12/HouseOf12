import React from 'react';
import Link from 'next/link';
import { useCurrentUser } from '../hooks/index.js';
import { Box, HStack, useColorMode, Center, Flex, Heading, Text, IconButton, Image, Icon, Button } from '@chakra-ui/react';
import {MoonIcon, SunIcon } from '@chakra-ui/icons'
import { TiThMenuOutline } from "react-icons/ti";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react"

const Navbar = () => {
  const [user, { mutate }] = useCurrentUser();
  const handleLogout = async () => {
    await fetch('/api/auth', {
      method: 'DELETE',
    });
    mutate(null);
  };

  const bgColor = {
    light: "rgba(140, 145, 151, 0.7)",
    dark: "rgba(74, 85, 104, 0.9)",
  };
  const textColor = { light: "blue.400", dark: "gray.100" };
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
      padding=".5rem"
      zIndex="1"
      color={textColor[colorMode]}
      bgColor={bgColor[colorMode]}
      bgImage="url(./navib.png)"
      bgSize="140vh"

      position="sticky"
      // w="100%"
      // mb={26}
      
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
        <Link href="/">
          <Image w="18vw" h="15vh" borderRadius="16" mt="0" mb="-12" src="./logowshad.png" />
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
                 <MenuItems>
                <Link  href={`/user/${user._id}`}>
                    
                  <a>Profile</a> 
                  
                </Link>
                </MenuItems>
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

          {user && 
               <Box>
                <Menu>
                <MenuButton mr="1vw" as={Button} variant="ghost" >
                  <TiThMenuOutline />
                </MenuButton>
                <MenuList bgColor={bgColor[colorMode]}>
                  <Link href="/natalchart">
                  <MenuItem>Natal Info</MenuItem>
                  </Link>
                  <Link href="/journal">
                  <MenuItem>Dream Journal</MenuItem>
                  </Link>
                  <MenuItem>House Chart</MenuItem>
                  <Link href="/compatibility">
                  <MenuItem>Compatibility</MenuItem>
                  </Link>
                  <MenuItem>Horoscope</MenuItem>
                </MenuList>
              </Menu>
                
              </Box> }
              
              
         <IconButton
         mr="1vw"
						rounded="full"
						onClick={toggleColorMode}
						icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
					  >
						Change Color Mode
					  </IconButton>
    </Box>
    </Flex>
      
         
      

      
      
    
  );
};

export default Navbar



