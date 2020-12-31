import React from 'react'

import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const variants = {
  default: css`
    font-size: 1.2rem;
    ${props =>
      props.active &&
      css`
        border-bottom: 4px solid #fff;
      `}

    ${props =>
      !props.active &&
      css`
        opacity: 0.5;
      `}

    :not(:last-child) {
      margin-right: 16px;
      height: 100%;
    }
  `,
  header: css`
    letter-spacing: 0.09rem;
    font-size: 1rem;
    font-family: Signika, sans-serif;

    ${props =>
      !props.active &&
      css`
        opacity: 1;
      `}
  `,
}

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  ${props =>
    props.fullWidth &&
    css`
      justify-content: space-between;
    `}
`
const StyledItem = styled.a`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  box-sizing: content-box;

  color: #fff;
  border-bottom: 4px solid transparent;

  ${props => variants[props.variant]}

  ${props =>
    !props.fullWidth &&
    css`
      :not(:last-child) {
        margin-right: 45px;
      }
    `}

  ${props =>
    !props.enabled &&
    css`
      cursor: not-allowed;
      opacity: 0.4;
    `}
`

const Nav = ({ onChange, selected, variant, items, fullWidth }) => {
  const handleClick = (item, key, enabled) => e => {
    if (enabled) onChange(item, key, e)
  }

  return (
    <StyledWrapper variant={variant} fullWidth={fullWidth ? 1 : 0}>
      {Object.keys(items).map(key => {
        const active = selected === key ? true : null
        const item = items[key]
        const enabled = item.hasOwnProperty('enable') ? item.enable : true
        return (
          <StyledItem
            key={key}
            onClick={handleClick(item, key, enabled)}
            active={active}
            variant={variant}
            enabled={enabled}
            mr={['2px', '14px', '20px', '36px']}
            fullWidth={fullWidth ? 1 : 0}
          >
            <div>{item.label}</div>
          </StyledItem>
        )
      })}
    </StyledWrapper>
  )
}

Nav.defaultProps = {
  onChange: () => {},
  selected: null,
  variant: 'default',
  fullWidth: false,
}

Nav.propTypes = {
  onChange: PropTypes.func,
  selected: PropTypes.string,
  variant: PropTypes.oneOf(['header', 'default']),
  items: PropTypes.shape({
    label: PropTypes.string,
  }).isRequired,
  fullWidth: PropTypes.bool,
}

export default Nav
