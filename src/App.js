import React from "react";
import Home from './Routs/Home/Home';
import About from './Routs/About/About';
import Works from './Routs/Works/Works';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import * as S from "./Componets/Header/Style";


function App() {
  return (
    <BrowserRouter>
      <S.GlobalStyle />
      <S.Header>

        <S.Nav>
          <S.Ul>
            <S.Li>
              <S.rota to="/">Home</S.rota>
            </S.Li>
            <S.Li>
              <S.rota to="/About">About</S.rota>
            </S.Li>
            <S.Li>
              <S.rota to="/Works">Works</S.rota>
            </S.Li>
          </S.Ul>
        </S.Nav>

      </S.Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Works" element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
