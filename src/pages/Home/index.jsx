import React from 'react'
import * as S from './styles';

import { NavBar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { MainMenu } from '../../components/MainMenu';

import CardsProductQualities from '../../components/CardsProductQualities';
import qualitiesItems from '../../mocks/qualitiesItems';
import MedicinesComp from '../../components/MedicinesComp';

const Home = () => {
  return (
    <>
        <S.Container>
            <NavBar />
            <MainMenu/>
            
            <S.Content>
              <S.Title style={{color: '#3F72AF'}}>O que é a DoseCerta?</S.Title>
              <div>
                <p>
                  A solução DoseCerta armazena e organiza medicamentos para pacientes, evitando erros de dosagem, melhorando a
                  adesão ao tratamento e aumentando a segurança do paciente. 
                </p>
              </div> 
            </S.Content>

            <S.Content>
              <S.Title style={{color: '#3F72AF'}}>O que ela fará?</S.Title>
                <div>
                  <p>
                  A solução DoseCerta ajuda pacientes a armazenar, acompanhar e tomar seus medicamentos corretamente,
                  evitando erros e melhorando a saúde.
                  </p>
                </div> 
            </S.Content>

           
            <S.ContainerCards>
              <S.Title style={{color:'#fff'}}>Nossas qualidades!</S.Title>
              <div>
                {qualitiesItems.map((Card) => (
                  <CardsProductQualities
                    key={Card.id}
                    image={Card.image}
                    legend={Card.legend}
                    subtitle={Card.subtitle}
                  />
                ))}
              </div>
            </S.ContainerCards>

            <S.Content>
              <S.Title style={{color:'#3F72AF'}}>Como funciona</S.Title>
                <div>
                  <p>
                  A DoseCerta permite que você crie um inventário de todos os seus medicamentos, incluindo o nome e descrição do medicamento, que pode incluir informações como o motivo do uso, os efeitos colaterais possíveis e as interações medicamentosas.                  </p>
                </div> 
            </S.Content>

            <S.Title style={{color: '#3F72AF'}}>Registre seu medicamento</S.Title>
            <S.ContainerCRUD>
             <MedicinesComp/>
            </S.ContainerCRUD>

            <Footer />

        </S.Container>
    </>
  )
}

export default Home
