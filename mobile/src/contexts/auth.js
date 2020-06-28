import React, { useState } from 'react';
import { createContext } from 'react';

const AuthContext = createContext({ signed: false });

export const AuthProvider = ({ children }) => {
  const [signed, setSigned] = useState(false);
  const [hasGroup, setHasGroup] = useState(false);

  function SignIn() {
    setSigned(true);
  }

  function SignOut() {
    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{ signed, SignIn, SignOut }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
