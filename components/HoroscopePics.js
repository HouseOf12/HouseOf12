import { Grid, GridItem, Image, Box, Button, ButtonGroup  } from "@chakra-ui/react";



const HoroscopePics = () => {
  return (
      <Box textAlign="center" _hover > 
            <Box fontFamily="caslongrad,serif">
                    <h1 > WELCOME TO HOUSE OF 12 </h1>
      </Box>

      <Box fontFamily="merriweather,serif">
                    <h3 > Select Your Sign </h3>
      </Box>


      <Grid
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(4, 1fr)"
        columnGap={10}
        rowGap ={10}
      >
        <GridItem  _hover={{ bg: "#553C9A", color:"white" }} justifySelf="center" fontSize=".9vw" alignSelf="center" border="2px solid black" fontFamily="khand,sans-serif">
          <Box boxSize="sm" >
            <Image height="16vh"  width="10vw" src="./capricorn.png" />
          </Box>
          {/* <Button variant="outline" colorScheme="teal" size="sm"> Button</Button> */}
          CAPRICORN
          <br/>
          DEC 22 - JAN 19
        </GridItem>

        <GridItem _hover={{ bg: "#553C9A", color:"white" }} justifySelf="center" fontSize=".9vw" alignSelf="center" border="2px solid black" fontFamily="khand,sans-serif">
          <Box boxSize="sm">
            <Image height="16vh"  width="10vw" src="./aquarius.png" />
          </Box>
          {/* <Button variant="outline" colorScheme="teal" size="sm"> Button</Button> */}
          AQUARIUS
          <br/>
          JAN 20 - FEB 18
        </GridItem>

        <GridItem _hover={{ bg: "#553C9A", color:"white" }} justifySelf="center" fontSize=".9vw" alignSelf="center" border="2px solid black" fontFamily="khand,sans-serif">
          <Box boxSize="sm">
            <Image height="16vh" width="10vw" src="./pisces.png" />
          </Box>
          {/* <Button variant="outline" colorScheme="teal" size="sm"> Button</Button> */}
          PISCES
          <br/>
        FEB 19 - MAR 20
        </GridItem>

        <GridItem _hover={{ bg: "#553C9A", color:"white" }} justifySelf="center" fontSize=".9vw" alignSelf="center" border="2px solid black" fontFamily="khand,sans-serif">
          <Box boxSize="sm">
            <Image height="16vh" width="10vw" src="./aries.png" />
          </Box>
          {/* <Button variant="outline" colorScheme="teal" size="sm"> Button</Button> */}
          ARIES
          <br/>
          MAR 21 - APR 19
        </GridItem>

        <GridItem _hover={{ bg: "#553C9A", color:"white" }} justifySelf="center" fontSize=".9vw" alignSelf="center" border="2px solid black" fontFamily="khand,sans-serif">
          <Box boxSize="sm">
            <Image height="16vh" width="10vw" src="./taurus.png" />
          </Box>
          {/* <Button  colorScheme="teal" size="sm"> Button </Button> */}
          TAURUS
          <br/>
          APR 20 - MAY 20
        </GridItem>

        <GridItem _hover={{ bg: "#553C9A", color:"white" }} justifySelf="center" fontSize=".9vw" alignSelf="center" border="2px solid black" fontFamily="khand,sans-serif">
          <Box boxSize="sm">
            <Image height="16vh" width="10vw" src="./gemini.png" />
          </Box>
          GEMINI
          <br/>
          MAY 21 - JUN 20
          {/* <Button colorScheme="teal" size="sm"> Button </Button> */}
        </GridItem>

        <GridItem _hover={{ bg: "#553C9A", color:"white" }} justifySelf="center" fontSize=".9vw" alignSelf="center" border="2px solid black" fontFamily="khand,sans-serif">
          <Box boxSize="sm">
            <Image height="16vh" width="10vw" src="./cancer.png" />
          </Box>
          {/* <Button colorScheme="teal" size="sm"> Button </Button> */}
          CANCER
          <br/>
          JUN 21 - JUL 22
        </GridItem>

        <GridItem _hover={{ bg: "#553C9A", color:"white" }} justifySelf="center" fontSize=".9vw" alignSelf="center" border="2px solid black" fontFamily="khand,sans-serif">
          <Box boxSize="sm">
            <Image height="16vh" width="10vw" src="./leo.png" />
          </Box>
          {/* <Button colorScheme="teal" size="sm"> Button </Button> */}
          LEO
          <br/>
          JUL 23 - AUG 22
        </GridItem>

        <GridItem _hover={{ bg: "#553C9A", color:"white" }} justifySelf="center" fontSize=".9vw" alignSelf="center" border="2px solid black" fontFamily="khand,sans-serif">
          <Box boxSize="sm">
            <Image height="16vh" width="10vw" src="./virgo.png" />
          </Box>
          {/* <Button colorScheme="teal" size="sm"> Button </Button> */}
          VIRGO
          <br/>
          AUG 23 - SEP 22
        </GridItem>

        <GridItem _hover={{ bg: "#553C9A", color:"white" }} justifySelf="center" fontSize=".9vw" alignSelf="center" border="2px solid black" fontFamily="khand,sans-serif">
          <Box boxSize="sm">
            <Image height="16vh" width="10vw" src="./libra.png" />
          </Box>
          {/* <Button colorScheme="teal" size="sm"> Button </Button> */}
          LIBRA
          <br/>
          SEP 23 - OCT 22
        </GridItem>

        <GridItem _hover={{ bg: "#553C9A", color:"white" }} justifySelf="center" fontSize=".9vw" alignSelf="center" border="2px solid black" fontFamily="khand,sans-serif">
          <Box boxSize="sm">
            <Image height="16vh" width="10vw" src="./scorpio.png" />
          </Box>
          {/* <Button colorScheme="teal" size="sm"> Button </Button> */}
          SCORPIO
          <br/>
          OCT 23 - NOV 21
        </GridItem>

        <GridItem _hover={{ bg: "#553C9A", color:"white" }} justifySelf="center" fontSize=".9vw" alignSelf="center" border="2px solid black" fontFamily="khand,sans-serif">
          <Box boxSize="sm">
            <Image height="16vh" width="10vw" src="./sagittarius.png" />
          </Box>
          {/* <Button colorScheme="teal" size="sm"> Button </Button> */}
          SAGITTARIUS
          <br/>
          NOV 22 - DEC 21
        </GridItem>
      </Grid>
      </Box>
  );
}


export default HoroscopePics
