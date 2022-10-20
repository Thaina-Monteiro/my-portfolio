import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

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
`;

export const Header = styled.header`
    position: fixed;
    top: 0;
    padding: 15px 80px;
    width: 100%;
    border-bottom: 1px solid white;
    opacity: 0.97;
    z-index: 99;
    background-color: #171717;
`
export const Nav = styled.nav`

    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0px 50px 0px 50px;
    @media (max-width: 1000px) {
      display: flex;
      justify-content: ;
      width: 100%;
      align-items: center;
      margin: 0px ;
    }

`


export const Ul = styled.ul`
display: flex;
width: 32%;
justify-content: space-between;
@media (max-width: 1000px) {
 
  width: 100%;
 
}
`

export const Li = styled.li`

font-size: 1.6rem;
font-weight: 00;


` 
export const rota = styled(Link)`
color: #FFD700;
  &:hover{
  color:#e5e5e5;
  }
`
