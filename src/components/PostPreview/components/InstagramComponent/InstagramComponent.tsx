import React, { FC } from 'react'
import { ISocialComponentProps } from '../../PostPreview'
import { PostType } from '../../../../types'
import InstagramPost from './components/InstagramPost'
import Reel from '../Reel'
import InstagramStory from './components/InstagramStory'

const InstagramComponent: FC<ISocialComponentProps> = (props) => {
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

  return PostTypeBasedComponent ? <PostTypeBasedComponent {...props} /> : null
}

export default InstagramComponent