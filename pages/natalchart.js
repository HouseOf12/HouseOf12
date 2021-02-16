import { Box } from '@chakra-ui/react'
import React from 'react'
import Natalchart from '../components/Natalchart.js'
export const natalchart = () => {
    return (
        
        <Box>
            <Box zIndex="-1"  bgPosition="center" bgSize="cover" minH="100%" minW="32vw" w="100vw" h="auto" position="fixed" overflowX="scroll" top="0" right="0" bgImage="url('./chartwpp.jpg')" /> 
            <Natalchart /> 
        </Box>
        
    )
}

export default natalchart