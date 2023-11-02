import React, { FC } from 'react'
import { ISocialComponentProps } from '../../PostPreview'
import { PostType } from '../../../../types'
import Reel from '../Reel'
import FacebookPost from './components/FacebookPost'

const FacebookComponent: FC<ISocialComponentProps> = (props) => {
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
