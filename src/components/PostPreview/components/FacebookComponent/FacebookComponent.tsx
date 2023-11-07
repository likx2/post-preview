import React from 'react'
import { Post, PostType } from '../../../../types'
import Reel from '../Reel'
import FacebookPost from './components/FacebookPost'

interface FacebookComponentProps {
  post: Post
  isVideoMuted: boolean | undefined
  onVideoMute: (muted: boolean | undefined) => void
}

const FacebookComponent: React.FC<FacebookComponentProps> = (props) => {
  let PostTypeBasedComponent
  switch (props.post.postType) {
    case PostType.POST:
      PostTypeBasedComponent = FacebookPost
      break
    case PostType.REEL:
      PostTypeBasedComponent = Reel
      break
  }

  return PostTypeBasedComponent !== undefined ? <PostTypeBasedComponent {...props} /> : null
}
export default FacebookComponent
