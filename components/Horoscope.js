import React from 'react'

function Horoscope({sign, info, date }) {
    console.log(info)
    return ( 
        <div>
            INFO ABOUT HOROSCOPE
            {sign}
            {info.luck}
            {date}
            
        </div>
    )
}

export default Horoscope
