import PropTypes from 'prop-types';
import React from 'react'
import styled from 'styled-components'
import { getStyles } from '../utils'
import Text from '../Text'

const headerArr = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
const StyledHeading = styled.span.attrs({elementType: 'text'})`
  margin: 0px;
  ${getStyles}
`

const Heading = (props) => {
  const { header } = props
  return <StyledHeading {...props} as={headerArr[header - 1]} />
}
Heading.displayName = 'Heading'

//TODO: add proptypes from styles
Heading.propTypes = {
 name: PropTypes.string,
 value: PropTypes.string,
 type: PropTypes.string,
 disabled: PropTypes.string,
 autofocus: PropTypes.string,
 onClick:  PropTypes.func
}
export default Heading
