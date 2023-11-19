import styled from 'styled-components';
import { COLORS } from '../../styles/theme';

export const Button = styled.button`
    color: ${ COLORS.text };
    padding: 7px 15px;
    margin: 10px 0;
    font-size: 1.3em;
    cursor: pointer;
    background: ${ COLORS.backgroundColor };
    border: 2px solid ${ COLORS.white };
    border-radius: 5px;
    width: ${(props) => (props.width || '250px')};
    height: ${(props) => (props.height || '50px')};
    &:hover {
        background: ${ COLORS.backgroundSecundary };
        color: ${ COLORS.white };
  }
`;