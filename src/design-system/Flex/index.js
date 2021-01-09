import styled from 'styled-components'
import * as somethng from '../utils'
import Box from '../Box'

//TODO: !important is one way to solve media query override issue. May be find a better solution???
const Flex = styled.div.attrs({elementType: 'flex'})`
  ${somethng.getStyles}
  display: flex !important;
`
Flex.displayName = 'Flex'

//TODO: add proptypes
Flex.propTypes = {
}
export default Flex
