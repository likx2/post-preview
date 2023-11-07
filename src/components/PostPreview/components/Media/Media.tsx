import React from 'react'
import Typography from '@mui/material/Typography'
import { isImage, isVideo } from '../../PostPreview.utils'
import { MediaEmpty, MediaImage, MediaVideo } from './Media.style'

interface MediaProps {
  src: string | undefined
  isVideoMuted?: boolean | undefined
  onTimeUpdate?: (time: number) => void
  className?: string
}

const Media: React.FC<MediaProps> = ({ src, isVideoMuted, onTimeUpdate, className }) => {
  const onTimeUpdateHandler = (e: React.SyntheticEvent<HTMLVideoElement>): void => {
    if (onTimeUpdate !== undefined) {
      const percentage = Math.floor((e.currentTarget.currentTime / e.currentTarget.duration) * 100)
      onTimeUpdate(percentage)
    }
  }

  if (isImage(src)) {
    return <MediaImage src={src} className={className} alt='' />
  } else if (isVideo(src)) {
    return <MediaVideo src={src} className={className} autoPlay muted={isVideoMuted} loop onTimeUpdate={onTimeUpdateHandler} />
  }

  return (
      <MediaEmpty className={className}>
        <Typography variant='body2' sx={{ color: (theme) => theme.palette.grey100 }}>Add Media</Typography>
      </MediaEmpty>
  )
}

export default Media
