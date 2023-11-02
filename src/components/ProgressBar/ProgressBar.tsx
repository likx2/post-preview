import React from 'react'
import { styled } from '@mui/material/styles'
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress'

const ProgressBar = styled(LinearProgress)<LinearProgressProps>(() => ({
  borderRadius: '13px',
  height: '2px',
  backgroundColor: '#ffffff80',
  '& .MuiLinearProgress-bar': {
    backgroundColor: '#FFF'
  }
}))

export default ProgressBar
