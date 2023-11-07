import { styled } from '@mui/material/styles'
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress'

const ProgressBar = styled(LinearProgress)<LinearProgressProps>(({ theme }) => ({
  borderRadius: '13px',
  height: '2px',
  backgroundColor: theme.palette.white50,
  '& .MuiLinearProgress-bar': {
    backgroundColor: theme.palette.white100
  }
}))

export default ProgressBar
