import React from 'react'
import { PaperProps } from '@mui/material/Paper'
import { PaperStyled } from './Paper.style'

const Paper: React.FC<PaperProps> = (props) => (
    <PaperStyled elevation={0} {...props} />
)

export default Paper
