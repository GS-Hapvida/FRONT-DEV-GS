import { useContext } from 'react';
import { AuthContext } from '../services/auth';

const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
};

export default useAuth;