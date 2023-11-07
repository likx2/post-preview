import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import Paper from '../../../../../Paper'
import { ReactComponent as LikeIcon } from '../../../../img/instagram-like-black.svg'
import { ReactComponent as CommentIcon } from '../../../../img/instagram-comment-black.svg'
import { ReactComponent as ShareIcon } from '../../../../img/instagram-share-black.svg'
import { ReactComponent as SaveIcon } from '../../../../img/instagram-save-black.svg'
import { ReactComponent as LeftArrowIcon } from '../../../../img/left-arrow.svg'
import { ReactComponent as RightArrowIcon } from '../../../../img/right-arrow.svg'
import Avatar from '../../../../../Avatar'
import { isImage, isVideo, parseDescription } from '../../../../PostPreview.utils'
import Media from '../../../Media'
import { ArrowButton, InstagramCarousel } from './InstagramPost.style'
import { Post } from '../../../../../../types'

interface InstagramPostProps {
  post: Post
  isVideoMuted: boolean | undefined
  onVideoMute: (muted: boolean | undefined) => void
}

const InstagramPost: React.FC<InstagramPostProps> = ({ post, isVideoMuted, onVideoMute }) => {
  const [activeSlide, setActiveSlide] = React.useState(0)
  const theme = useTheme()
  const parsedDescription = post.description !== undefined ? parseDescription(post.description) : null

  return (
        <Paper>
            <Box sx={{ padding: (theme) => `${theme.spacing(1.75)} ${theme.spacing(2.5)}` }}>
                <Avatar
                    src={post.account.url}
                    name={post.account.name}
                    secondaryText='Posted just now'
                />
            </Box>
            {(post.media !== undefined) && (post.media.length > 1)
              ? (
                    <InstagramCarousel
                        autoPlay={false}
                        cycleNavigation={false}
                        indicators
                        navButtonsAlwaysVisible
                        animation='slide'
                        fullHeightHover={false}
                        activeIndicatorIconButtonProps={{
                          style: {
                            color: theme.palette.white100
                          }
                        }}
                        indicatorContainerProps={{
                          style: {
                            position: 'absolute',
                            bottom: '10px',
                            left: '0',
                            zIndex: '1',
                            display: 'flex',
                            justifyContent: 'center',
                            gap: theme.spacing(0.875)
                          }
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
                        navButtonsWrapperProps={{
                          style: {
                            display: 'flex',
                            alignItems: 'center'
                          }
                        }}
                        NavButton={({ onClick, next, prev }) => {
                          return (
                              <Box sx={{ padding: (theme) => `0 ${theme.spacing(2.5)}` }}>
                                  <ArrowButton role='button' tabIndex={0} onClick={(e) => onClick(e)}>
                                      {Boolean(prev) && <LeftArrowIcon />}
                                      {Boolean(next) && <RightArrowIcon />}
                                  </ArrowButton>
                              </Box>
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
                    </InstagramCarousel>
                )
              : (
                    <Box sx={{ height: '523px' }}>
                        <Media src={post.media?.[0]?.url} isVideoMuted={isVideoMuted} />
                    </Box>
                )
            }
            <Box sx={{ padding: (theme) => `${theme.spacing(1.75)} ${theme.spacing(2.5)}` }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: (theme) => theme.spacing(1.875) }}>
                        <LikeIcon />
                        <CommentIcon />
                        <ShareIcon />
                    </Box>
                    <SaveIcon/>
                </Box>
                <Typography variant='subtitle2' sx={{ fontWeight: (theme) => theme.typography.fontWeightBold, color: (theme) => theme.palette.black100, marginTop: (theme) => theme.spacing(1.75) }}>128 likes</Typography>
                {parsedDescription !== null && (
                    <Box sx={{ marginTop: (theme) => theme.spacing(1.75), whiteSpace: 'pre-wrap' }}>
                        {parsedDescription.text !== null && <Typography variant='body2' sx={{ color: (theme) => theme.palette.black100 }}>{parsedDescription.text}</Typography>}
                        {parsedDescription.hashtags !== null && <Typography variant='body2' sx={{ color: (theme) => theme.palette.accent100 }}>{parsedDescription.hashtags}</Typography>}
                        {parsedDescription.links !== null && <Typography variant='body2' sx={{ color: (theme) => theme.palette.black100 }}>{parsedDescription.links}</Typography>}
                    </Box>
                )}
            </Box>
        </Paper>
  )
}

export default InstagramPost
