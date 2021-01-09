import styled from 'styled-components'
import * as somethng from '../utils'

const Box = styled.div.attrs({elementType: 'box'})`
  ${somethng.getStyles}
`
Box.displayName = 'Box'

//TODO: add proptypes
Box.propTypes = {
}
export default Box
