import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

interface PrivateProps {
  children: ReactNode;
}

// Componente que protege rotas privadas, redirecionando usuários não autenticados para a página de login
export default function PrivateRoute({ children }: PrivateProps): any {
    const { signed, loadingAuth } = useContext(AuthContext);
    if (loadingAuth) {
        return <div>Carregando...</div>;
    }
    if (!signed) {
        return <Navigate to="/login" replace />;
    }
    return children;
}