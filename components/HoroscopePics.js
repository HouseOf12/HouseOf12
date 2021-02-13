
import {Grid, GridItem, Image, Box} from '@chakra-ui/react'


export default function HoroscopePics({ children }) {
    
    
    return (
     
        <div>
                 <Grid templateColumns="repeat(4, 1fr)" templateRows="repeat(4, 1fr)" gap={6}>


           <GridItem>
            <Box boxSize="sm">
            <Image height='16vh' width="10vw" src="./capricorn.png" />
            </Box>
          </GridItem>

          <GridItem>
            <Box boxSize="sm">
            <Image height='16vh' width="10vw"  src="./aquarius.png" />
            </Box>
          </GridItem>

          <GridItem>
            <Box boxSize="sm">
            <Image height='16vh' width="10vw"  src="./pisces.png" />
            </Box>
          </GridItem>

          <GridItem>
            <Box boxSize="sm">
            <Image height='13vh' width="10vw"  src="./aries.png" />
            </Box>
          </GridItem>


          <GridItem>
            <Box boxSize="sm">
            <Image height='16vh' width="10vw"  src="./taurus.png" />
            </Box>
          </GridItem>

          <GridItem>
            <Box boxSize="sm">
            <Image height='13vh' width="10vw"  src="./gemini.png" />
            </Box>
          </GridItem>


          <GridItem>
            <Box boxSize="sm">
            <Image height='16vh' width="10vw"  src="./cancer.png" />
            </Box>
          </GridItem>


          <GridItem>
            <Box boxSize="sm">
            <Image height='16vh' width="10vw"  src="./leo.png" />
            </Box>
          </GridItem>


          <GridItem>
            <Box boxSize="sm">
            <Image height='16vh' width="10vw"  src="./virgo.png" />
            </Box>
          </GridItem>

          <GridItem>
            <Box boxSize="sm">
            <Image height='16vh' width="10vw"  src="./libra.png" />
            </Box>
          </GridItem>

          <GridItem>
            <Box boxSize="sm">
            <Image height='16vh' width="10vw"  src="./scorpio.png" />
            </Box>
          </GridItem>


          <GridItem>
            <Box boxSize="sm">
            <Image height='16vh' width="10vw"  src="./sagittarius.png" />
            </Box>
          </GridItem>
          </Grid>

        </div>
    );
  };