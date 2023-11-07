import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import Paper from './components/Paper'
import { CssBaseline } from '@mui/material'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper sx={{ padding: (theme) => theme.spacing(2) }}>
        Hi
      </Paper>
    </ThemeProvider>
  )
}

export default App
