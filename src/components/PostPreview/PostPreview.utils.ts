export const isImage = (url: string | undefined) => {
  if (!url) return false
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url)
}

export const isVideo = (url: string | undefined) => {
  if (!url) return false
  return /\.(mp4)$/.test(url)
}

export const getHashtags = (text: string) => {
  return text.match(/#\w+/g)?.join('') ?? null
}

export const getLinks = (text: string) => {
  return text.match(/https?:\/\/\S+/g)?.join('') ?? null
}

export const getDescriptionText = (text: string) => {
  return text.match(/^[\s\S]*?(?=#)/)?.[0] ?? null
}

export const parseDescription = (description: string) => {
  return {
    hashtags: getHashtags(description),
    links: getLinks(description),
    text: getDescriptionText(description)
  }
}
