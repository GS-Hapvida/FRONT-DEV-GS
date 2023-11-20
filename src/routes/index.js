import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VLibras from '@djpfs/react-vlibras';
import useAuth from "../hooks/useAuth";

import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';

const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Signin />;
}

const RoutesApp = () => {
    return(
        <Router>
            <VLibras />
            <Fragment>
                <Routes>
                    <Route exact path='/home' element={<Private Item={Home}/>}/>
                    <Route path="/" element={<Signin />} />
                    <Route exact path='/signup' element={<Signup />} />
                    <Route path="/" element={<Signin />}/>
                </Routes>
            </Fragment>
        </Router>
    );
};

export default RoutesApp;