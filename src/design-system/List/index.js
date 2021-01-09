import PropTypes from 'prop-types';
import React from 'react'
import styled from 'styled-components'
import * as somethng from '../utils'

const StyledUl = styled.ul.attrs({elementType: 'list'})`
  ${somethng.getStyles}
`

const StyledLi = styled.li`
`

const List = (props) => {
  const {listType = 'ul', children} = props
  return (
    children
      ? <StyledUl as={listType} {...props}>
        {children}
      </StyledUl>
      : null
  )
}
List.displayName = 'List'

//TODO: add proptypes from styles
List.propTypes = {
}
export default List
