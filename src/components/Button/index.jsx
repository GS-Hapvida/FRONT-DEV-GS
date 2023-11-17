import React from 'react'
import * as S from './styles';

const Button = ({ text, onClick, type= "button" }) => {
  return (
  <S.Button type={type} onClick={onClick}>  
    {text}
  </S.Button>

  
  )
}

export default Button;
