import React, { useState} from 'react'

import * as S from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input'; 
import ImgLogo from '../../assets/dose_certa_azul.png';
import { Title } from '../../components/Title';

import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Signin = () => {
  const navigate = useNavigate();
  const { signin } = useAuth();

  const [name, setName ] = useState('');
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [error, setError ] = useState('');


  const handleLogin =  () => {
    if (!name | !email | !password){
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(name, email, password);

    if(res) {
      setError(res);
      return;
    };

    navigate('/home');
  };

  return (
    <S.Container>

      <S.Content>
      <S.ImageLogo src={ImgLogo} alt='Imagem de Logo'/>
      <Title 
        title='Faça seu login'
      />
        <Input
          type='text'
          placeholder='Digite seu usuário'
          value={name}
          onChange={(e) => [setName(e.target.value), setError("")]}
        />

        <Input
          type='email'
          placeholder='Digite seu email'
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />

        <Input
          type='password'
          placeholder='Digite sua senha'
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError("")]}
        />

        <S.LabelError>{error}</S.LabelError>
        <Button text="Entrar" onClick={handleLogin} />

        <S.LabelSignup>
          Não tem uma conta?
          <S.Strong>
            <Link to='/signup'>&nbsp;Registre-se</Link>
          </S.Strong>
        </S.LabelSignup>

      </S.Content>

    </S.Container>
  );
};

export default Signin;
