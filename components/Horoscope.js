import React from 'react'
import { Center, Box  } from "@chakra-ui/react";


function Horoscope({sign, info, date }) {
    console.log(info)
    return ( 
        <div>
            <Center>
                <h1>  INFO ABOUT HOROSCOPE</h1>
                <Box> 
                {sign}
                {info.luck}
                {date}
                </Box>
            </Center>
            
        </div>
    )
}

export default Horoscope
