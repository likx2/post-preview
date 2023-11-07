import Paper, { PaperProps } from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

export const PaperStyled = styled(Paper)<PaperProps>(() => ({
  borderRadius: '10px'
}))
