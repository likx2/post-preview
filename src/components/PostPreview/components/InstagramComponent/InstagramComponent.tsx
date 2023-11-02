import React from 'react'
import { ISocialComponentProps } from '../../PostPreview'
import { PostType } from '../../../../types'
import InstagramPost from './components/InstagramPost'
import Reel from '../Reel'
import InstagramStory from './components/InstagramStory'

const InstagramComponent: React.FC<ISocialComponentProps> = (props) => {
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
