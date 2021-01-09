import PropTypes from 'prop-types';
import React from 'react'
import styled from 'styled-components'
import * as somethng from '../utils'

const StyledLink = styled.a.attrs({elementType: 'link'})`
  ${somethng.getStyles}
`

const Link = (props) => {
  const { children, value } = props
  return <StyledLink {...props}>{children || value}</StyledLink>
}
Link.displayName = 'Link'

//TODO: add proptypes from styles
Link.propTypes = {
 download: PropTypes.string,
 href: PropTypes.string.isRequired,
 hreflang: PropTypes.string,
 ping: PropTypes.string,
 referrerpolicy: PropTypes.string,
 rel: PropTypes.string,
 target: PropTypes.string,
 type: PropTypes.string,
 onClick:  PropTypes.func
}
export default Link
