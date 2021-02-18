import { Global } from "@emotion/react"
const Fonts = () => (
  <Global
    styles={`
      /* Copied from https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&family=Raleway&display=swap */
      /* latin */
      @font-face {
        font-family: 'Philosopheri';
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/philosopher/v14/vEFK2_5QCwIS4_Dhez5jcWBrd_QZwtW_WpzEpMs.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* latin */
  @font-face {
  font-family: 'Philosopher';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/philosopher/v14/vEFV2_5QCwIS4_Dhez5jcWBuT0020Nqf.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
      `}
  />
)

export default Fonts
