import React from 'react'
import {useSelector} from "react-redux";
import { Route, Redirect } from 'react-router-dom'

import PropTypes from 'prop-types'

import AuthLayout from '../pages/_layouts/AuthLayout'
import UserLayout from '../pages/_layouts/UserLayout'

export default function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  const signed = useSelector(state => state.auth.signed)

  if (!signed && isPrivate) {
    return <Redirect to="/login" />
  }

  if (signed && !isPrivate) {
    return <Redirect to="/" />
  }

  const Layout = signed ? UserLayout : AuthLayout

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isPrivate: PropTypes.bool,
}

RouteWrapper.defaultProps = {
  isPrivate: false,
}
