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
    
    
  }
`

export const Container = styled.section`
  margin-top: 5%;
  width: 100%;
  height: 34em%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 780px) {
    margin-top: 10%;
   
  }
  
  
  
`;
export const Social = styled.div`
  width: 6em;
  height: 25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
 
`;
export const Img = styled.img`
  width: 4em;
  cursor: pointer;
  transition: 1s all;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 780px) {
 
    width: 2.5rem;
   
  }
  
`;
export const Text = styled.div`
  width: 44%;
`;
export const Title = styled.h1`
 
  font-size: 7rem;
  letter-spacing: 15px;
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
 
    font-size: 6rem;   
  }
`;
export const Title2 = styled.h1`

  font-size: 7rem;
  width: 40%;
  letter-spacing: 13px;
  @media (max-width: 780px) {
 
    font-size: 5rem;
   
  }
`;
export const Span = styled.span`
  color: #FFD700;
`;
export const BoxImg = styled.figure`
  width: 25vw;
  height: 55vh;
  border-radius: 80%;
  margin: 0px 50px 0px 0px;
  

  
`;
export const Photo = styled.img`
  border: #FFD700 3px solid;
  border-radius: 90%;
  width: 28vw;
  height: 63vh;
  object-fit: cover;
  

  @media (max-width: 780px) {
 
    border-radius: 50%;
    width: 32vw;
    height: 28vh;
    margin-top: 105px;
   
  }
`;