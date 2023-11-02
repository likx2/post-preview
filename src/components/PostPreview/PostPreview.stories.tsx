import React from 'react'
import PostPreview from './PostPreview'
import {
  facebookPostCarousel,
  facebookPostPhoto,
  facebookPostVideo, facebookReel,
  instagramPostCarousel,
  instagramPostPhoto,
  instagramPostVideo, instagramReel,
  instagramStoryPhoto,
  instagramStoryVideo
} from './testData'

export default {
  title: 'Components/PostPreview'
}

export const Instagram = () => {
  return (
        <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
          <PostPreview post={instagramPostPhoto} />
           <PostPreview post={instagramPostVideo} />
           <PostPreview post={instagramPostCarousel} />
           <PostPreview post={instagramStoryVideo} />
           <PostPreview post={instagramStoryPhoto} />
           <PostPreview post={instagramReel} />
        </div>
  )
}

Instagram.story = {
  name: 'Instagram'
}

export const Facebook = () => {
  return (
        <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
            <PostPreview post={facebookPostPhoto} />
            <PostPreview post={facebookPostVideo} />
            <PostPreview post={facebookPostCarousel} />
            <PostPreview post={facebookReel} />
        </div>
  )
}

Facebook.story = {
  name: 'Facebook'
}
