import React from 'react'
import * as S from './styles';

import { Title } from '../../components/Title';
import { NavBar } from '../../components/Navbar';
import CardsProductQualities from '../../components/CardsProductQualities';
import { Footer } from '../../components/Footer';
import { MainMenu } from '../../components/MainMenu';
import qualitiesItems from '../../utils/qualitiesItems';
import MedicinesComp from '../../components/MedicinesComp';

const Home = () => {
  return (
    <>
        <S.Container>
            <NavBar />
            <MainMenu/>
            
            <Title
                title="Nossas maiores qualidades"
              />

            <S.ContainerCards>
              {qualitiesItems.map((Card) => (
                <CardsProductQualities
                    key={Card.id}
                    image={Card.image}
                    legend={Card.legend}
                    substitle={Card.subtitle}
                />
              ))}
            </S.ContainerCards>

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
