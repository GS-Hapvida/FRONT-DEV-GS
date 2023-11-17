import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import  Navbar from 'react-bootstrap/Navbar';
import Button from '../Button';
import ImgLogo from '../../assets/dose_certa_azul.png';

import useAuth from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <Navbar expand='lg' className="bg-body">
            <Container>
                <Link to='/home' className="logo">
                    <img src={ImgLogo} alt="Imagem da logo"/>
                </Link>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />

                <Navbar.Collapse>
                    <Nav>
                        <Button text='sair' onClick={() => [signout(), navigate('/')]}>;
                            Sair
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export { NavBar }
