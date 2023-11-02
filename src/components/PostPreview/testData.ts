import { PostType, SocialType } from '../../types'

// instagram empty media
export const instagramEmptyMedia = {
  postType: PostType.POST,
  description: 'Some description\r\n\r\n#test #super #lovewarsaw\r\nhttps://example.com',
  account: {
    name: 'Amplorium',
    url: 'https://amplorium.s3.amazonaws.com/u/970702e573774c03bc31029ccc8db202/facebook113072825141511.jpg'
  },
  socialType: SocialType.INSTAGRAM
}
// instagram post photo
export const instagramPostPhoto = {
  postType: PostType.POST,
  media: [
    {
      id: '252e2a351c6c478584f29c4ec28fd8ef',
      url: 'https://amplorium.s3.amazonaws.com/u/af97be91e0fb410a85fcd61f5ce0365f/252e2a351c6c478584f29c4ec28fd8ef.png'
    }
  ],
  description: 'Some description\r\n\r\n#test #super #lovewarsaw\r\nhttps://example.com',
  account: {
    name: 'Amplorium',
    url: 'https://amplorium.s3.amazonaws.com/u/970702e573774c03bc31029ccc8db202/facebook113072825141511.jpg'
  },
  socialType: SocialType.INSTAGRAM
}

// instagram post video
export const instagramPostVideo = {
  postType: PostType.POST,
  media: [
    {
      id: '5e3816df606941909bb19e14f44db756',
      url: 'https://amplorium.s3.amazonaws.com/u/af97be91e0fb410a85fcd61f5ce0365f/5e3816df606941909bb19e14f44db756.mp4'
    }
  ],
  description: 'Some description\r\n\r\n#test #super #lovewarsaw\r\nhttps://example.com',
  account: {
    name: 'Amplorium',
    url: 'https://amplorium.s3.amazonaws.com/u/970702e573774c03bc31029ccc8db202/facebook113072825141511.jpg'
  },
  isMuted: true,
  socialType: SocialType.INSTAGRAM
}

// instagram post carousel
export const instagramPostCarousel = {
  postType: PostType.POST,
  media: [
    {
      id: '5e3816df606941909bb19e14f44db756',
      url: 'https://amplorium.s3.amazonaws.com/u/af97be91e0fb410a85fcd61f5ce0365f/5e3816df606941909bb19e14f44db756.mp4'
    },
    {
      id: '5e3816df606941909bb19e14f44db756',
      url: 'https://amplorium.s3.amazonaws.com/u/af97be91e0fb410a85fcd61f5ce0365f/5e3816df606941909bb19e14f44db756.mp4'
    },
    {
      id: '252e2a351c6c478584f29c4ec28fd8ef',
      url: 'https://amplorium.s3.amazonaws.com/u/af97be91e0fb410a85fcd61f5ce0365f/252e2a351c6c478584f29c4ec28fd8ef.png'
    },
    {
      id: '9fa8857be1184c1b9a16446ed2632046',
      url: 'https://amplorium.s3.amazonaws.com/u/af97be91e0fb410a85fcd61f5ce0365f/9fa8857be1184c1b9a16446ed2632046.png'
    }
  ],
  description: 'Some description\r\n\r\n#test #super #lovewarsaw\r\nhttps://example.com',
  account: {
    name: 'Amplorium',
    url: 'https://amplorium.s3.amazonaws.com/u/970702e573774c03bc31029ccc8db202/facebook113072825141511.jpg'
  },
  isMuted: true,
  socialType: SocialType.INSTAGRAM
}

// instagram story video
export const instagramStoryVideo = {
  postType: PostType.STORY,
  media: [
    {
      id: '5e3816df606941909bb19e14f44db756',
      url: 'https://amplorium.s3.amazonaws.com/u/af97be91e0fb410a85fcd61f5ce0365f/5e3816df606941909bb19e14f44db756.mp4'
    }
  ],
  account: {
    name: 'Amplorium',
    url: 'https://amplorium.s3.amazonaws.com/u/970702e573774c03bc31029ccc8db202/facebook113072825141511.jpg'
  },
  isMuted: true,
  socialType: SocialType.INSTAGRAM
}

// instagram story photo
export const instagramStoryPhoto = {
  postType: PostType.STORY,
  media: [
    {
      id: '252e2a351c6c478584f29c4ec28fd8ef',
      url: 'https://amplorium.s3.amazonaws.com/u/af97be91e0fb410a85fcd61f5ce0365f/252e2a351c6c478584f29c4ec28fd8ef.png'
    }
  ],
  account: {
    name: 'Amplorium',
    url: 'https://amplorium.s3.amazonaws.com/u/970702e573774c03bc31029ccc8db202/facebook113072825141511.jpg'
  },
  socialType: SocialType.INSTAGRAM
}

