import styled from 'styled-components'
import { space, color } from 'styled-system'

export const Container = styled.div.attrs(props => ({
  padding: props.padding || `0 16px`,
}))`
  display: block;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  width: 100%;
  padding: ${props => props.padding};

  @media (min-width: 0) {
    max-width: 100%;
  }

  ${space}
  ${color}
`
// TODO There's a problem if the gutter is greater than 16
export const Row = styled.div.attrs(props => {
  const value = props.gutter || 0
  return {
    gutter: Array.isArray(value) ? value : [value, value],
  }
})`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-right: -${props => props.gutter[0]}px;
  margin-left: -${props => props.gutter[0]}px;
  margin-bottom: -${props => props.gutter[1]}px;
  > * {
    box-sizing: border-box;
    padding-right: ${props => props.gutter[0]}px;
    padding-left: ${props => props.gutter[0]}px;
    padding-bottom: ${props => props.gutter[1] * 2}px;
  }
`

export const Col = styled.div`
  flex: 0 0 auto;
  flex-basis: ${props => (props.span * 100) / 12}%;
  max-width: ${props => (props.span * 100) / 12}%;
  border: 1px solid none;
  box-sizing: border-box;
`

export default Container // TODO remove this "export default" after fix all imports
