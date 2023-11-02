import { StoryObj, Meta } from '@storybook/react'
import PostPreview from './PostPreview'
import {
  facebookEmptyMedia,
  facebookPostCarousel,
  facebookPostPhoto,
  facebookPostVideo,
  facebookReel,
  instagramEmptyMedia,
  instagramPostCarousel,
  instagramPostPhoto,
  instagramPostVideo,
  instagramReel,
  instagramStoryPhoto,
  instagramStoryVideo
} from './testData'

const meta: Meta<typeof PostPreview> = {
  component: PostPreview
}

export default meta

type Story = StoryObj<typeof PostPreview>

// Instagram
export const IstagramPostPhoto: Story = {
  render: () => <PostPreview post={instagramPostPhoto} />
}
export const IstagramPostVideo: Story = {
  render: () => <PostPreview post={instagramPostVideo} />
}
export const IstagramPostCarousel: Story = {
  render: () => <PostPreview post={instagramPostCarousel} />
}
export const IstagramStoryVideo: Story = {
  render: () => <PostPreview post={instagramStoryVideo} />
}
export const IstagramStoryPhoto: Story = {
  render: () => <PostPreview post={instagramStoryPhoto} />
}
export const IstagramReel: Story = {
  render: () => <PostPreview post={instagramReel} />
}

export const IstagramEmptyMedia: Story = {
  render: () => <PostPreview post={instagramEmptyMedia} />
}

// Facebook
export const FacebookPostPhoto: Story = {
  render: () => <PostPreview post={facebookPostPhoto} />
}

export const FacebookPostVideo: Story = {
  render: () => <PostPreview post={facebookPostVideo} />
}

export const FacebookPostCarousel: Story = {
  render: () => <PostPreview post={facebookPostCarousel} />
}

export const FacebookReel: Story = {
  render: () => <PostPreview post={facebookReel} />
}

export const FacebookEmptyMedia: Story = {
  render: () => <PostPreview post={facebookEmptyMedia} />
}
