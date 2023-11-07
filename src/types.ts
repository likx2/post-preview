export interface Post {
  socialType: SocialType
  postType: PostType
  account: Account
  media?: MediaValue[]
  description?: string
  isMuted?: boolean
}

export interface MediaValue {
  id: string
  url: string
}

export interface Account {
  name: string
  url: string
  secondaryText?: string
  date?: string
}

export enum SocialType {
  INSTAGRAM = 'INSTAGRAM',
  FACEBOOK = 'FACEBOOK',
}

export enum PostType {
  POST = 'POST',
  REEL = 'REEL',
  STORY = 'STORY'
}
