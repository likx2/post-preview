import React, { DetailedHTMLProps, ImgHTMLAttributes, forwardRef } from 'react'

type IImageProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

const Image = forwardRef<HTMLImageElement, IImageProps>((props, ref) => {
  return <img ref={ref} {...props} />
})

Image.displayName = 'Image'

export default Image
