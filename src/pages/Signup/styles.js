import styled from 'styled-components';
import ImgBackground from '../../assets/img_signin_background.jpg';

export const Container = styled.div`
    background-image: url(${ImgBackground});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height: 100vh;
`;

export const Content = styled.div`
    gap: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    box-shadow: 0 1px 2px #0003;
    background-color: white;
    max-width: 350px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;;
`;

export const Label = styled.label`
    font-size: 10px;
    font-weight: 600;
    color: #676767;
`;

export const ImageLogo = styled.img`
    width: 50%;
    height: 50%;
    margin: 0.1em;

`;

export const LabelSignup = styled.label`
    font-size: 16px;
    color: #676767;
`;

export const LabelError = styled.label`
    font-size: 14px;
    color: red;
`;

export const Strong = styled.strong`
    cursor: pointer;

    a {
        text-decoration: none;
        color: #676767;
    }
`;