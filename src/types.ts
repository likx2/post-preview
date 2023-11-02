export interface IPost {
  socialType: SocialType
  postType: PostType
  account: IAccount
  media?: IMediaValue[]
  description?: string
  isMuted?: boolean
}

export interface IMediaValue {
  id: string
  url: string
}

export interface IAccount {
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
