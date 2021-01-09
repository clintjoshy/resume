import styled from 'styled-components'
import {getStyles} from '../utils'

const Relative = styled.div.attrs({elementType: 'box'})`
  ${getStyles}
  position: relative;
`
Relative.displayName = 'Relative'

//TODO: add proptypes
Relative.propTypes = {
}
export default Relative
