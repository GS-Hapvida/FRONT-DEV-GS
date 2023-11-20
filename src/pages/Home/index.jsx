import React from 'react'
import * as S from './styles';

import { Title } from '../../components/Title';
import { NavBar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { MainMenu } from '../../components/MainMenu';
import { COLORS } from '../../styles/theme';

import CardsProductQualities from '../../components/CardsProductQualities';
import qualitiesItems from '../../utils/qualitiesItems';
import MedicinesComp from '../../components/MedicinesComp';

const Home = () => {
  return (
    <>
        <S.Container>
            <NavBar />
            <MainMenu/>
            
            <S.Content>
              <Title 
                title='O que é a DoseCerta?'
              />
              <div>
                <p>
                  A solução DoseCerta armazena e organiza medicamentos para pacientes, evitando erros de dosagem, melhorando a
                  adesão ao tratamento e aumentando a segurança do paciente. 
                </p>
              </div> 
            </S.Content>

            <S.Content>
              <Title 
                  title='O que ela fará?'
                />
                <div>
                  <p>
                  A solução DoseCerta ajuda pacientes a armazenar, acompanhar e tomar seus medicamentos corretamente,
                  evitando erros e melhorando a saúde.
                  </p>
                </div> 
            </S.Content>

           
            <S.ContainerCards>
              <Title
                color = { COLORS.white }
                margin='40px'
                title="Nossas maiores qualidades"
              />
              <div>
                {qualitiesItems.map((Card) => (
                  <CardsProductQualities
                    key={Card.id}
                    image={Card.image}
                    legend={Card.legend}
                    substitle={Card.subtitle}
                  />
                ))}
              </div>
            </S.ContainerCards>

            <S.Content>
              <Title 
                  title='Como funcionará?'
                />
                <div>
                  <p>
                    A solução DoseCerta permite que pacientes armazenem suas receitas e medicamentos de forma segura e organizada. A plataforma também fornece lembretes para ajudar os pacientes a tomar seus medicamentos na hora certa.
                  </p>
                </div> 
            </S.Content>

            <Title
                title="Registre seu medicamento"
              />
            <S.ContainerCRUD>
             <MedicinesComp/>
            </S.ContainerCRUD>

            <Footer />



        </S.Container>
    </>
  )
}

export default Home
