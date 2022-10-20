import React from "react";
import * as S from "../Works/style";
import Nasa from './imgs/Apod.png';
import Lol from './imgs/lool.png';
import Port from './imgs/port.png';
import Quiz from './imgs/quiz.png';
import Codi from './imgs/codi.png';
import Site from './imgs/site.png';
import Api from './imgs/api.png';
import Todo from './imgs/todo.png';

function Works() {
  return (
    <div>
      <S.GlobalStyle />
      <S.H1>Projetos <S.Span>.</S.Span></S.H1>
      <S.Tudo>
        <S.Section>
          <S.Card >
            <S.Img src={Nasa} alt="API Nasa" />
            <S.Div >
              <S.H4>API da Nasa</S.H4>
              <S.P> Aplicação para retornar "Foto Astronômica do Dia" de
                acordo com a data buscada pelo usuário, para isso é utilizado a API do projeto APoD da Nasa.
              </S.P>
              <S.Botao>
                <S.Link rel="noreferrer" href="https://thaina-monteiro.github.io/APOD_mod2/"
                  target="_blank">View Live</S.Link>
                <S.Link rel="noreferrer" href="https://github.com/Thaina-Monteiro/APOD_mod2"
                  target="_blank">GitHub Repo</S.Link>
              </S.Botao>
            </S.Div>

          </S.Card>

          <S.Card >
            <S.Img src={Site} alt="projeto" />
            <S.Div >
              <S.H4>Site Front-Enders</S.H4>
              <S.P> Desenvolvimento de um front-end para apresentar um novo produto lançado pela empresa fictícia chamada "FrontEnders".
                Site desenvolvido em grupo.
              </S.P>
              <S.Botao>
                <S.Link rel="noreferrer" href="https://thaina-monteiro.github.io/Projeto_modulo2/"
                  target="_blank">View Live</S.Link>
                <S.Link rel="noreferrer" href="https://github.com/Thaina-Monteiro/Projeto_modulo2"
                  target="_blank">GitHub Repo</S.Link>
              </S.Botao>
            </S.Div>

          </S.Card>

          <S.Card >
            <S.Img src={Quiz} alt="projeto" />
            <S.Div >
              <S.H4>Quizz</S.H4>
              <S.P> Jogo/Quizz sobre os filmes do Chucky, que foi apresentado como projeto final do
                 Módulo 1 do curso de Desenvolvimento Web Full-Stack da Resilia Educação.
              </S.P>
              <S.Botao>
                <S.Link rel="noreferrer" href="https://thaina-monteiro.github.io/projetofinal/index.html"
                  target="_blank">View Live</S.Link>
                <S.Link rel="noreferrer" href="https://github.com/Thaina-Monteiro/projetofinal"
                  target="_blank">GitHub Repo</S.Link>
              </S.Botao>
            </S.Div>

          </S.Card>

          <S.Card >
            <S.Img src={Todo} alt="projeto" />
            <S.Div >
              <S.H4>To Do List</S.H4>
              <S.P> Lista de afazeres com a função de adicionar e remover terefas.
              </S.P>
              <S.Botao>
                <S.Link rel="noreferrer" href="https://codesandbox.io/s/github/Thaina-Monteiro/To-Do-List"
                  target="_blank">View Live</S.Link>
                <S.Link rel="noreferrer" href="https://github.com/Thaina-Monteiro/To-Do-List"
                  target="_blank">GitHub Repo</S.Link>
              </S.Botao>
            </S.Div>

          </S.Card>

          <S.Card >
            <S.Img src={Codi} alt="projeto" />
            <S.Div >
              <S.H4>Máquina de Codificar/Decodificar.</S.H4>
              <S.P>Aplicação para codificar e decodificar mensagens escritas em Base 64 
                e Cifra de César. 
                {/* usando conhecimentos de DOM(Javascript). */}
              </S.P>
              <S.Botao>
                <S.Link rel="noreferrer" href="https://thaina-monteiro.github.io/Decodificador/"
                  target="_blank">View Live</S.Link>
                <S.Link rel="noreferrer" href="https://github.com/Thaina-Monteiro/Decodificador"
                  target="_blank">GitHub Repo</S.Link>
              </S.Botao>
            </S.Div>

          </S.Card>

          <S.Card >
            <S.Img src={Api} alt="projeto" />
            <S.Div >
              <S.H4>API Harry Potter</S.H4>
              <S.P>Neste site você pode encontrar os principais personagens da saga Harry Potter.
                Projeto criado a fim de treinar o uso do API com React Hooks.
              </S.P>
              <S.Botao>
                <S.Link rel="noreferrer" href="https://codesandbox.io/s/github/Thaina-Monteiro/API-HarryPotter"
                  target="_blank">View Live</S.Link>
                <S.Link rel="noreferrer" href="https://github.com/Thaina-Monteiro/API-HarryPotter"
                  target="_blank">GitHub Repo</S.Link>
              </S.Botao>
            </S.Div>

          </S.Card>

          <S.Card >
            <S.Img src={Port} alt="projeto" />
            <S.Div >
              <S.H4>Landing Page</S.H4>
              <S.P> Desafio final do módulo 1 do curso Vai Na Web, o site utiliza apenas HTML e CSS.
              </S.P>
              <S.Botao>
                <S.Link rel="noreferrer" href="https://thaina-monteiro.github.io/PortFlow/"
                  target="_blank">View Live</S.Link>
                <S.Link rel="noreferrer" href="https://github.com/Thaina-Monteiro/PortFlow"
                  target="_blank">GitHub Repo</S.Link>
              </S.Botao>
            </S.Div>
          </S.Card>

           {/* Começo */}

          <S.Card >
            <S.Img src={Lol} alt="projeto" />
            <S.Div >
              <S.H4>Login</S.H4>
              <S.P> Recriando o login do lol para treinar HTML, CSS e lógica de programação com JavaScript.
              </S.P>
              <S.Botao>
                <S.Link rel="noreferrer" href="https://thaina-monteiro.github.io/lol-client-login/"
                  target="_blank">View Live</S.Link>
                <S.Link rel="noreferrer" href="https://github.com/Thaina-Monteiro/lol-client-login"
                  target="_blank">GitHub Repo</S.Link>
              </S.Botao>
            </S.Div>

          </S.Card>

          {/* Fim */}
          

        </S.Section>
      </S.Tudo>

    </div>
  );
}

export default Works;