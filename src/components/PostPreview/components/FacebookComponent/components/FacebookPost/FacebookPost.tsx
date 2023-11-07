import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { parseDescription } from '../../../../PostPreview.utils'
import Avatar from '../../../../../Avatar'
import Paper from '../../../../../Paper'
import { ReactComponent as ReactionIcon } from '../../../../img/facebook-reaction-black.svg'
import { ReactComponent as LikeIcon } from '../../../../img/facebook-like-black.svg'
import Media from '../../../Media'
import { MediaValue, Post } from '../../../../../../types'
import { MediaPositioned, FacebookGrid } from './FacebookPost.style'
import { MEDIA_AMOUNT_TO_DISPLAY } from './constants'

interface FacebookPostProps {
  post: Post
  isVideoMuted: boolean | undefined
  onVideoMute: (muted: boolean | undefined) => void
}

const FacebookPost: React.FC<FacebookPostProps> = ({ post, isVideoMuted }) => {
  const parsedDescription = post.description !== undefined ? parseDescription(post.description) : null

  return (
        <Paper>
            <Box sx={{ padding: (theme) => `${theme.spacing(1.75)} ${theme.spacing(2.5)}` }}>
                <Avatar
                    src={post.account.url}
                    name={post.account.name}
                    secondaryText='Posted just now'
                />
                {parsedDescription !== null && (
                    <Box sx={{ whiteSpace: 'pre-wrap', marginTop: (theme) => theme.spacing(3.5) }}>
                        {(parsedDescription.text !== null) &&
                            <Typography variant='body2' sx={{ color: (theme) => theme.palette.black100 }}>{parsedDescription.text}</Typography>}
                        {(parsedDescription.hashtags !== null) &&
                            <Typography variant='body2' sx={{ color: (theme) => theme.palette.accent100 }}>{parsedDescription.hashtags}</Typography>}
                        {parsedDescription.links !== null &&
                            <Typography variant='body2' sx={{ color: (theme) => theme.palette.accent100 }}>{parsedDescription.links}</Typography>}
                    </Box>
                )}
            </Box>
            {(post.media !== undefined) && (post.media.length > 1)
              ? (
                    <FacebookGrid itemsCount={post.media.length}>
                        {(post.media.length > MEDIA_AMOUNT_TO_DISPLAY ? post.media.slice(0, MEDIA_AMOUNT_TO_DISPLAY - 1) : post.media).map((item: MediaValue) => (
                            <Media key={item.id} src={item.url} />
                        ))}
                          {post.media.length > MEDIA_AMOUNT_TO_DISPLAY && (
                            <Box sx={{ position: 'relative' }}>
                                <MediaPositioned src={post.media[MEDIA_AMOUNT_TO_DISPLAY].url} />
                                <Box sx={{
                                  position: 'absolute',
                                  left: '0',
                                  top: '0',
                                  width: '100%',
                                  height: '100%',
                                  backgroundColor: (theme) => theme.palette.black40,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center'
                                }}>
                                    <Typography sx={{
                                      fontSize: '32px',
                                      lineHeight: '20px',
                                      color: (theme) => theme.palette.white100
                                    }}>
                                        +{post.media.length - MEDIA_AMOUNT_TO_DISPLAY + 1}
                                    </Typography>
                                </Box>
                            </Box>
                          )}
                    </FacebookGrid>
                )
              : (
                    <Box sx={{ height: '360px' }}>
                        <Media src={post.media?.[0]?.url} isVideoMuted={isVideoMuted} />
                    </Box>
                )
            }
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: (theme) => `${theme.spacing(1.75)} ${theme.spacing(2.5)}` }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: (theme) => theme.spacing(1.875) }}>
                    <ReactionIcon/>
                    <LikeIcon/>
                </Box>
                <Typography variant='body2' sx={{ color: (theme) => theme.palette.black80 }}>128 shares</Typography>
            </Box>
        </Paper>
  )
}

export default FacebookPost
