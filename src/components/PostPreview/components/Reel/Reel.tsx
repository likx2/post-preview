import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Media from '../Media'
import { ReactComponent as LikeIcon } from '../../img/like-white.svg'
import { ReactComponent as CommentIcon } from '../../img/comment-white.svg'
import { ReactComponent as ShareIcon } from '../../img/share-white.svg'
import { ReactComponent as MoreInfoIcon } from '../../img/more-info-white.svg'
import Avatar from '../../../Avatar'
import { isImage, isVideo, parseDescription } from '../../PostPreview.utils'
import ProgressBar from '../../../ProgressBar'
import Paper from '../../../Paper'
import { Post } from '../../../../types'
import useProgress from '../../../../hooks/useProgress'
import { useTheme } from '@mui/material/styles'

interface ReelProps {
  post: Post
  isVideoMuted: boolean | undefined
  onVideoMute: (muted: boolean | undefined) => void
}

const Reel: React.FC<ReelProps> = ({ post, isVideoMuted }) => {
  const [timePercentage, onTimeUpdate] = useProgress(post.media === undefined || isImage(post.media[0]?.url))
  const theme = useTheme()
  const parsedDescription = post.description !== undefined ? parseDescription(post.description) : null

  return (
        <Paper sx={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '920px' }}>
            <Media src={post.media?.[0]?.url} isVideoMuted={isVideo(post.media?.[0]?.url) ? isVideoMuted : undefined} onTimeUpdate={isVideo(post.media?.[0]?.url) ? onTimeUpdate : undefined} />
            <Box sx={{ position: 'absolute', left: '20px', bottom: '50px' }}>
                <Avatar src={post.account.url} name={post.account.name} size={40} color={theme.palette.white100} nameSx={{ fontSize: '16px' }} />
                {((parsedDescription?.text) !== undefined) && <Typography sx={{ color: (theme) => theme.palette.white100, marginTop: (theme) => theme.spacing(1.375), fontSize: '13px', overflow: 'hidden', whiteSpace: 'nowrap', width: '348px', textOverflow: 'ellipsis' }}>{parsedDescription.text}</Typography>}
            </Box>
            <Box sx={{ position: 'absolute', right: '20px', bottom: '50px', display: 'flex', flexDirection: 'column', gap: (theme) => theme.spacing(4.75) }}>
                <LikeIcon />
                <CommentIcon />
                <ShareIcon />
                <MoreInfoIcon />
            </Box>
            <Box sx={{ position: 'absolute', left: '10px', bottom: '10px', width: '450px' }}>
                <ProgressBar
                    variant='determinate'
                    value={timePercentage}
                />
            </Box>
        </Paper>
  )
}

export default Reel
