import styled from 'styled-components';

const ButtonMusic = styled.button`
padding:14px 35px;
background-color:var(--color-black-dark);
border-bottom:1px solid var(--color-gray-light);
color: var(--color-gray-light);
border-radius:5px;
font-size: 18rem;
cursor:pointer;
transition: opacity .3s;
outline: none;


&:hover,&:focus {
    opacity: .5;
}
`;

export default ButtonMusic;