import { Box, useColorMode, colorMode } from '@chakra-ui/react'
import React from 'react'
import Natalchart from '../components/Natalchart.js'

//imports for getServerSideProps function 
import { all } from '../middlewares/index';
import { extractUser } from '../lib/api-helpers';
import { findUserById } from '../db/index';



//export const natalchart = ({user}) => {
export default function natalchart({ user }) {
    const { colorMode, toggleColorMode } = useColorMode();
    const bgColor = {
        light: "rgba(140, 145, 151, 0.7)",
        dark: "rgba(12, 47, 89, 0.9)",
      };

    return (
        
        <Box>
            <Box zIndex="-1"  bgColor={bgColor[colorMode]} bgPosition="center" bgSize="cover" minH="100%" minW="32vw" w="100vw" h="auto" position="fixed" overflowX="scroll" top="0" right="0" bgImage="url('./loginwp.png')" /> 
            {/* pass down the user from props to the natalchart so it has access to specific info */}
            <Natalchart user= {user}/>
            
        </Box>
        
    )
}

// export default natalchart

//get the current user and pass it into page component
export async function getServerSideProps(context) {
    await all.run(context.req, context.res);
    const user = extractUser(await findUserById(context.req.db, context.req.user._id));
    if (!user) context.res.statusCode = 404;
    return { props: { user } };
  }