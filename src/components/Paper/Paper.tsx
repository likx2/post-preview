import * as React from 'react'
import MuiPaper, { PaperProps } from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const Paper = styled((props) => <MuiPaper elevation={0} {...props} />)<PaperProps>(() => ({
  borderRadius: '10px'
}))

export default Paper
