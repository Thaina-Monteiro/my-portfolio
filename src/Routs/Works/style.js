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

export const H1 = styled.h1`
    
    dislay: flex;
    text-align: center;
    margin: 90px 0px 0px 0px;
    color: #fafafa;
    font-size: 3.7rem;
    font-weight: 500;
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


export const Section = styled.section`
margin-top: 30px;
width: 85%;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;

`
export const Tudo = styled.div`
display: flex;
justify-content: center;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 15px;
    width: 400px;
    height: 450px;
    border-radius: 8px;
    border: 1px solid #171717;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    // transition: 0.3s ease;
    background-color: #222222;
    color: #fafafa;
    text-decoration: none;
    margin-top: 20px;

`

export const Img = styled.img`
  
  background-size: cover;
  background-repeat: no-repeat;
  // max-width: 100%;
  // min-height: 50%;
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  

`

export const Div = styled.div`
  padding: 10px 5px 0 3px;
  background-color: #222222;
`

export const H4 = styled.h4`
   text-align: center;
   font-size: 1.5rem;
    font-weight: 700;
    color: #FFD700;
    background-color: #222222;

`

export const P = styled.p`
   margin-top: 20px;
   font-size: 1rem;
   font-weight: 500;
   background-color: #222222;
   
   width: 350px;
   height: 80px;


`
export const Botao = styled.div`
   display: flex;
    // width: 100%;
    justify-content: space-between;
    background-color: #222222;
    margin: 20px 0;
    
    
`

export const Link = styled.a`
  padding: 10px 20px;
  margin-top: 10px;
  outline: none;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 8px;
  text-decoration: none;
  background-color: #212121;
  border: 1px solid #FFD700;
  color: #fafafa;
  &:hover{
    opacity: 0.8;
  }
`