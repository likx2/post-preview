import { styled } from '@mui/material/styles'
import Media from '../../../Media'
import { MEDIA_AMOUNT_TO_DISPLAY } from './constants'

export const MediaPositioned = styled(Media)(() => ({
  position: 'absolute',
  left: 0,
  top: 0
}))

export const FacebookGrid = styled('div', {
  shouldForwardProp: (prop) => prop !== 'itemsCount'
})<{ itemsCount: number }>(({ itemsCount }) => {
  const gridVariant = itemsCount >= MEDIA_AMOUNT_TO_DISPLAY ? gridVariants[`grid${MEDIA_AMOUNT_TO_DISPLAY}`] : gridVariants[`grid${itemsCount}`]
  return {
    height: '360px',
    display: 'grid',
    ...(gridVariant ?? gridVariants.grid4)
  }
})

const gridVariants: Record<string, object> = {
  grid2: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  grid3: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    '& > *:first-child': {
      gridColumn: '1 / 3'
    }
  },
  grid4: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    '& > *:first-child': {
      gridColumn: '1 / 4'
    }
  },
  grid5: {
    gridTemplateColumns: 'repeat(6, 1fr)',
    '& > *:first-child, & > *:nth-child(2)': {
      gridColumn: 'auto / span 3'
    },
    '& > *:nth-child(n + 3)': {
      gridColumn: 'auto / span 2'
    }
  }
}
