import React, { FC, useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Media from '../../../Media'
import { ReactComponent as LikeIcon } from '../../../../img/like-white.svg'
import { ReactComponent as ShareIcon } from '../../../../img/share-white.svg'
import Avatar from '../../../../../Avatar'
import ProgressBar from '../../../../../ProgressBar'
import { ISocialComponentProps } from '../../../../PostPreview'
import Paper from '../../../../../Paper'
import { isImage, isVideo } from '../../../../PostPreview.utils'

const TIME_INCREMENT_PERCENTAGE = 5
const TIME_INCREMENT_INTERVAL = 300

const InstagramStory: FC<ISocialComponentProps> = ({ post, isVideoMuted }) => {
  const [timePercentage, setTimePercentage] = useState(0)

  useEffect(() => {
    if (!post.media || isImage(post.media[0].url)) {
      const timer = setInterval(() => {
        setTimePercentage((oldProgress) => {
          if (oldProgress === 100) {
            return 0
          }
          return Math.min(oldProgress + TIME_INCREMENT_PERCENTAGE, 100)
        })
      }, TIME_INCREMENT_INTERVAL)

      return () => {
        clearInterval(timer)
      }
    }
  }, [])

  const onTimeUpdate = (time: number) => {
    setTimePercentage(time)
  }

  return (
      <Paper sx={{ position: 'relative', backgroundColor: 'transparent', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ position: 'absolute', left: '10px', top: '10px', width: '450px' }}>
              <ProgressBar
                  variant='determinate'
                  value={timePercentage}
              />
          </Box>
          <Box sx={{ position: 'absolute', left: '20px', top: '30px' }}>
              <Avatar
                  src={post.account.url}
                  name={post.account.name}
                  size={40}
                  color='#FFF'
                  secondaryText='Just now'
                  inline
              />
          </Box>
          <Media src={post.media?.[0].url} isVideoMuted={isVideo(post.media?.[0].url) ? isVideoMuted : undefined} onTimeUpdate={isVideo(post.media?.[0].url) ? onTimeUpdate : undefined} />
          <Box sx={{ position: 'absolute', right: '20px', bottom: '30px', display: 'flex', gap: '26px' }}>
              <LikeIcon />
              <ShareIcon />
          </Box>
      </Paper>
  )
}

export default InstagramStory