// instagram reel
export const instagramReel = {
  postType: PostType.REEL,
  media: [
    {
      id: '5e3816df606941909bb19e14f44db756',
      url: 'https://amplorium.s3.amazonaws.com/u/af97be91e0fb410a85fcd61f5ce0365f/5e3816df606941909bb19e14f44db756.mp4'
    }
  ],
  description: '',
  account: {
    name: 'Amplorium',
    url: 'https://amplorium.s3.amazonaws.com/u/970702e573774c03bc31029ccc8db202/facebook113072825141511.jpg'
  },
  isMuted: true,
  socialType: SocialType.INSTAGRAM
}

// facebook empty media
export const facebookEmptyMedia = {
  postType: PostType.POST,
  description: 'Some description\r\n\r\n#test #super #lovewarsaw\r\nhttps://example.com',
  account: {
    name: 'Amplorium',
    url: 'https://amplorium.s3.amazonaws.com/u/970702e573774c03bc31029ccc8db202/facebook113072825141511.jpg'
  },
  socialType: SocialType.FACEBOOK
}

// facebook post photo
export const facebookPostPhoto = {
  postType: PostType.POST,
  media: [
    {
      id: '252e2a351c6c478584f29c4ec28fd8ef',
      url: 'https://amplorium.s3.amazonaws.com/u/af97be91e0fb410a85fcd61f5ce0365f/252e2a351c6c478584f29c4ec28fd8ef.png'
    }
  ],
  description: 'Some description\r\n\r\n#test #super #lovewarsaw\r\nhttps://example.com',
  account: {
    name: 'Amplorium',
    url: 'https://amplorium.s3.amazonaws.com/u/970702e573774c03bc31029ccc8db202/facebook113072825141511.jpg'
  },
  socialType: SocialType.FACEBOOK
}

// facebook post video
export const facebookPostVideo = {
  postType: PostType.POST,
  media: [
    {
      id: '5e3816df606941909bb19e14f44db756',
      url: 'https://amplorium.s3.amazonaws.com/u/af97be91e0fb410a85fcd61f5ce0365f/5e3816df606941909bb19e14f44db756.mp4'
    }
  ],
  description: 'Some description\r\n\r\n#test #super #lovewarsaw\r\nhttps://example.com',
  account: {
    name: 'Amplorium',
    url: 'https://amplorium.s3.amazonaws.com/u/970702e573774c03bc31029ccc8db202/facebook113072825141511.jpg'
  },
  isMuted: true,
  socialType: SocialType.FACEBOOK
}

// facebook post carousel
export const facebookPostCarousel = {
  postType: PostType.POST,
  media: [
    {
      id: '252e2a351c6c478584f29c4ec28fd8ef',
      url: 'https://amplorium.s3.amazonaws.com/u/af97be91e0fb410a85fcd61f5ce0365f/252e2a351c6c478584f29c4ec28fd8ef.png'
    },
    {
      id: '252e2a351c6c478584f29c4ec28fd8ef',
      url: 'https://amplorium.s3.amazonaws.com/u/af97be91e0fb410a85fcd61f5ce0365f/252e2a351c6c478584f29c4ec28fd8ef.png'
    },
    {
      id: '252e2a351c6c478584f29c4ec28fd8ef',
      url: 'https://amplorium.s3.amazonaws.com/u/af97be91e0fb410a85fcd61f5ce0365f/252e2a351c6c478584f29c4ec28fd8ef.png'
    },
    {
      id: '252e2a351c6c478584f29c4ec28fd8ef',
      url: 'https://amplorium.s3.amazonaws.com/u/af97be91e0fb410a85fcd61f5ce0365f/252e2a351c6c478584f29c4ec28fd8ef.png'
    },
    {
      id: '252e2a351c6c478584f29c4ec28fd8ef',
      url: 'https://amplorium.s3.amazonaws.com/u/af97be91e0fb410a85fcd61f5ce0365f/252e2a351c6c478584f29c4ec28fd8ef.png'
    },
    {
      id: '252e2a351c6c478584f29c4ec28fd8ef',
      url: 'https://amplorium.s3.amazonaws.com/u/af97be91e0fb410a85fcd61f5ce0365f/252e2a351c6c478584f29c4ec28fd8ef.png'
    }
  ],
  description: 'Some description\r\n\r\n#test #super #lovewarsaw\r\nhttps://example.com',
  account: {
    name: 'Amplorium',
    url: 'https://amplorium.s3.amazonaws.com/u/970702e573774c03bc31029ccc8db202/facebook113072825141511.jpg'
  },
  socialType: SocialType.FACEBOOK
}

// facebook reel
export const facebookReel = {
  postType: PostType.REEL,
  media: [
    {
      id: '5e3816df606941909bb19e14f44db756',
      url: 'https://amplorium.s3.amazonaws.com/u/af97be91e0fb410a85fcd61f5ce0365f/5e3816df606941909bb19e14f44db756.mp4'
    }
  ],
  description: 'Some description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n\r\n#test #super #lovewarsaw\r\nhttps://example.com',
  account: {
    name: 'Amplorium',
    url: 'https://amplorium.s3.amazonaws.com/u/970702e573774c03bc31029ccc8db202/facebook113072825141511.jpg'
  },
  isMuted: true,
  socialType: SocialType.FACEBOOK
}
