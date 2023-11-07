import React from 'react'

interface VideoProps extends React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> {
  src?: string
}

const Video = React.forwardRef<HTMLVideoElement, VideoProps>(({ src, ...rest }, ref) => {
  return (
        <video ref={ref} {...rest}>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
  )
})

Video.displayName = 'Video'

export default Video
