import React from 'react'
import { Post, PostType } from '../../../../types'
import InstagramPost from './components/InstagramPost'
import Reel from '../Reel'
import InstagramStory from './components/InstagramStory'

interface InstagramComponentProps {
  post: Post
  isVideoMuted: boolean | undefined
  onVideoMute: (muted: boolean | undefined) => void
}

const InstagramComponent: React.FC<InstagramComponentProps> = (props) => {
  let PostTypeBasedComponent
  switch (props.post.postType) {
    case PostType.POST:
      PostTypeBasedComponent = InstagramPost
      break
    case PostType.REEL:
      PostTypeBasedComponent = Reel
      break
    case PostType.STORY:
      PostTypeBasedComponent = InstagramStory
      break
  }

  return PostTypeBasedComponent !== undefined ? <PostTypeBasedComponent {...props} /> : null
}

export default InstagramComponent
