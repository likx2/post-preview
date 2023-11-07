import React from 'react'

type ImageProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

const Image = React.forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  return <img ref={ref} {...props} />
})

Image.displayName = 'Image'

export default Image
