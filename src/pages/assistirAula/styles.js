import styled from 'styled-components'


export const StyledContent = styled.div`
    /* margin: 30px; */
`

export const StyledListContainer = styled.div`
    background: #28ACD8;
    width: 50%;
    height: 100vh;

    padding: 0 30px;

    @media only screen and (max-width: 800px) {
        width: auto;
        height: auto;
        padding: 20px 20px;
   }
`

export const StyledDivider = styled.div`
    height: 1px;
    border-bottom: 1px solid #fff;
`

export const StyledFlex = styled.div`
    display: flex;

   @media only screen and (max-width: 800px) {
    flex-direction: column;
   }
`

export const StyledVideoDescription = styled.div`
    margin-left: 30px;
    @media only screen and (max-width: 800px) {
        margin-bottom: 30px
    }
`