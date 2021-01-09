import PropTypes from 'prop-types';
import React from 'react'
import styled from 'styled-components'
import * as somethng from '../utils'

const StyledButton = styled.button.attrs({elementType: 'button'})`
  ${somethng.getStyles}
`

const Button = (props) => {
  const { children, value } = props
  return <StyledButton {...props}>{children || value}</StyledButton>
}
Button.displayName = 'Button'

//TODO: add proptypes from styles
Button.propTypes = {
 name: PropTypes.string,
 value: PropTypes.string,
 type: PropTypes.string,
 disabled: PropTypes.string,
 autofocus: PropTypes.string,
 onClick:  PropTypes.func
}
export default Button
