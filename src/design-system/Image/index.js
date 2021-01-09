import PropTypes from 'prop-types';
import React from 'react'
import styled from 'styled-components'
import * as somethng from '../utils'

const StyledImage = styled.img.attrs({elementType: 'image'})`
  ${somethng.getStyles}
`

const Image = (props) => {
  return <StyledImage {...props} />
}
Image.displayName = 'Image'

//TODO: add proptypes from styles
Image.propTypes = {
 alt: PropTypes.string,
 crossorigin: PropTypes.string,
 ismap: PropTypes.string,
 loading: PropTypes.string,
 longdesc: PropTypes.string,
 referrerpolicy: PropTypes.string,
 sizes: PropTypes.string,
 src: PropTypes.string.isRequired,
 srcset: PropTypes.array,
 usemap: PropTypes.string 
}
export default Image
