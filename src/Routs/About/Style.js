import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
@import url('@import url('https://fonts.googleapis.com/css2?family=Cookie&display=swap');'); 
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    background-color: #171717;
  }
`


export const Section = styled.section`
width: 45%;

margin: 110px 0px 0px 50px;
box-shadow:  5px 5px 5px #696969;
border: solid #878787;
@media (max-width: 780px) {
  width: 75%;
  margin: 95px 0px 0px 0px;
  padding:10px;
    
  }

`

export const H1 = styled.h1`
    margin: 0px 0px 20px 0px;
    color: #fafafa;
    font-size: 4rem;
    font-weight: 500;
    // padding: 15px 15px 0px 15px;
    text-align: center;
  letter-spacing: 2px;
  -webkit-animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-left 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @-webkit-keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @media (max-width: 780px) {
    font-size: 2.5rem;
   
  }
    
`
export const Span = styled.span`

  font-size: 6.5rem;
  color: #FFD700;
  @media (max-width: 780px) {
    font-size: 3rem;
   
  }
`;

export const P = styled.p`
font-size: 20px;
line-height: 2rem;
color: #cccccc;
// text-align: justify;
padding: 15px;
@media (max-width: 780px) {
  font-size: 18px;
  line-height: 1.5rem;
}

`;

export const Span2 = styled.span`

  color: #FFD700;
`;

// Segunda section
export const Main = styled.main`
display: flex;
align-items: center;
justify-content: space-evelyn;
// border:solid blue;
@media (max-width: 780px) {
  display: flex;
  flex-direction: column;
  align-items: center;
}
`;

export const SectionT = styled.section`

width: 45%;
margin: 125px 0px 25px 100px;
// border: solid red;
color: white;
@media (max-width: 780px) {
width: 75%;
margin: 60px 0px 0px 0px;
padding:10px;
  
}

`
export const H2 = styled.h2`
    margin: 0px 0px 20px 0px;
    color: #fafafa;
    font-size: 3.8rem;
    font-weight: 500;
  letter-spacing: 2px;
  @media (max-width: 780px) {
    font-size: 2.5rem;
    
  }
    
`
export const text = styled.p`
// border:red solid;
margin: 8px 0px 0px 10px;
display: flex;
align-items: center;
font-size: 20px;
line-height: 2rem;
color: #cccccc;
padding: 10px;
  &:hover{
  color:#FFD700;
  cursor:pointer;
  }
@media (max-width: 780px) {
  font-size: 18px;
  line-height: 1.5rem;
}

`;

export const ImgCSS = styled.img`
width:53px;


`
export const Imgreact = styled.img`
width:56px

`
export const Imgstylied = styled.img`
width:54px

`
export const Img = styled.img`


`