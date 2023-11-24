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

    @media (max-width: 600px){
        flex-direction: column;
        height: auto;
        gap: 12px;
    }
`;

export const UserInfo = styled.div`
    p{
        font-size: 1.2em;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 500;
        color: #454545;
        margin: 0 20px;
    }
`;

export const StyledLink = styled(Link)`
    img{
        height: 5em;
    }
`;
