import { useState } from "react";
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

  //function that calls the api for a specific sign
  const grabSignInfo = async (sign) => {
    let userId = "615745";
    let apiKey = "758b876f8345a5b798e2f02e38e7c7ab";
    console.log("chosen sign", sign);
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
  const textColor = { light: "cyan.900", dark: "gray.300" };
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider theme={theme}>
      <Fonts />(
      {!showSign ? (
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
        >
          <Box as="h1" fontFamily="Philosopheri" color={textColor[colorMode]}>
            WELCOME TO HOUSE OF 12
          </Box>

          <Box as="h3" fontFamily="Philosopheri" color={textColor[colorMode]}>
            Select Your Sign
          </Box>
          <Grid
            templateColumns="repeat(4, 1fr)"
            templateRows="repeat(4, 1fr)"
            columnGap={10}
            rowGap={10}
          >
            <GridItem
              onClick={() => grabSignInfo("capricorn")}
              _hover={{ bgGradient: "linear(to-r, #341552, #cc6efa)" }}
              color={textColor[colorMode]}
              justifySelf="center"
              fontSize=".9vw"
              alignSelf="center"
              fontFamily="Philosopheri"
            >
              <Box h="8vh" justifyContent="center" display="flex">
                <Image
                  height="8vh"
                  width="6vw"
                  src="https://media0.giphy.com/media/hoscKFF0l3EocRthTp/giphy_s.gif?cid=ecf05e47q5obm6jnp0uumr4k1qgaeyyaucic8ima5ikgq5g1&rid=giphy_s.gif"
                />
              </Box>
              CAPRICORN
              <br />
              DEC 22 - JAN 19
            </GridItem>

            <GridItem
              onClick={() => grabSignInfo("aquarius")}
              _hover={{ bgGradient: "linear(to-r, #341552, #cc6efa)" }}
              color={textColor[colorMode]}
              justifySelf="center"
              fontSize=".9vw"
              alignSelf="center"
              fontFamily="Philosopheri"
            >
              <Box h="8vh" justifyContent="center" display="flex">
                <Image
                  height="8vh"
                  width="6vw"
                  src="https://media4.giphy.com/media/KyMfh5JDoaUXx7UXPH/giphy_s.gif?cid=ecf05e47287xlijg3afx4xx4nxsd4gy7tsv6t0k4gshggb7c&rid=giphy_s.gif"
                />
              </Box>
              AQUARIUS
              <br />
              JAN 20 - FEB 18
            </GridItem>

            <GridItem
              onClick={() => grabSignInfo("pisces")}
              _hover={{ bgGradient: "linear(to-r, #341552, #cc6efa)" }}
              color={textColor[colorMode]}
              justifySelf="center"
              fontSize=".9vw"
              alignSelf="center"
              fontFamily="Philosopheri"
            >
              <Box h="8vh" justifyContent="center" display="flex">
                <Image
                  height="8vh"
                  width="6vw"
                  src="https://media1.giphy.com/media/XBu4BCgRdJ1N2nT3gl/giphy_s.gif?cid=ecf05e47q5obm6jnp0uumr4k1qgaeyyaucic8ima5ikgq5g1&rid=giphy_s.gif"
                />
              </Box>
              PISCES
              <br />
              FEB 19 - MAR 20
            </GridItem>

            <GridItem
              onClick={() => grabSignInfo("aries")}
              _hover={{ bgGradient: "linear(to-r, #341552, #cc6efa)" }}
              color={textColor[colorMode]}
              justifySelf="center"
              fontSize=".9vw"
              alignSelf="center"
              fontFamily="Philosopheri"
            >
              <Box h="8vh" justifyContent="center" display="flex">
                <Image
                  height="8vh"
                  width="6vw"
                  src="https://i.postimg.cc/rsm8cFSH/imageedit-10-8599861508.png"
                />
              </Box>
              ARIES
              <br />
              MAR 21 - APR 19
            </GridItem>

            <GridItem
              onClick={() => grabSignInfo("taurus")}
              _hover={{ bgGradient: "linear(to-r, #341552, #cc6efa)" }}
              color={textColor[colorMode]}
              justifySelf="center"
              fontSize=".9vw"
              alignSelf="center"
              fontFamily="Philosopheri"
            >
              <Box h="8vh" justifyContent="center" display="flex">
                <Image
                  height="8vh"
                  width="6vw"
                  src="https://media1.giphy.com/media/Z8kClJ0d5sLMBRy4r4/giphy_s.gif?cid=ecf05e47q5obm6jnp0uumr4k1qgaeyyaucic8ima5ikgq5g1&rid=giphy_s.gif"
                />
              </Box>
              TAURUS
              <br />
              APR 20 - MAY 20
            </GridItem>

            <GridItem
              onClick={() => grabSignInfo("gemini")}
              _hover={{ bgGradient: "linear(to-r, #341552, #cc6efa)" }}
              color={textColor[colorMode]}
              justifySelf="center"
              fontSize=".9vw"
              alignSelf="center"
              fontFamily="Philosopheri"
            >
              <Box h="8vh" justifyContent="center" display="flex">
                <Image
                  height="8vh"
                  width="6vw"
                  src="https://media4.giphy.com/media/dWxId93WQs0LXLNPY0/giphy_s.gif?cid=ecf05e47b22sskxvfu4rinqkhzl8qylxjisz4metpthhj9ti&rid=giphy_s.gif"
                />
              </Box>
              GEMINI
              <br />
              MAY 21 - JUN 20
            </GridItem>

            <GridItem
              onClick={() => grabSignInfo("cancer")}
              _hover={{ bgGradient: "linear(to-r, #341552, #cc6efa)" }}
              color={textColor[colorMode]}
              justifySelf="center"
              fontSize=".9vw"
              alignSelf="center"
              fontFamily="Philosopheri"
            >
              <Box h="8vh" justifyContent="center" display="flex">
                <Image
                  height="8vh"
                  width="6vw"
                  src="https://media2.giphy.com/media/KZHX2cjQKUvhJiqcpo/giphy_s.gif?cid=ecf05e47q5obm6jnp0uumr4k1qgaeyyaucic8ima5ikgq5g1&rid=giphy_s.gif"
                />
              </Box>
              CANCER
              <br />
              JUN 21 - JUL 22
            </GridItem>

            <GridItem
              onClick={() => grabSignInfo("leo")}
              _hover={{ bgGradient: "linear(to-r, #341552, #cc6efa)" }}
              color={textColor[colorMode]}
              justifySelf="center"
              fontSize=".9vw"
              alignSelf="center"
              fontFamily="Philosopheri"
            >
              <Box h="8vh" justifyContent="center" display="flex">
                <Image
                  height="8vh"
                  width="6vw"
                  src="https://media4.giphy.com/media/JR18H1UVYlcozSxMI2/giphy_s.gif?cid=ecf05e47q5obm6jnp0uumr4k1qgaeyyaucic8ima5ikgq5g1&rid=giphy_s.gif"
                />
              </Box>
              LEO
              <br />
              JUL 23 - AUG 22
            </GridItem>

            <GridItem
              onClick={() => grabSignInfo("virgo")}
              _hover={{ bgGradient: "linear(to-r, #341552, #cc6efa)" }}
              color={textColor[colorMode]}
              justifySelf="center"
              fontSize=".9vw"
              alignSelf="center"
              fontFamily="Philosopheri"
            >
              <Box h="8vh" justifyContent="center" display="flex">
                <Image
                  height="8vh"
                  width="6vw"
                  src="https://media3.giphy.com/media/SvRI3ZCoPe59T86oCe/giphy_s.gif?cid=ecf05e47q5obm6jnp0uumr4k1qgaeyyaucic8ima5ikgq5g1&rid=giphy_s.gif"
                />
              </Box>
              VIRGO
              <br />
              AUG 23 - SEP 22
            </GridItem>

            <GridItem
              onClick={() => grabSignInfo("libra")}
              _hover={{ bgGradient: "linear(to-r, #341552, #cc6efa)" }}
              color={textColor[colorMode]}
              justifySelf="center"
              fontSize=".9vw"
              alignSelf="center"
              fontFamily="Philosopheri"
            >
              <Box h="8vh" justifyContent="center" display="flex">
                <Image
                  height="8vh"
                  width="6vw"
                  src="https://media2.giphy.com/media/J67TmcGpsWe5MfalB0/giphy_s.gif?cid=ecf05e47epry4pkjcmsu8s5gcgrzg7w2jopojmedrdpwcg50&rid=giphy_s.gif"
                />
              </Box>
              LIBRA
              <br />
              SEP 23 - OCT 22
            </GridItem>
            <GridItem
              onClick={() => grabSignInfo("scorpio")}
              _hover={{ bgGradient: "linear(to-r, #341552, #cc6efa)" }}
              color={textColor[colorMode]}
              justifySelf="center"
              fontSize=".9vw"
              alignSelf="center"
              fontFamily="Philosopheri"
            >
              <Box h="8vh" justifyContent="center" display="flex">
                <Image
                  height="8vh"
                  width="6vw"
                  src="https://i.postimg.cc/bwTCPvs8/imageedit-7-9238374879.png"
                />
              </Box>
              SCORPIO
              <br />
              OCT 23 - NOV 21
            </GridItem>

            <GridItem
              onClick={() => grabSignInfo("sagittarius")}
              _hover={{ bgGradient: "linear(to-r, #341552, #cc6efa)" }}
              color={textColor[colorMode]}
              justifySelf="center"
              fontSize=".9vw"
              alignSelf="center"
              fontFamily="Philosopheri"
            >
              <Box h="8vh" justifyContent="center" display="flex">
                <Image
                  height="8vh"
                  width="6vw"
                  height="8vh"
                  width="6vw"
                  src="https://i.postimg.cc/DwV5LXb7/imageedit-3-6789989848.png"
                />
              </Box>
              SAGITTARIUS
              <br />
              NOV 22 - DEC 21
            </GridItem>
          </Grid>

          {/* <Box fontFamily="caslongrad,serif">
            <h1 > HOROSCOPES </h1>
      </Box>  */}
        </Box>
      ) : (
        <Horoscope
          sign={signInfo.sign}
          info={signInfo.info}
          date={signInfo.date}
          setShowSign={setShowSign}
        />
      )}
      )
    </ChakraProvider>
  );
};
export default HoroscopePics;