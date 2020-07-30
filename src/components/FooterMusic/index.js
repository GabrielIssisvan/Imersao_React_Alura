import styled from 'styled-components';
import LogoMusic from '../LogoMusic';

const FooterMusic = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
    background-color: var(--color-black-dark);
    color: var(--color-gray-light);
    padding: 1rem 0;
    border-top: 4px solid var(--color-primary-medium);

    & > ${LogoMusic} {
        margin-bottom: 1rem;
    }
`;

export default FooterMusic;
