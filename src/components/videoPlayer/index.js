import React from 'react'

import { StyledVideo, StyledVideoContainer } from './styles'

import './styles.css'

export default function VideoPlayer({ url }) {
  return (
    <StyledVideoContainer>
      <StyledVideo src={url} controls />
    </StyledVideoContainer>
  )
}