import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderMusic from '../HeaderMusic';
import FooterMusic from '../FooterMusic';
import LogoMusic from '../LogoMusic';
import LinkMusic from '../LinkMusic';
import ButtonMusic from '../ButtonMusic';

const Main = styled.main`
background-color:var(--color-black-dark);
border-bottom:2px solid var(--color-primary-medium);
flex: 1;
padding-top: 50px;
padding-left: 5%;
padding-right: 5%;
`;

function PageDefault ({children}) {
    return(
   <>
    <HeaderMusic>
    <Link to="/">
        <LogoMusic/>
    </Link>
        <ButtonMusic as={Link} to="/cadastro/video">Novo Video</ButtonMusic>
    </HeaderMusic>
    <Main> 
        {children}
    </Main>  
    <FooterMusic>
        <LogoMusic/>
            <p>Site feito na <strong>#ImersãoReact</strong> da {' '}
        <LinkMusic>Alura</LinkMusic></p>
    </FooterMusic>

   </>
    );

};

export default PageDefault;