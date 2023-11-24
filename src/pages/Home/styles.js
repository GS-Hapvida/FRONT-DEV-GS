import styled from 'styled-components';
import { COLORS } from '../../styles/theme';

export const Container = styled.div`
    margin: 0;
`;

export const Title = styled.h2`
	font-size: 2em;
	text-align: center;
	align-items: center;
	font-weight: 600;
	margin: 30px;
`;

export const ContainerCards = styled.div`
    background-color: ${ COLORS.blueSecundary };
    gap: 12px;
    padding: 1em;

    div{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

`;
export const Content = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    padding: 1em;
    margin: 2em 0;

    p{
        font-size: 1.5em;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 500;
        color: #454545;
        margin: 0 20px;
    }
`;

export const ContainerCRUD = styled.div`
    width: 100%;
    flex-wrap: wrap;
`;