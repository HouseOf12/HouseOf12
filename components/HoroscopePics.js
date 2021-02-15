import { Grid, GridItem, Image, Box, Button, ButtonGroup, extendTheme, ChakraProvider, useColorMode, colorMode  } from "@chakra-ui/react";
import {Fonts} from "./Fonts"


const HoroscopePics = () => {
  const theme = extendTheme({
    fonts: {
      h1: "Tryst-Regular",
      h3: "Tryst-Regular",
      body: "Tryst-Regular",
    },
  })

  const bgColor = {
    light: "rgba(140, 145, 151, 0.7)",
    dark: "rgba(74, 85, 104, 0.9)",
  };
  const textColor = { light: "yellow.500", dark: "gray.300" };
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider>
      <Fonts />
      <Box border="2px solid rgba(212, 175, 53, 0.5)" width="75%" height="60vh" marginLeft="13%" mt="4vh" justifyContent="center" alignContent="center" alignItems="center" textAlign="center" borderRadius="15px"> 
        <Box as="h1" fontFamily="Tryst-Regular" color={textColor[colorMode]} >
           WELCOME TO HOUSE OF 12 
      </Box>
      <Box as="h3" fontFamily="Tryst-Regular" color={textColor[colorMode]} >
      
                     Select Your Sign 
      </Box>
      <Grid
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(4, 1fr)"
        columnGap={10}
        rowGap ={10}
      >
        <GridItem  _hover={{bgGradient:"linear(to-r, #341552, #cc6efa)"}} color={textColor[colorMode]} justifySelf="center" fontSize=".9vw" alignSelf="center" fontFamily="khand,sans-serif">
          <Box h="8vh" justifyContent="center" display="flex">
            <Image height="8vh"  width="6vw"  src="https://media0.giphy.com/media/hoscKFF0l3EocRthTp/giphy_s.gif?cid=ecf05e47q5obm6jnp0uumr4k1qgaeyyaucic8ima5ikgq5g1&rid=giphy_s.gif" />
          </Box>
          {/* <Button variant="outline" colorScheme="teal" size="sm"> Button</Button> */}
          CAPRICORN
          <br/>
          DEC 22 - JAN 19
        </GridItem>
        <GridItem _hover={{bgGradient:"linear(to-r, #341552, #cc6efa)"}} color={textColor[colorMode]} justifySelf="center" fontSize=".9vw" alignSelf="center" fontFamily="khand,sans-serif">
          <Box h="8vh" justifyContent="center" display="flex">
            <Image height="8vh"  width="6vw" src="https://media4.giphy.com/media/KyMfh5JDoaUXx7UXPH/giphy_s.gif?cid=ecf05e47287xlijg3afx4xx4nxsd4gy7tsv6t0k4gshggb7c&rid=giphy_s.gif" />
          </Box>
          {/* <Button variant="outline" colorScheme="teal" size="sm"> Button</Button> */}
          AQUARIUS
          <br/>
          JAN 20 - FEB 18
        </GridItem>
        <GridItem _hover={{bgGradient:"linear(to-r, #341552, #cc6efa)"}} color={textColor[colorMode]} justifySelf="center" fontSize=".9vw" alignSelf="center" fontFamily="khand,sans-serif">
          <Box h="8vh" justifyContent="center" display="flex">
            <Image hheight="8vh"  width="6vw" src="https://media1.giphy.com/media/XBu4BCgRdJ1N2nT3gl/giphy_s.gif?cid=ecf05e47q5obm6jnp0uumr4k1qgaeyyaucic8ima5ikgq5g1&rid=giphy_s.gif"/>
          </Box>
          {/* <Button variant="outline" colorScheme="teal" size="sm"> Button</Button> */}
          PISCES
          <br/>
        FEB 19 - MAR 20
        </GridItem>
        <GridItem _hover={{bgGradient:"linear(to-r, #341552, #cc6efa)"}} color={textColor[colorMode]} justifySelf="center" fontSize=".9vw" alignSelf="center" fontFamily="khand,sans-serif">
          <Box h="8vh" justifyContent="center" display="flex">
            <Image height="8vh"  width="6vw" src="https://i.postimg.cc/rsm8cFSH/imageedit-10-8599861508.png" />
          </Box>
          {/* <Button variant="outline" colorScheme="teal" size="sm"> Button</Button> */}
          ARIES
          <br/>
          MAR 21 - APR 19
        </GridItem>
        <GridItem _hover={{bgGradient:"linear(to-r, #341552, #cc6efa)"}}  color={textColor[colorMode]} justifySelf="center" fontSize=".9vw" alignSelf="center" fontFamily="khand,sans-serif">
          <Box h="8vh" justifyContent="center" display="flex">
            <Image height="8vh"  width="6vw" src="https://media1.giphy.com/media/Z8kClJ0d5sLMBRy4r4/giphy_s.gif?cid=ecf05e47q5obm6jnp0uumr4k1qgaeyyaucic8ima5ikgq5g1&rid=giphy_s.gif" />
          </Box>
          {/* <Button  colorScheme="teal" size="sm"> Button </Button> */}
          TAURUS
          <br/>
          APR 20 - MAY 20
        </GridItem>
        <GridItem _hover={{ bgGradient:"linear(to-r, #341552, #cc6efa)"}} color={textColor[colorMode]} justifySelf="center" fontSize=".9vw" alignSelf="center"  fontFamily="khand,sans-serif">
          <Box h="8vh" justifyContent="center" display="flex">
            <Image height="8vh"  width="6vw" src="https://media4.giphy.com/media/dWxId93WQs0LXLNPY0/giphy_s.gif?cid=ecf05e47b22sskxvfu4rinqkhzl8qylxjisz4metpthhj9ti&rid=giphy_s.gif" />
          </Box>
          GEMINI
          <br/>
          MAY 21 - JUN 20
          {/* <Button colorScheme="teal" size="sm"> Button </Button> */}
        </GridItem>
        <GridItem _hover={{bgGradient:"linear(to-r, #341552, #cc6efa)"}} color={textColor[colorMode]} justifySelf="center" fontSize=".9vw" alignSelf="center"  fontFamily="khand,sans-serif">
          <Box h="8vh" justifyContent="center" display="flex">
            <Image height="8vh"  width="6vw" src="https://media2.giphy.com/media/KZHX2cjQKUvhJiqcpo/giphy_s.gif?cid=ecf05e47q5obm6jnp0uumr4k1qgaeyyaucic8ima5ikgq5g1&rid=giphy_s.gif" />
          </Box>
          {/* <Button colorScheme="teal" size="sm"> Button </Button> */}
          CANCER
          <br/>
          JUN 21 - JUL 22
        </GridItem>
        <GridItem _hover={{ bgGradient:"linear(to-r, #341552, #cc6efa)"}} color={textColor[colorMode]} justifySelf="center" fontSize=".9vw" alignSelf="center" fontFamily="khand,sans-serif">
          <Box h="8vh" justifyContent="center" display="flex">
            <Image height="8vh"  width="6vw" src="https://media4.giphy.com/media/JR18H1UVYlcozSxMI2/giphy_s.gif?cid=ecf05e47q5obm6jnp0uumr4k1qgaeyyaucic8ima5ikgq5g1&rid=giphy_s.gif" />
          </Box>
          {/* <Button colorScheme="teal" size="sm"> Button </Button> */}
          LEO
          <br/>
          JUL 23 - AUG 22
        </GridItem>
        <GridItem _hover={{bgGradient:"linear(to-r, #341552, #cc6efa)"}} color={textColor[colorMode]} justifySelf="center" fontSize=".9vw" alignSelf="center"  fontFamily="khand,sans-serif">
          <Box h="8vh" justifyContent="center" display="flex">
            <Image height="8vh"  width="6vw" src="https://media3.giphy.com/media/SvRI3ZCoPe59T86oCe/giphy_s.gif?cid=ecf05e47q5obm6jnp0uumr4k1qgaeyyaucic8ima5ikgq5g1&rid=giphy_s.gif" />
          </Box>
          {/* <Button colorScheme="teal" size="sm"> Button </Button> */}
          VIRGO
          <br/>
          AUG 23 - SEP 22
        </GridItem>
        <GridItem _hover={{ bgGradient:"linear(to-r, #341552, #cc6efa)"}} color={textColor[colorMode]} justifySelf="center" fontSize=".9vw" alignSelf="center"  fontFamily="khand,sans-serif">
          <Box h="8vh" justifyContent="center" display="flex">
            <Image height="8vh"  width="6vw" src="https://media2.giphy.com/media/J67TmcGpsWe5MfalB0/giphy_s.gif?cid=ecf05e47epry4pkjcmsu8s5gcgrzg7w2jopojmedrdpwcg50&rid=giphy_s.gif" />
          </Box>
          {/* <Button colorScheme="teal" size="sm"> Button </Button> */}
          LIBRA
          <br/>
          SEP 23 - OCT 22
        </GridItem>
        <GridItem _hover={{ bgGradient:"linear(to-r, #341552, #cc6efa)" }} color={textColor[colorMode]} justifySelf="center" fontSize=".9vw" alignSelf="center"  fontFamily="khand,sans-serif">
          <Box h="8vh" justifyContent="center" display="flex">
            <Image height="8vh"  width="6vw" src="https://i.postimg.cc/bwTCPvs8/imageedit-7-9238374879.png" />
          </Box>
          {/* <Button colorScheme="teal" size="sm"> Button </Button> */}
          SCORPIO
          <br/>
          OCT 23 - NOV 21
        </GridItem>
        <GridItem _hover={{ bgGradient:"linear(to-r, #341552, #cc6efa)"}} color={textColor[colorMode]} justifySelf="center" fontSize=".9vw" alignSelf="center"  fontFamily="khand,sans-serif">
          <Box h="8vh" justifyContent="center" display="flex">
            <Image height="8vh"  width="6vw"height="8vh"  width="6vw" src="https://i.postimg.cc/DwV5LXb7/imageedit-3-6789989848.png" />
          </Box>
          {/* <Button colorScheme="teal" size="sm"> Button </Button> */}
          SAGITTARIUS
          <br/>
          NOV 22 - DEC 21
        </GridItem>
      </Grid>

      {/* <Box fontFamily="caslongrad,serif">
            <h1 > HOROSCOPES </h1>
      </Box>  */}
      </Box>
      </ChakraProvider>
      
  );
}
export default HoroscopePics
