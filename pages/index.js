import React from "react";
import { useCurrentUser } from "../hooks/index.js";
import HoroscopePics from "@/components/HoroscopePics.js";
import {Box} from '@chakra-ui/react'
// import Test from "../components/Test.js"


const IndexPage = () => {
  const [user] = useCurrentUser();

  return (
    <>
    <Box color="white" bgSize="cover" minH="100%" minW="1024px" w="100%" h="auto" position="fixed" top="0" right="0" bgImage="url('https://images.unsplash.com/photo-1525352265139-caa4490ea6d0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob290aW5nJTIwc3RhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80')" > 
    <Box > 
      <div style={{ marginBottom: "2rem" }}>
        <Box color="white">   Hello, {user ? user.name : "stranger"}!</Box>
      </div>
      <style jsx>
        {`
          p {
            text-align: center;
            color: #888;
          }
          h3 {
            color: #555;
          }
        `}
      </style>

      <HoroscopePics />
      </Box>
      </Box>
    </>
  );
};
export default IndexPage;