import { styled } from '@mui/material/styles'
import Carousel from 'react-material-ui-carousel'

export const InstagramCarousel = styled(Carousel)(({ theme }) => ({
  '& button.MuiIconButton-root': {
    color: theme.palette.white60,
    '& svg': {
      width: '6px',
      height: '6px'
    }
  }
}))

export const ArrowButton = styled('div')(({ theme }) => ({
  all: 'unset',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  backgroundColor: theme.palette.white70,
  borderRadius: '50%',
  boxShadow: theme.boxShadow
}))
