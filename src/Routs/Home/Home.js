import React from "react";
import * as S from "../Home/Style";
import Instagram from './imgs/instagram.png';
import WhatsApp from './imgs/whatsapp.png';
import LinkdeIn from './imgs/linkedin.png';
import GitHub from './imgs/github.png';
import MyPhoto from './imgs/foto1.jpg'


function Home() {
  return (
    <S.Container>
      <S.Text>
        <S.Title>
          Hello<S.Span>.</S.Span>
        </S.Title>
        <S.Title2>I am Thainá</S.Title2>
      </S.Text>
      <S.BoxImg>
        <S.Photo src={MyPhoto} alt="Thainá" />
      </S.BoxImg>
      <S.Social>
        <a href="https://www.instagram.com/thaimonteirof/?next=%2F" rel="noreferrer" target="_blank">
          <S.Img src={Instagram} alt="Instagram" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5521989345407" rel="noreferrer" target="_blank">
          <S.Img src={WhatsApp} alt="WhatsApp" />
        </a>
        <a
          href="https://www.linkedin.com/in/thainamonteiro/" rel="noreferrer" target="_blank" >
          <S.Img src={LinkdeIn} alt="LinkedIn" />
        </a>
        <a href="https://github.com/Thaina-Monteiro" rel="noreferrer" target="_blank">
          <S.Img src={GitHub} alt="GitHub" />
        </a>
      </S.Social>
    </S.Container>
  );
}

export default Home;