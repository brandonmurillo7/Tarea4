import React, { createContext, useState, useContext } from 'react';

 
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null); 
  const [userRole, setUserRole] = useState(null);   

  const login = (role) => {
    setUserRole(role); // Almacena el rol seleccionado
    setUserToken('token-de-autenticacion-valido'); 
  };

  const logout = () => {
    setUserToken(null); // Borra el token para regresar al Login
    setUserRole(null);  // Resetea el rol
  };

  return (
    
    <AuthContext.Provider value={{ userToken, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);