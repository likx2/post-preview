import React from 'react'

type IImageProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

const Image = React.forwardRef<HTMLImageElement, IImageProps>((props, ref) => {
  return <img ref={ref} {...props} />
})

Image.displayName = 'Image'

export default Image
