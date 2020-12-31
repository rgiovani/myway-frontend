import styled from "styled-components";

export const StyledBackground = styled.div`
background: #28ACD8;
padding: 30px;
`;

export const StyledBreadcrumb = styled.div`
display: flex;
align-items: center;
color: #fff
`;

export const StyledContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 1rem;
`;

export const StyledCourseInfo = styled.div`
color: #fff;
max-width: 800px;
`;

export const StyledRating = styled.div`
display: flex;
align-items: center;
margin-top: 1rem;
`

export const StyledCourseImage = styled.img`
width: 300px;
height: 200px;
border: 1px solid #000000;
border-radius: 15px;
background: #fff;

display: flex;
align-items: center;
justify-content: center;

@media only screen and (max-width: 425px) {
width: 100px;
height: 100px;
}
`

export const StyledContent = styled.div`
margin: 30px 100px;
`

export const StyledLearn = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

background: #FBFBF8;
border: 1px solid #DCDACB;
border-radius: 15px;
padding: 20px;

@media only screen and (max-width: 320px) {
max-width: 200px;
}

`

export const StyledListing = styled.div`
display: grid;
grid-template-columns: auto auto;
row-gap: 2rem;
column-gap: 20rem;
margin-top: 2rem;

@media only screen and (max-width: 425px) {
column-gap: 4rem;
}
`

export const StyledCourseContent = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: 2rem;

@media only screen and (max-width: 320px) {
max-width: 200px;
}
`

export const StyledCourseDescription = styled.div`
display: flex;
flex-direction: column;
margin-top: 2rem;

@media only screen and (max-width: 320px) {
max-width: 200px;
}
`
export const StyledCourseRequisites = styled.div`
display: flex;
flex-direction: column;
margin-top: 2rem;

@media only screen and (max-width: 320px) {
max-width: 200px;
}
`
export const StyledCourseFocus = styled.div`
display: flex;
flex-direction: column;
margin-top: 2rem;

@media only screen and (max-width: 320px) {
max-width: 200px;
}
`
