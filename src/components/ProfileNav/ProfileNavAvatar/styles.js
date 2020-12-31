import styled from 'styled-components'

export const StyledImage = styled.div`
  display: block;
  position: relative;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  padding: 0;
  cursor: pointer;

  ::after {
    content: '';
    background: #fff;
    background-size: cover;
    background-position: center;
    opacity: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    border-radius: 50%;
  }

  :hover {
    box-shadow: 0 0 4px #312e2e;
    ::after {
      opacity: 0.9;
    }
  }

  box-sizing: content-box;
  box-shadow: ${props => (props.opened ? `0 0 4px #312E2E` : 'none')};
`
