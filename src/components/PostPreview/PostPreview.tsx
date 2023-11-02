import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import { IPost, SocialType } from '../../types'
import PostPreviewHeader from './components/PostPreviewHeader'
import InstagramComponent from './components/InstagramComponent'
import FacebookComponent from './components/FacebookComponent'

export interface IPostPreviewProps {
  post: IPost
}

export interface IVideoMutedProps {
  isVideoMuted: boolean | undefined
  onVideoMute: (muted: boolean | undefined) => void
}

export type ISocialComponentProps = IPostPreviewProps & IVideoMutedProps

const PostPreview: FC<IPostPreviewProps> = (props) => {
  const [isVideoMuted, setIsVideoMuted] = useState(props.post.isMuted)

  const onVideoMute = (muted: boolean | undefined): void => {
    setIsVideoMuted(muted)
  }

  let SocialTypeBasedComponent
  switch (props.post.socialType) {
    case SocialType.INSTAGRAM:
      SocialTypeBasedComponent = InstagramComponent
      break
    case SocialType.FACEBOOK:
      SocialTypeBasedComponent = FacebookComponent
      break
  }

  return (
        <Box sx={{ width: '100%', maxWidth: '470px' }}>
             <PostPreviewHeader
                socialType={props.post.socialType}
                postType={props.post.postType}
                isVideoMuted={isVideoMuted}
                onVideoMute={onVideoMute}
             />
             {SocialTypeBasedComponent && (
                 <Box sx={{ marginTop: '20px', maxHeight: '920px' }}>
                   <SocialTypeBasedComponent {...props} isVideoMuted={isVideoMuted} onVideoMute={onVideoMute} />
                 </Box>
             )}
        </Box>
  )
}

export default PostPreview
