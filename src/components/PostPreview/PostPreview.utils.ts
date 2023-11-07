export const isImage = (url: string | undefined): boolean => {
  if (url === undefined) return false
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url)
}

export const isVideo = (url: string | undefined): boolean => {
  if (url === undefined) return false
  return /\.(mp4)$/.test(url)
}

export const getHashtags = (text: string): string | null => {
  return text.match(/#\w+/g)?.join(' ') ?? null
}

export const getLinks = (text: string): string | null => {
  return text.match(/https?:\/\/\S+/g)?.join('') ?? null
}

export const getDescriptionText = (text: string): string | null => {
  if (getHashtags(text) !== null) {
    return text.match(/^[^#]+/)?.[0] ?? null
  } else if (getLinks(text) !== null) {
    return text.match(/^[^https?]+/)?.[0] ?? null
  }

  return text
}

export const parseDescription = (description: string): {
  hashtags: string | null
  links: string | null
  text: string | null
} => ({
  hashtags: getHashtags(description),
  links: getLinks(description),
  text: getDescriptionText(description)
})
