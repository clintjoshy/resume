import styled from 'styled-components'
import { getStyles } from '../utils'

const Text = styled.span.attrs({elementType: 'text'})`
  ${getStyles}
`
Text.displayName = 'Text'

//TODO: add proptypes
Text.propTypes = {
}
export default Text
