import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontWeightBold: 600
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        /* inter-regular - latin */
        @font-face {
            font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            src: url('./fonts/Inter/inter-v13-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
        }
        
        /* inter-500 - latin */
        @font-face {
            font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            src: url('./fonts/Inter/inter-v13-latin-500.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
        }
        
        /* inter-600 - latin */
        @font-face {
            font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            src: url('./fonts/Inter/inter-v13-latin-600.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}`
    }
  },
  palette: {
    accent100: '#4564EB',
    black40: 'rgba(0, 0, 0, 0.40)',
    black80: 'rgba(41, 42, 58, 0.80)',
    black100: '#292A3A',
    white50: 'rgba(255, 255, 255, 0.50)',
    white60: 'rgba(255, 255, 255, 0.60)',
    white70: 'rgba(255, 255, 255, 0.70)',
    grey30: 'rgba(162, 159, 182, 0.30)',
    white100: '#FFF',
    grey100: '#A29FB6'
  },
  fontSize: {
    small: '13px',
    big: '16px'
  },
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
  spacing: 8
})

export default theme
