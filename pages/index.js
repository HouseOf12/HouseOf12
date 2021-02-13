import React from 'react';
import { useCurrentUser } from '../hooks/index.js';
import {Grid, GridItem, Image, Box} from '@chakra-ui/react'


const IndexPage = () => {
  const [user] = useCurrentUser();

  return (
    <>
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
      <Grid templateColumns="repeat(4, 1fr)" templateRows="repeat(4, 1fr)" gap={6}>
          <GridItem>
            <Box>
            <Image src="./leo.png" />
            </Box>
          </GridItem>
      </Grid>
      <div style={{ marginBottom: '2rem' }}>
        <h2>
          He,
          {' '}
          {user ? user.name : 'stranger'}
          !
        </h2>
        
      </div>
      <div>
        
        
        
      </div>
    </>
  );
};
export default IndexPage;