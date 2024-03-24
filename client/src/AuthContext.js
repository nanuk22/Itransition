import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLogin, setLoginStatus] = useState(false);

  return (
    <AuthContext.Provider value={{ isLogin, setLoginStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return authContext;
};

export { AuthContext, AuthProvider };
