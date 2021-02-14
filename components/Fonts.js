import { Global } from "@emotion/react"

import React from 'react'

export const Fonts = () => {
    return (
        <Global
        styles={`
         
    
         
          @font-face {
                font-family: "Tryst-Regular";
                src: url('fonts/webFonts/TrystRegular/font.woff2') format('woff2'), url('fonts/webFonts/TrystRegular/font.woff') format('woff');
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          `}
      />
    )
}
