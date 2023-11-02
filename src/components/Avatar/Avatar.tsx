import React, { FC } from 'react'
import MuiAvatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SxProps, Theme } from '@mui/material'

export interface IAvatarProps {
  src: string
  name: string
  color?: string
  nameSx?: SxProps<Theme>
  secondaryText?: string
  size?: number
  inline?: boolean
}

const Avatar: FC<IAvatarProps> = ({
  src,
  name,
  secondaryText,
  color,
  nameSx,
  size = 34,
  inline = false
}) => {
  return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
            <MuiAvatar
                src={src}
                alt={name}
                sx={{ width: size, height: size }}
            />
            <Box>
                <Typography variant='subtitle2' sx={{ color: color ?? '#292A3A', ...(nameSx !== undefined && nameSx) }}>{name}</Typography>
                {(secondaryText !== undefined) && !inline && <Typography variant='caption' sx={{ color: color ?? '#A29FB6' }}>{secondaryText}</Typography>}
            </Box>
            {(secondaryText !== undefined) && inline && <Typography variant='caption' sx={{ color: color ?? '#A29FB6' }}>{secondaryText}</Typography>}
        </Box>
  )
}

export default Avatar
