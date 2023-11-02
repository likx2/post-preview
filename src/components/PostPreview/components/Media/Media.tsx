import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { isImage, isVideo } from '../../PostPreview.utils'
import Image from '../../../Image'
import Video from '../../../Video'
import styles from './Media.module.css'

interface IMediaProps {
  src: string | undefined
  isVideoMuted?: boolean | undefined
  onTimeUpdate?: (time: number) => void
}

const Media: React.FC<IMediaProps> = ({ src, isVideoMuted, onTimeUpdate }) => {
  const onTimeUpdateHandler = (e: React.SyntheticEvent<HTMLVideoElement>): void => {
    if (onTimeUpdate !== undefined) {
      const percentage = Math.floor((e.currentTarget.currentTime / e.currentTarget.duration) * 100)
      onTimeUpdate(percentage)
    }
  }

  if (isImage(src)) {
    return <Image src={src} className={styles.media} alt='' />
  } else if (isVideo(src)) {
    return <Video src={src} className={styles.media} autoPlay muted={isVideoMuted} loop onTimeUpdate={onTimeUpdateHandler} />
  }
  return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#EBEBEB' }} className={styles.media}>
        <Typography variant='body2' sx={{ color: '#A29FB6' }}>Add Media</Typography>
      </Box>
  )
}

Media.displayName = 'Media'

export default Media
