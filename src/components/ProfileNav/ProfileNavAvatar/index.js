import React from 'react'

import PropTypes from 'prop-types'

import { StyledImage } from './styles'

const ProfileNavAvatar = ({ opened }) => {
  return <StyledImage opened={opened ? 1 : 0} />
}

ProfileNavAvatar.defaultProps = {
  opened: false,
}

ProfileNavAvatar.propTypes = {
  opened: PropTypes.bool,
}

export default ProfileNavAvatar
