import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
    height: 12vh;
    width: 100%;
    padding: 0.5em;
    margin-bottom: 0.4em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const StyledLink = styled(Link)`
    img{
        height: 5em;
    }
`;
