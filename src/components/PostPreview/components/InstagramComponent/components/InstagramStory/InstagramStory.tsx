import React from 'react'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import Media from '../../../Media'
import { ReactComponent as LikeIcon } from '../../../../img/like-white.svg'
import { ReactComponent as ShareIcon } from '../../../../img/share-white.svg'
import Avatar from '../../../../../Avatar'
import ProgressBar from '../../../../../ProgressBar'
import Paper from '../../../../../Paper'
import { isImage, isVideo } from '../../../../PostPreview.utils'
import { Post } from '../../../../../../types'
import useProgress from '../../../../../../hooks/useProgress'

interface InstagramStoryProps {
  post: Post
  isVideoMuted: boolean | undefined
  onVideoMute: (muted: boolean | undefined) => void
}

const InstagramStory: React.FC<InstagramStoryProps> = ({ post, isVideoMuted }) => {
  const [timePercentage, onTimeUpdate] = useProgress(post.media === undefined || isImage(post.media[0]?.url))
  const theme = useTheme()

  return (
      <Paper sx={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '920px' }}>
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
                  color={theme.palette.white100}
                  secondaryText='Just now'
                  inline
              />
          </Box>
          <Media src={post.media?.[0]?.url} isVideoMuted={isVideo(post.media?.[0]?.url) ? isVideoMuted : undefined} onTimeUpdate={isVideo(post.media?.[0]?.url) ? onTimeUpdate : undefined} />
          <Box sx={{ position: 'absolute', right: '20px', bottom: '30px', display: 'flex', gap: (theme) => theme.spacing(3.25) }}>
              <LikeIcon />
              <ShareIcon />
          </Box>
      </Paper>
  )
}

export default InstagramStory
