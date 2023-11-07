import React from 'react'
import Paper from '../../../Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { ReactComponent as InstagramIcon } from '../../img/instagram.svg'
import { ReactComponent as FacebookIcon } from '../../img/facebook.svg'
import { ReactComponent as VolumeUpIcon } from '../../img/volume-up.svg'
import { ReactComponent as VolumeOffIcon } from '../../img/volume-off.svg'
import { PostType, SocialType } from '../../../../types'

const mapSocialTypeToIcon = {
  [SocialType.INSTAGRAM]: InstagramIcon,
  [SocialType.FACEBOOK]: FacebookIcon
}

const mapSocialTypeToName = {
  [SocialType.INSTAGRAM]: 'Instagram',
  [SocialType.FACEBOOK]: 'Facebook'
}

const mapPostTypeToName = {
  [PostType.POST]: 'post',
  [PostType.REEL]: 'reel',
  [PostType.STORY]: 'story'
}

interface IPostPreviewHeaderProps {
  socialType: SocialType
  postType: PostType
  isVideoMuted: boolean | undefined
  onVideoMute: (muted: boolean | undefined) => void
}

const PostPreviewHeader: React.FC<IPostPreviewHeaderProps> = ({ socialType, postType, isVideoMuted, onVideoMute }) => {
  const SocialIcon = mapSocialTypeToIcon[socialType]

  const onVolumeIconClick = (): void => {
    onVideoMute(isVideoMuted === false)
  }

  return (
        <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: (theme) => `0 ${theme.spacing(2.5)}`, minHeight: '50px' }}>
             <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {SocialIcon !== undefined && <SocialIcon/>}
                 <Typography
                    variant='subtitle2'
                    sx={{ marginLeft: (theme) => theme.spacing(2), color: (theme) => theme.palette.black80 }}
                 >
                    {mapSocialTypeToName[socialType]} {mapPostTypeToName[postType]} post preview
                 </Typography>
             </Box>
             {(isVideoMuted !== undefined) && (
                <IconButton onClick={onVolumeIconClick} aria-label='volume'>
                    {isVideoMuted ? <VolumeOffIcon/> : <VolumeUpIcon/>}
                </IconButton>
             )}
        </Paper>
  )
}

export default PostPreviewHeader
