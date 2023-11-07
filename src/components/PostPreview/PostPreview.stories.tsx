import { StoryObj, Meta } from '@storybook/react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import PostPreview from './PostPreview'
import {
  facebookPostCarousel,
  facebookPostPhoto,
  facebookPostVideo,
  facebookPostEmptyMedia,
  facebookReel,
  facebookReelEmptyMedia,
  instagramPostEmptyMedia,
  instagramPostCarousel,
  instagramPostPhoto,
  instagramPostVideo,
  instagramReel,
  instagramStoryPhoto,
  instagramStoryVideo,
  instagramStoryEmptyMedia,
  instagramReelEmptyMedia
} from './testData'
import theme from '../../theme'

const meta: Meta<typeof PostPreview> = {
  component: PostPreview,
  decorators: [
    (Story) => (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
    )
  ]
}

export default meta

type Story = StoryObj<typeof PostPreview>

// Instagram
export const InstagramPostPhoto: Story = {
  render: () => <PostPreview post={instagramPostPhoto} />
}

export const InstagramPostVideo: Story = {
  render: () => <PostPreview post={instagramPostVideo} />
}

export const InstagramPostCarousel: Story = {
  render: () => <PostPreview post={instagramPostCarousel} />
}

export const InstagramPostEmptyMedia: Story = {
  render: () => <PostPreview post={instagramPostEmptyMedia} />
}

export const InstagramStoryVideo: Story = {
  render: () => <PostPreview post={instagramStoryVideo} />
}

export const InstagramStoryPhoto: Story = {
  render: () => <PostPreview post={instagramStoryPhoto} />
}

export const InstagramStoryEmptyMedia: Story = {
  render: () => <PostPreview post={instagramStoryEmptyMedia} />
}

export const InstagramReel: Story = {
  render: () => <PostPreview post={instagramReel} />
}

export const InstagramReelEmptyMedia: Story = {
  render: () => <PostPreview post={instagramReelEmptyMedia} />
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

export const FacebookPostEmptyMedia: Story = {
  render: () => <PostPreview post={facebookPostEmptyMedia} />
}

export const FacebookReel: Story = {
  render: () => <PostPreview post={facebookReel} />
}

export const FacebookReelEmptyMedia: Story = {
  render: () => <PostPreview post={facebookReelEmptyMedia} />
}
