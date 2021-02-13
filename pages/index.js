import React from "react";
import { useCurrentUser } from "../hooks/index.js";
import HoroscopePics from "@/components/HoroscopePics.js";
import {Box} from '@chakra-ui/react'
// import Test from "../components/Test.js"


const IndexPage = () => {
  const [user] = useCurrentUser();

  return (
    <>
    <Box bg="#1A365D"> 
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
    </>
  );
};
export default IndexPage;