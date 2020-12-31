import React from 'react'

import PropTypes from 'prop-types'

import { StyledItem, StyledItemLeft, StyledItemRight, StyledDivider } from './styles'

const ProfileNavItem = ({ icon, divider, onClick, children }) => {
  if (divider) return <StyledDivider />

  const hasEventClick = !!onClick
  const handleClick = () => {
    if (hasEventClick) onClick()
  }

  return (
    <StyledItem onClick={handleClick} hasEventClick={hasEventClick ? 1 : 0}>
      <StyledItemLeft>{icon && icon}</StyledItemLeft>
      <StyledItemRight>{children}</StyledItemRight>
    </StyledItem>
  )
}

ProfileNavItem.defaultProps = {
  icon: null,
  divider: false,
  onClick: null,
  children: null,
}

ProfileNavItem.propTypes = {
  icon: PropTypes.node,
  divider: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default ProfileNavItem
