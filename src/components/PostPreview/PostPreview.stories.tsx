import React from 'react'
import { StoryObj } from '@storybook/react'
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

type Story = StoryObj<typeof PostPreview>

export const Instagram: Story = () => {
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

export const Facebook: Story = () => {
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
