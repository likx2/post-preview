import '@mui/material/styles/createPalette'
import '@mui/material/styles/createTheme'

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    accent100: string
    black40: string
    black80: string
    black100: string
    white50: string
    white60: string
    white70: string
    white100: string
    grey30: string
    grey100: string
  }

  interface PaletteOptions {
    accent100: string
    black40: string
    black80: string
    black100: string
    white50: string
    white60: string
    white70: string
    white100: string
    grey30: string
    grey100: string
  }
}

declare module '@mui/material/styles/createTheme' {
  interface Theme {
    fontSize: {
      small: string
      big: string
    }
    boxShadow: string
  }

  interface ThemeOptions {
    fontSize: {
      small: string
      big: string
    }
    boxShadow: string
  }
}
