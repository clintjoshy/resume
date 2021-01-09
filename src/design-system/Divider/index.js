import styled from 'styled-components'
import {getStyles} from '../utils'

const Divider = styled.hr.attrs({elementType: 'box'})`
  ${getStyles}
  &:after {
    content: ${({contentStyle}) => contentStyle?.content};
    padding: ${({contentStyle}) => contentStyle?.padding};
    position: ${({contentStyle}) => contentStyle?.position};
    top: ${({contentStyle}) => contentStyle?.top};
    background: ${({contentStyle}) => contentStyle?.background};
    color:  ${({contentStyle}) => contentStyle?.color};
  }
`
Divider.displayName = 'Divider'

//TODO: add proptypes
Divider.propTypes = {
}
export default Divider
