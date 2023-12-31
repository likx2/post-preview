import React from 'react'
import Box from '@mui/material/Box'
import { Post, SocialType } from '../../types'
import PostPreviewHeader from './components/PostPreviewHeader'
import InstagramComponent from './components/InstagramComponent'
import FacebookComponent from './components/FacebookComponent'

interface IPostPreviewProps {
  post: Post
}

const PostPreview: React.FC<IPostPreviewProps> = (props) => {
  const [isVideoMuted, setIsVideoMuted] = React.useState(props.post.isMuted)

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
             {SocialTypeBasedComponent !== undefined && (
                 <Box sx={{ marginTop: '20px', maxHeight: '920px' }}>
                   <SocialTypeBasedComponent {...props} isVideoMuted={isVideoMuted} onVideoMute={onVideoMute} />
                 </Box>
             )}
        </Box>
  )
}

export default PostPreview
