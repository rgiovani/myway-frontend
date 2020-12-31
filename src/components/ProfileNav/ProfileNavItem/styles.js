import styled from 'styled-components'

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  height: 34px;
  margin: 0 -10px 0 -10px;
  cursor: ${props => (props.hasEventClick ? 'pointer' : 'default')};
  transition: background-color 0.3s ease-out;
  :hover {
    background-color: #dadada;
  }
`

export const StyledItemLeft = styled.div`
  width: 26px;
  color: #28acd8;
`

export const StyledItemRight = styled.div`
  width: auto;
  color: #28acd8;
`

export const StyledDivider = styled.div`
  border-top: 1px solid #847f7f;
  opacity: 60%;
  height: 1px;
  margin: 8px -10px 8px -10px;
  padding: 0;
`
