import React from "react";
import { useCurrentUser } from "../hooks/index.js";
import { Grid, GridItem, Image, Box } from "@chakra-ui/react";
import HoroscopePics from "@/components/HoroscopePics.js";

const IndexPage = () => {
  const [user] = useCurrentUser();

  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <h2>Hello, {user ? user.name : "stranger"}!</h2>
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
    </>
  );
};
export default IndexPage;