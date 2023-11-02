import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { parseDescription } from '../../../../PostPreview.utils'
import Avatar from '../../../../../Avatar'
import Paper from '../../../../../Paper'
import { ISocialComponentProps } from '../../../../PostPreview'
import { ReactComponent as ReactionIcon } from '../../../../img/facebook-reaction-black.svg'
import { ReactComponent as LikeIcon } from '../../../../img/facebook-like-black.svg'
import Media from '../../../Media'
import styles from './FacebookPost.module.css'

const MEDIA_AMOUNT_TO_DISPLAY = 5

const getGridClassName = (itemsCount: number): string => {
  if (itemsCount > MEDIA_AMOUNT_TO_DISPLAY) {
    return styles[`grid${MEDIA_AMOUNT_TO_DISPLAY}`]
  }

  return styles[`grid${itemsCount}`]
}

const FacebookPost: FC<ISocialComponentProps> = ({ post, isVideoMuted }) => {
  const parsedDescription = post.description !== undefined ? parseDescription(post.description) : null

  return (
        <Paper>
            <Box sx={{ padding: '14px 20px' }}>
                <Avatar
                    src={post.account.url}
                    name={post.account.name}
                    secondaryText='Posted just now'
                />
                {parsedDescription !== null && (
                    <Box sx={{ whiteSpace: 'pre-wrap', marginTop: '28px' }}>
                        {(parsedDescription.text !== null) &&
                            <Typography variant='body2' sx={{ color: '#1D1D1D' }}>{parsedDescription.text}</Typography>}
                        {(parsedDescription.hashtags !== null) &&
                            <Typography variant='body2' sx={{ color: '#748BF0' }}>{parsedDescription.hashtags}</Typography>}
                        {parsedDescription.links !== null &&
                            <Typography variant='body2' sx={{ color: '#748BF0' }}>{parsedDescription.links}</Typography>}
                    </Box>
                )}
            </Box>
            {(post.media !== undefined) && (post.media.length > 1)
              ? (
                    <Box sx={{ height: '360px' }} className={`${styles.grid} ${getGridClassName(post.media.length)}`}>
                        {(post.media.length > MEDIA_AMOUNT_TO_DISPLAY ? post.media.slice(0, MEDIA_AMOUNT_TO_DISPLAY - 1) : post.media).map(item => (
                            <Media key={item.id} src={item.url} />
                        ))}
                          {post.media.length > MEDIA_AMOUNT_TO_DISPLAY && (
                            <Box sx={{ position: 'relative' }}>
                                <Media src={post.media[MEDIA_AMOUNT_TO_DISPLAY].url} />
                                  <Box sx={{
                                    position: 'absolute',
                                    left: '0',
                                    top: '0',
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.40)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                  }}>
                                    <Typography sx={{
                                      fontSize: '32px',
                                      lineHeight: '20px',
                                      color: '#FFF'
                                    }}>
                                        +{post.media.length - MEDIA_AMOUNT_TO_DISPLAY + 1}
                                    </Typography>
                                  </Box>
                            </Box>
                          )}
                    </Box>
                )
              : (
                    <Box sx={{ height: '360px' }}>
                        <Media src={post.media?.[0].url} isVideoMuted={isVideoMuted} />
                    </Box>
                )
            }
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <ReactionIcon/>
                    <LikeIcon/>
                </Box>
                <Typography variant='body2' sx={{ color: '#292a3acc' }}>128 shares</Typography>
            </Box>
        </Paper>
  )
}

export default FacebookPost
