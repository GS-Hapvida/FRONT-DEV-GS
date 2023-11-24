import { useContext } from 'react';
import { AuthContext } from '../mocks/auth';

const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
};

export default useAuth;