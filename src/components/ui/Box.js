import styled from 'styled-components'
import { color, space, position, typography, layout, borderRadius } from 'styled-system'

const Box = styled.div`
  ${color}
  ${space}
  ${position}
  ${typography}
  ${layout}
  ${borderRadius}
  box-sizing: border-box;
`

export default Box
