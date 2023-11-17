import React from 'react'
import * as S from './styles';

import { Title } from '../../components/Title';
import { NavBar } from '../../components/Navbar';
import CardsProductQualities from '../../components/CardsProductQualities';
import { Footer } from '../../components/Footer';
import { MainMenu } from '../../components/MainMenu';
import qualitiesItems from '../../utils/qualitiesItems';

const Home = () => {
  return (
    <>
        <S.Container>
            <NavBar />
            <MainMenu/>
            
            <S.ContainerCards>
              <Title
                title="Nossas maiores qualidades"
              />

              {qualitiesItems.map((Card) => (
                <CardsProductQualities
                    key={Card.id}
                    image={Card.image}
                    legend={Card.legend}
                    substitle={Card.subtitle}
                />
              ))}
            </S.ContainerCards>

            <S.ContainerCRUD>
              <Title
                title="Registre seu medicamento"
              />

            </S.ContainerCRUD>

            <Footer />



        </S.Container>
    </>
  )
}

export default Home
