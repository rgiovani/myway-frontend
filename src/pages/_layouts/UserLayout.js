import React from 'react'

import PropTypes from 'prop-types'

import Header from '../../components/header'

export default function UserLayout({ children }) {
  return (
    <>
      <Header />
      <>{children}</>
    </>
  )
}

UserLayout.propTypes = {
  children: PropTypes.element.isRequired,
}
