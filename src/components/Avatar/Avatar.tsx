import React from 'react'
import MuiAvatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SxProps, Theme } from '@mui/material'

export interface AvatarProps {
  src: string
  name: string
  color?: string
  nameSx?: SxProps<Theme>
  secondaryText?: string
  size?: number
  inline?: boolean
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  secondaryText,
  color,
  nameSx,
  size = 34,
  inline = false
}) => {
  const secondaryTextElement = <Typography variant='caption' sx={{ color: (theme) => color ?? theme.palette.grey100 }}>{secondaryText}</Typography>

  return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: (theme) => theme.spacing(1.375) }}>
            <MuiAvatar
                src={src}
                alt={name}
                sx={{ width: size, height: size }}
            />
            <Box>
                <Typography variant='subtitle2' sx={{ color: (theme) => color ?? theme.palette.black100, ...(nameSx !== undefined && nameSx) }}>{name}</Typography>
                {(secondaryText !== undefined) && !inline && secondaryTextElement}
            </Box>
            {(secondaryText !== undefined) && inline && secondaryTextElement}
        </Box>
  )
}

export default Avatar
