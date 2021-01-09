import styled from 'styled-components'
import {getStyles} from '../utils'

const Overlay = styled.div.attrs({elementType: 'box'})`
  ${getStyles}
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`
Overlay.displayName = 'Overlay'

//TODO: add proptypes
Overlay.propTypes = {
}
export default Overlay
