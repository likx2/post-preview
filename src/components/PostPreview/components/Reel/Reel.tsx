import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ISocialComponentProps } from '../../PostPreview'
import Media from '../Media'
import { ReactComponent as LikeIcon } from '../../img/like-white.svg'
import { ReactComponent as CommentIcon } from '../../img/comment-white.svg'
import { ReactComponent as ShareIcon } from '../../img/share-white.svg'
import { ReactComponent as MoreInfoIcon } from '../../img/more-info-white.svg'
import Avatar from '../../../Avatar'
import { isVideo, parseDescription } from '../../PostPreview.utils'
import ProgressBar from '../../../ProgressBar'
import Paper from '../../../Paper'

const Reel: FC<ISocialComponentProps> = ({ post, isVideoMuted }) => {
  const [timePercentage, setTimePercentage] = useState(0)
  const parsedDescription = post.description !== undefined ? parseDescription(post.description) : null

  const onTimeUpdate = (time: number): void => {
    setTimePercentage(time)
  }

  return (
        <Paper sx={{ position: 'relative', backgroundColor: 'transparent', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <Media src={post.media?.[0].url} isVideoMuted={isVideo(post.media?.[0].url) ? isVideoMuted : undefined} onTimeUpdate={isVideo(post.media?.[0].url) ? onTimeUpdate : undefined} />
            <Box sx={{ position: 'absolute', left: '20px', bottom: '50px' }}>
                <Avatar src={post.account.url} name={post.account.name} size={40} color='#FFF' nameSx={{ fontSize: '16px' }} />
                {((parsedDescription?.text) !== undefined) && <Typography sx={{ color: '#FFF', marginTop: '11px', fontSize: '13px', overflow: 'hidden', whiteSpace: 'nowrap', width: '348px', textOverflow: 'ellipsis' }}>{parsedDescription.text}</Typography>}
            </Box>
            <Box sx={{ position: 'absolute', right: '20px', bottom: '50px', display: 'flex', flexDirection: 'column', gap: '38px' }}>
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
