import { useState } from "react";
import {
  Icon,
  Center,
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
import { VscEyeClosed } from "react-icons/vsc";




function Horoscope({ sign, info, date, setShowSign }) {

  const [showAttribute, setShowAtttribute] = useState(info.personal_life);



  return (
    <div>
      <Box
        border="2px solid rgba(212, 175, 53, 0.5)"
        width="75%"
        height="60vh"
        marginLeft="13%"
        mt="4vh"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        // textAlign="center"
        borderRadius="15px"
        color="white"
      >
        <Box fontSize="3vw" textAlign="center">
          {sign}
          <Button variant="ghost" onClick={() => setShowSign(false)}>
            {" "}
            <VscEyeClosed />{" "}
          </Button>
        </Box>
        <Box
          width="75%"
          marginLeft="10vw"
          justifyContent="center"
          alignContent="center"
          alignItems="center"
        >
          <p> {showAttribute}</p>
        </Box>
        <br />
        <Box height="35vh" justifyContent="center" display="flex">
          <Image
            height="35vh"
            width="20vw"
            src="https://media4.giphy.com/media/H1Z3fhvNIsSpOnWg7Y/giphy.gif?cid=ecf05e47vk9wovsdfnyw71xgz0hdaomlj8bsfk3mfkov772t&rid=giphy.gif"
          />
        </Box>
        <Box fontSize="2vw" textAlign="center">
          Pick a Prediction
        </Box>
        <Box display="flex" justifyContent="space-around">
          <Button
            variant="ghost"
            onClick={() => setShowAtttribute(info.health)}
          >
            {" "}
            Health
          </Button>
          <Button variant="ghost" onClick={() => setShowAtttribute(info.luck)}>
            {" "}
            Luck
          </Button>
          <Button
            variant="ghost"
            onClick={() => setShowAtttribute(info.personal_life)}
          >
            {" "}
            Personal Life
          </Button>
          <Button
            variant="ghost"
            onClick={() => setShowAtttribute(info.profession)}
          >
            {" "}
            Profession
          </Button>
          <Button
            variant="ghost"
            onClick={() => setShowAtttribute(info.travel)}
          >
            {" "}
            Travel
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Horoscope;