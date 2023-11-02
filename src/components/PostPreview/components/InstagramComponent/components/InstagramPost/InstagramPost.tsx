import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Carousel from 'react-material-ui-carousel'
import Paper from '../../../../../Paper'
import { ISocialComponentProps } from '../../../../PostPreview'
import { ReactComponent as LikeIcon } from '../../../../img/instagram-like-black.svg'
import { ReactComponent as CommentIcon } from '../../../../img/instagram-comment-black.svg'
import { ReactComponent as ShareIcon } from '../../../../img/instagram-share-black.svg'
import { ReactComponent as SaveIcon } from '../../../../img/instagram-save-black.svg'
import { ReactComponent as LeftArrowIcon } from '../../../../img/left-arrow.svg'
import { ReactComponent as RightArrowIcon } from '../../../../img/right-arrow.svg'
import Avatar from '../../../../../Avatar'
import { isImage, isVideo, parseDescription } from '../../../../PostPreview.utils'
import Media from '../../../Media'
import styles from './InstagramPost.module.css'

const InstagramPost: FC<ISocialComponentProps> = ({ post, isVideoMuted, onVideoMute }) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const parsedDescription = post.description ? parseDescription(post.description) : null

  return (
        <Paper>
            <Box sx={{ padding: '14px 20px' }}>
                <Avatar
                    src={post.account.url}
                    name={post.account.name}
                    secondaryText='Posted just now'
                />
            </Box>
            {post.media?.length && post.media.length > 1
              ? (
                    <Carousel
                        autoPlay={false}
                        indicators
                        navButtonsAlwaysVisible
                        animation='slide'
                        fullHeightHover={false}
                        indicatorIconButtonProps={{
                          className: styles.dot
                        }}
                        activeIndicatorIconButtonProps={{
                          className: styles.activeDot
                        }}
                        indicatorContainerProps={{
                          className: styles.dotContainer
                        }}
                        onChange={(now) => {
                          if (now !== undefined) {
                            setActiveSlide(now)
                            if (isImage(post.media?.[now].url)) {
                              onVideoMute(undefined)
                            } else if (isVideo(post.media?.[now].url)) {
                              onVideoMute(true)
                            }
                          }
                        }}
                        NavButton={({ onClick, next, prev }) => {
                          return (
                                <button style={{ all: 'unset', cursor: 'pointer' }} onClick={onClick as any}>
                                    {prev && <LeftArrowIcon />}
                                    {next && <RightArrowIcon />}
                                </button>
                          )
                        }}
                    >
                        {post.media.map((item, index) => (
                            <Box sx={{ height: '523px' }} key={item.id}>
                               <Media
                                   src={item.url}
                                   isVideoMuted={activeSlide === index ? isVideoMuted : true}
                               />
                            </Box>
                        ))}
                    </Carousel>
                )
              : (
                    <Box sx={{ height: '523px' }}>
                        <Media src={post.media?.[0].url} isVideoMuted={isVideoMuted} />
                    </Box>
                )
            }
            <Box sx={{ padding: '14px 20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <LikeIcon />
                        <CommentIcon />
                        <ShareIcon />
                    </Box>
                    <SaveIcon/>
                </Box>
                <Typography variant='subtitle2' sx={{ fontWeight: '600', marginTop: '14px' }}>128 likes</Typography>
                {parsedDescription && (
                    <Box sx={{ marginTop: '14px', whiteSpace: 'pre-wrap' }}>
                        {parsedDescription.text && <Typography variant='body2' sx={{ color: '#1D1D1D' }}>{parsedDescription.text}</Typography>}
                        {parsedDescription.hashtags && <Typography variant='body2' sx={{ color: '#748BF0' }}>{parsedDescription.hashtags}</Typography>}
                        {parsedDescription.links && <Typography variant='body2' sx={{ color: '#748BF0' }}>{parsedDescription.links}</Typography>}
                    </Box>
                )}
            </Box>
        </Paper>
  )
}

export default InstagramPost
