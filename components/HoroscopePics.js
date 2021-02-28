import { useState } from "react";
import { motion } from "framer-motion"
import {
  Grid,
  GridItem,
  Image,
  Box,
  Button,
  ButtonGroup,
  extendTheme,
  ChakraProvider,
  useColorMode,
  colorMode,
} from "@chakra-ui/react";
import Fonts from "./Fonts";
import Link from "next/link";
import axios from "axios";
//component import
import Horoscope from "./Horoscope";




const HoroscopePics = () => {
  const [signInfo, setSignInfo] = useState({ sign: "", info: "", date: "" });
  const [showSign, setShowSign] = useState(false);
  const zodiacs = {
    capricorn: {
      name: "CAPRICORN",
      dates: "DEC 22 - JAN 19",
      img: "https://media0.giphy.com/media/hoscKFF0l3EocRthTp/giphy_s.gif?cid=ecf05e47q5obm6jnp0uumr4k1qgaeyyaucic8ima5ikgq5g1&rid=giphy_s.gif"
    },
    aquarius: {
      name: "AQUARIUS",
      dates: "JAN 20 - FEB 18",
      img: "https://media4.giphy.com/media/KyMfh5JDoaUXx7UXPH/giphy_s.gif?cid=ecf05e47287xlijg3afx4xx4nxsd4gy7tsv6t0k4gshggb7c&rid=giphy_s.gif"
    },
    pisces: {
      name: "PISCES",
      dates: "FEB 19 - MAR 20",
      img: "https://media1.giphy.com/media/XBu4BCgRdJ1N2nT3gl/giphy_s.gif?cid=ecf05e47q5obm6jnp0uumr4k1qgaeyyaucic8ima5ikgq5g1&rid=giphy_s.gif"
    },
    aries: {
      name: "ARIES",
      dates: "MAR 21 - APR 19",
      img: "https://i.postimg.cc/rsm8cFSH/imageedit-10-8599861508.png"
    },
    taurus: {
      name: "TAURUS",
      dates: "APR 20 - MAY 20",
      img: "https://media1.giphy.com/media/Z8kClJ0d5sLMBRy4r4/giphy_s.gif?cid=ecf05e47q5obm6jnp0uumr4k1qgaeyyaucic8ima5ikgq5g1&rid=giphy_s.gif"
    },
    gemini: {
      name: "GEMINI",
      dates: "MAY 21 - JUN 20",
      img: "https://media4.giphy.com/media/dWxId93WQs0LXLNPY0/giphy_s.gif?cid=ecf05e47b22sskxvfu4rinqkhzl8qylxjisz4metpthhj9ti&rid=giphy_s.gif"
    },
    cancer: {
      name: "CANCER",
      dates: "JUN 21 - JUL 22",
      img: "https://media2.giphy.com/media/KZHX2cjQKUvhJiqcpo/giphy_s.gif?cid=ecf05e47q5obm6jnp0uumr4k1qgaeyyaucic8ima5ikgq5g1&rid=giphy_s.gif"
    },
    leo: {
      name: "LEO",
      dates: "JUL 23 - AUG 22",
      img: "https://media4.giphy.com/media/JR18H1UVYlcozSxMI2/giphy_s.gif?cid=ecf05e47q5obm6jnp0uumr4k1qgaeyyaucic8ima5ikgq5g1&rid=giphy_s.gif"
    },
    virgo: {
      name: "VIRGO",
      dates: "AUG 23 - SEP 22",
      img: "https://media3.giphy.com/media/SvRI3ZCoPe59T86oCe/giphy_s.gif?cid=ecf05e47q5obm6jnp0uumr4k1qgaeyyaucic8ima5ikgq5g1&rid=giphy_s.gif"
    },
    libra: {
      name: "LIBRA",
      dates: "SEP 23 - OCT 22",
      img: "https://media2.giphy.com/media/J67TmcGpsWe5MfalB0/giphy_s.gif?cid=ecf05e47epry4pkjcmsu8s5gcgrzg7w2jopojmedrdpwcg50&rid=giphy_s.gif"
    },
    scorpio: {
      name: "SCORPIO",
      dates: "OCT 23 - NOV 21",
      img: "https://i.postimg.cc/bwTCPvs8/imageedit-7-9238374879.png"
    },
    sagittarius: {
      name: "SAGITTARIUS",
      dates: "NOV 22 - DEC 21",
      img: "https://i.postimg.cc/DwV5LXb7/imageedit-3-6789989848.png"
    },
  }

  //function that calls the api for a specific sign
  const grabSignInfo = async (sign) => {

    let userId = "615875";
    let apiKey = "5c21d3f71cfa8be2e7de0f3adc0ec33c";
    try {
      let res = await axios.post(
        `https://json.astrologyapi.com/v1/sun_sign_prediction/daily/` + sign,
        { timezone: "5.5" },
        {
          headers: {
            authorization: "Basic " + btoa(userId + ":" + apiKey),
            "Content-Type": "application/json",
          },
        }
      );
      let info = res.data.prediction;
      let date = res.data.prediction_date;
      setSignInfo({ sign, info, date });
      setShowSign(true);
    } catch (error) {
      return console.log("horoscope post call error:", error);
    }
  };

  //function that displays the grid items
  const displaySigns = () => {
    return Object.keys(zodiacs).map(sign => {
      let signData = zodiacs[sign];
      return (
        
      <GridItem onClick={() => grabSignInfo(sign)}  _hover={{borderRadius:"full", bgGradient:"linear(to-r, #022a41, #30639d)"}} justifySelf="center" fontSize=".9vw" alignSelf="center" fontFamily="Philosopheri">
        <Box h="8vh" justifyContent="center" display="flex">
        <motion.div whileHover={{ 
<<<<<<< HEAD
          scale: 1.5 ,
=======
          scale: 1.2 ,
>>>>>>> 716f922c5622acf420a76932455d84107ccbc9a5
          rotate: [0, 0, 30, 30, 0],
          }} >
          <Image height="8vh" src={signData.img} />
          </motion.div>
        </Box>
        {signData.name}
        <br/>
        {signData.dates}
      </GridItem> 
      ) 
    })

  }

  const theme = extendTheme({
    fonts: {
      heading: "Philosopheri",
      body: "Philosopher",
    },
  });

  const bgColor = {
    light: "rgba(140, 145, 151, 0.7)",
    dark: "rgba(0, 0, 10, 0.9)",
  };

  //const textColor = { light: "cyan.900", dark: "gray.300" };
  //const textColor = { light: "gray.300", dark: "cyan.900" };
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider theme={theme} >
      <Fonts />
      ({!showSign ?  
      <Box 
      border="2px solid rgba(212, 175, 53, 0.5)" 
      width="75%" 
      height="60vh" 
      marginLeft="13%" 
      mt="4vh"
      justifyContent="center" 
      alignContent="center"
      alignItems="center" 
      textAlign="center" 
      borderRadius="15px" 
      //color={textColor[colorMode]}
      > 
        <Box 
          as="h1" 
          fontFamily="Philosopheri" 
          //color={textColor[colorMode]} 
        >
        WELCOME TO HOUSE OF 12 
        </Box>

        <Box as="h3" fontFamily="Philosopheri" /*color={textColor[colorMode]}*/ >
        Select Your Sign 
        </Box>
        <Grid
          templateColumns="repeat(4, 1fr)"
          templateRows="repeat(4, 1fr)"
          columnGap={10}
          rowGap ={10}
        >
          {displaySigns()}
        </Grid>
      </Box>
      :
      <Horoscope sign = {signInfo.sign} info = {signInfo.info} date = {signInfo.date}  setShowSign={setShowSign}/>
      })
      </ChakraProvider> 
  );
};
export default HoroscopePics;