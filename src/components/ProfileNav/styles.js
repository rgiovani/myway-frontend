import styled from 'styled-components'

export const StyledMenu = styled.div`
  float: left;
  position: absolute;
  top: 80px;
  transform: translate3d(-220px, 0px, 0px);
  padding: 26px 20px 10px 20px;
  width: 225px;
  background-color: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  box-shadow: 0 0 20px #e2e8f0;

  ::after {
    content: '';
    position: absolute;
    right: 14px;
    top: -6px;
    width: 8px;
    height: 8px;
    border-right: 1px solid #312e2e;
    border-top: 1px solid #312e2e;
    transform: rotate(-45deg);
    background-color: #fff;
    clear: both;
  }
`
