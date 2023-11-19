import React from "react";

import Button from "../Button";
import ImgLogo from "../../assets/dose_certa_azul.png";
import * as S from './styles';

import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <S.Nav>
      <S.StyledLink to="/home" className="logo">
        <img src={ImgLogo} alt="Imagem da logo" />
      </S.StyledLink>

      <Button 
        text="sair" onClick={() => [signout(), navigate("/")]}
      >
        Sair
      </Button>
    </S.Nav>
  );
};

export { NavBar };
