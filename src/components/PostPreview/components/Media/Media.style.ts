import { styled } from '@mui/material/styles'
import Image from '../../../Image'
import Video from '../../../Video'

const sharedStyles: object = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center'
}

export const MediaImage = styled(Image)(() => ({ ...sharedStyles }))

export const MediaVideo = styled(Video)(() => ({ ...sharedStyles }))

export const MediaEmpty = styled('div')(({ theme }) => ({
  ...sharedStyles,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.grey30
}))
