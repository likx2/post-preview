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
  render: (args) => <PostPreview {...args} />,
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
  args: {
    post: instagramPostPhoto
  }
}

export const InstagramPostVideo: Story = {
  args: {
    post: instagramPostVideo
  }
}

export const InstagramPostCarousel: Story = {
  args: {
    post: instagramPostCarousel
  }
}

export const InstagramPostEmptyMedia: Story = {
  args: {
    post: instagramPostEmptyMedia
  }
}

export const InstagramStoryVideo: Story = {
  args: {
    post: instagramStoryVideo
  }
}

export const InstagramStoryPhoto: Story = {
  args: {
    post: instagramStoryPhoto
  }
}

export const InstagramStoryEmptyMedia: Story = {
  args: {
    post: instagramStoryEmptyMedia
  }
}

export const InstagramReel: Story = {
  args: {
    post: instagramReel
  }
}

export const InstagramReelEmptyMedia: Story = {
  args: {
    post: instagramReelEmptyMedia
  }
}

// Facebook
export const FacebookPostPhoto: Story = {
  args: {
    post: facebookPostPhoto
  }
}

export const FacebookPostVideo: Story = {
  args: {
    post: facebookPostVideo
  }
}

export const FacebookPostCarousel: Story = {
  args: {
    post: facebookPostCarousel
  }
}

export const FacebookPostEmptyMedia: Story = {
  args: {
    post: facebookPostEmptyMedia
  }
}

export const FacebookReel: Story = {
  args: {
    post: facebookReel
  }
}

export const FacebookReelEmptyMedia: Story = {
  args: {
    post: facebookReelEmptyMedia
  }
}
