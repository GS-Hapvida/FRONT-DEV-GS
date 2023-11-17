import React, { useState} from 'react'

import * as S from './styles';

import Button from '../../components/Button';
import  Input from '../../components/Input';

import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [email, setEmail] = useState('');
  const [emailConf, setEmailConf] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () =>{
    if(!email | !emailConf | !senha){
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;  
    }

    const res = signup(email,senha);

    if (res) {
      setError(res);
      return;
    }

    alert('Usuário cadastrado com sucesso!');
    navigate("/");
  }


  return (
     <S.Container>
      <S.Label>Cadastre seu usuário</S.Label>

      <S.Content>
        <Input
          type='email'
          placeholder='Digite seu email'
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />

        <Input
          type='email'
          placeholder='Confirme seu email'
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />

        <Input
          type='password'
          placeholder='Digite sua senha'
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />

        <S.LabelError>{error}</S.LabelError>
        <Button text="Entrar" onClick={handleSignup} />

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

export default Signup
