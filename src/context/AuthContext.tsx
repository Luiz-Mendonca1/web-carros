// Provedor de contexto que expõe o estado de autenticação (signed/loading) para o app
// e escuta mudanças no Firebase Auth para manter o estado do React sincronizado
import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { auth } from "../services/firebaseconection";
import { onAuthStateChanged } from "firebase/auth";

// Props esperadas pelo componente AuthProvider: elementos filho do React
interface AuthProviderProps {
  children: ReactNode;
}

// Formato dos dados que exportamos através do AuthContext
type AuthContextData = {
  // 'signed' indica se um usuário está autenticado (true) ou não (false)
  signed: boolean;
  // 'loadingAuth' é true enquanto verificamos o estado inicial de autenticação
  loadingAuth: boolean;
};

// Estrutura mínima do usuário que guardamos no estado local quando alguém está logado
interface UserProps {
  uid: string;
  email: string | null;
  displayName: string | null;
}

// Cria o contexto com um objeto vazio tipado como padrão. Os consumidores
// receberão os valores reais do componente provider abaixo
export const AuthContext = createContext({} as AuthContextData);

// O componente provider envolve o app (ou parte dele) e fornece info de autenticação
export default function AuthProvider({ children }: AuthProviderProps) {
  // Estado local para manter o objeto do usuário (ou null quando deslogado)
  const [user, setUser] = useState<UserProps | null>(null);
  // Flag de carregamento enquanto determinamos o estado inicial de autenticação
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    // Inscreve-se nas mudanças de estado do Firebase Auth. Este callback executa
    // imediatamente com o usuário atual (se existir) e sempre que o estado mudar
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // Mapeia o usuário do Firebase para nossa estrutura local UserProps
        setUser({
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName,
        });
        // Terminamos de carregar o estado inicial
        setLoadingAuth(false);
      } else {
        // Nenhum usuário está logado: limpa usuário local e finaliza carregamento
        setUser(null);
        setLoadingAuth(false);
      }
    });

    // Retorna a função unsubscribe para que o React limpe o listener
    // quando o componente desmontar. Isso evita vazamentos de memória e
    // listeners duplicados se o provider for remontado
    return () => unsubscribe();
    // Array de dependências vazio: inscreve na montagem e cancela na desmontagem
  }, []);    return (
        // Provide the derived context values to children. We expose:
        // - signed: a boolean cast from the 'user' (true when user != null)
        // - loadingAuth: whether we're still checking the auth state
        <AuthContext.Provider
            value={{
                signed: !!user,
                loadingAuth,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}