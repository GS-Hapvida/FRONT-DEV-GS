import React, { useState} from 'react'

import * as S from './styles';

import Button from '../../components/Button';
import  Input from '../../components/Input';
import { Title } from '../../components/Title';
import ImgLogo from '../../assets/dose_certa_azul.png'

import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfir, setPasswordConfir] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () =>{
    if( !name | !email | !passwordConfir | !password){
      setError("Preencha todos os campos");
      return;
    } else if (password !== passwordConfir) {
      setError("As senhas não são iguais");
      return;  
    }

    const res = signup(email,password);

    if (res) {
      setError(res);
      return;
    }

    alert('Usuário cadastrado com sucesso!');
    navigate("/");
  }


  return (
     <S.Container>
      <S.Content>
      <S.ImageLogo src={ImgLogo} alt='Imagem de Logo'/>
      <Title 
        title='Cadastre o seu usuário'
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

        <Input
          type='password'
          placeholder='Confirme seu senha'
          value={passwordConfir}
          onChange={(e) => [setPasswordConfir(e.target.value), setError("")]}
        />

        <S.LabelError>{error}</S.LabelError>
        <Button text="Cadastrar" onClick={handleSignup} />

        <S.LabelSignup>
          Já tem um conta?
          <S.Strong>
            <Link to='/'>&nbsp;Entre</Link>
          </S.Strong>
        </S.LabelSignup>

      </S.Content>

    </S.Container>
  )
}

export default Signup;
