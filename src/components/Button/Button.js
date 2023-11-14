import React from 'react'
import * as S from 'styled-components';

const Button = ({destiny, text}) => {
  return (<S.ButtonLink to={destiny}>{text}</S.ButtonLink>)
}

export { Button }
