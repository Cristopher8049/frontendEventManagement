import { Navigate } from 'react-router-dom';
import { UserAuth } from '../../context/authContext';

const ProtectedRoutes = ({ children }) => {
    const { user } = UserAuth();

    if (!user) {
        return <Navigate to='/signin' />;
    }

    return children;
};

export default ProtectedRoutes;