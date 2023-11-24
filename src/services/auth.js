import {  createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser ] = useState();

    useEffect(() => {
        const userToken = sessionStorage.getItem('user_token');
        const userStorage = sessionStorage.getItem('users_db');

        if ( userToken && userStorage) {
            const hasUser = JSON.parse(userStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );

            if(hasUser) setUser(hasUser[0]);
        }
    }, []);

    const signin = (name, email, password) =>{
        const usersStorage = JSON.parse(sessionStorage.getItem('users_db'));

        const hasUser = usersStorage?.filter((user) => user.email === email);

        if ( hasUser?.length) {
            if (hasUser[0].name === name && hasUser[0].email === email && hasUser[0].password === password) {
                const token = Math.random().toString(36).substring(2);
                sessionStorage.setItem('user_token', JSON.stringify({ email, token}))
                setUser ({name, email, password})
                return;
            } else {
                return "E-mail ou senha incorretos!";
            } 
        } else {
            return "Usuário não cadastrado";
        }
    }

    const signup = (name, email, password) => {
        const usersStorage = JSON.parse(sessionStorage.getItem('users_db'));

        const hasUser =  usersStorage?.filter((user) => user.email === email);

        if ( hasUser?.length) {
            return "Já tem um conta com esse E-mail";
        }

        let newUser;

        if( usersStorage ) {
            newUser = [ ...usersStorage, {name, email, password}];
        } else {
            newUser = [{ name, email, password }];
        }

        sessionStorage.setItem('users_db', JSON.stringify(newUser));

        return;
    };

    const signout = () => {
        setUser(null);
        sessionStorage.removeItem('user_token');
    }

    return (
        <AuthContext.Provider
            value={{ user, signed: !!user, signin, signup, signout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

