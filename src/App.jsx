import React from 'react';
import HeaderMusic from './components/HeaderMusic/index.js'
import ButtonMusic from './components/ButtonMusic/index.js'
import LogoMusic from './components/LogoMusic/index.js';
import './styles/settings/colors.css';
import './styles/reset.css';
import LinkMusic from './components/LinkMusic/index.js';
import FooterMusic from './components/FooterMusic/index.js';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import dadosIniciais from './data/dados_iniciais.json';

function App() {
  return (
    <div style={{ background: "#141414" }}>
    <HeaderMusic>
      <LogoMusic/>
      <ButtonMusic >Novo Video</ButtonMusic>
    </HeaderMusic>

    <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />     

    <FooterMusic>
      <LogoMusic/>
     <p>Site feito na <strong>#ImersãoReact</strong> da {' '}
       <LinkMusic>Alura</LinkMusic></p>
    </FooterMusic>

    </div>
  );
}

export default App;
