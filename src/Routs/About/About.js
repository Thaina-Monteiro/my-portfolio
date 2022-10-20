import React, { useState } from "react";
import * as S from "../About/Style";
import Modal from './Props';
import Html from './imgs/Html.svg';
import Css from './imgs/css.png';
import Javascript from './imgs/javascript.svg';
import Git from './imgs/git.svg';
import Reactt from './imgs/react.png';
import Stylied from './imgs/stylied.png'

function About() {
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [javascript, setJavascript] = useState(false);
  const [git, setGit] = useState(false);
  const [react, setReact] = useState(false);
  const [style, setStyle] = useState(false);

  return (
    <S.Main>
      <S.GlobalStyle />
      <S.Section>
        <S.H1>Quem eu sou <S.Span>.</S.Span></S.H1>
        <S.P>Sou Thainá Monteiro de Freitas, tenho 23 anos, moro no Rio de Janeiro, sou formada em Engenharia de Produção e atualmente
         estou cursando o 1° período em Análise e Desenvolvimento de Sistemas na Faculdade  Descomplica. Sou desenvolvedora focada no front-end e
          venho constantemente aprimorando meus conhecimentos.</S.P>
        <S.P>Estou mudando de carreira para a área tech, preferencialmente no desenvolvimento front-end,
          na qual, tenho desejo de atuar profissionalmente.
          Cada dia fico mais entusiasmada por cada experiência que venho adquirindo nessa nova trajetória profissional.
        </S.P>

      </S.Section>

      <S.SectionT>
        <S.H2>Conhecimentos</S.H2>
        <p
          onClick={() => {
            setHtml(!html);
          }}
        >
          <S.text> <S.Img src={Html} alt="html" /> HTML</S.text>
        </p>
        {html && (
          <Modal html="Estrutura de layouts, principais tags, HTML Semântico, criação de tabelas e formulários." />

        )}

        <p
          onClick={() => {
            setCss(!css);
          }}
        >
          <S.text> <S.ImgCSS src={Css} alt="css" /> CSS</S.text>
        </p>
        {css && (
          <Modal css="Estilização de layouts, reutilização de classes, box model, CSS Grid, FlexBox e pseudo-classes." />

        )}

        <p
          onClick={() => {
            setJavascript(!javascript);
          }}
        >
          <S.text> <S.Img src={Javascript} alt="javascript" /> JavaScript</S.text>
        </p>
        {javascript && (
          <Modal css="Manipulação de DOM, consumo de API, tipos de dados, métodos, funções e eventos." />

        )}

        <p
          onClick={() => {
            setGit(!git);
          }}
        >
          <S.text> <S.Img src={Git} alt="git" /> Git</S.text>
        </p>
        {git && (
          <Modal css="Versionamento de código e principais comandos." />

        )}

        <p
          onClick={() => {
            setReact(!react);
          }}
        >
          <S.text><S.Imgreact src={Reactt} alt="react" /> ReactJS</S.text>
        </p>
        {react && (
          <Modal css="React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuários em página web." />

        )}

        <p
          onClick={() => {
            setStyle(!style);
          }}
        >
          <S.text> <S.Imgstylied src={Stylied} alt="styled components" /> Styled Components</S.text>
          
        </p>
        {style && (
          <Modal css="
          Styled Components é uma biblioteca que utiliza o conceito CSS- in- js, ou seja, que nos permite  escrever códigos CSS dentro do JavaScript." />

        )}
      </S.SectionT>


    </S.Main>
  );
}

export default About;