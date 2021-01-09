import styled from 'styled-components'
import {getStyles} from '../utils'

const Absolute = styled.div.attrs({elementType: 'box'})`
  ${getStyles}
  position: absolute;
`
Absolute.displayName = 'Absolute'

//TODO: add proptypes
Absolute.propTypes = {
}
export default Absolute
