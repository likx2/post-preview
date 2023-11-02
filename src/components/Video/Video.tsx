import React from 'react'

interface IVideoProps extends React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> {
  src?: string
}

const Video = React.forwardRef<HTMLVideoElement, IVideoProps>(({ src, ...rest }, ref) => {
  return (
        <video ref={ref} {...rest}>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
  )
})

Video.displayName = 'Video'

export default Video
