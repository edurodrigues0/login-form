import { ReactNode, useContext as ReactUseContext, createContext, useState } from "react";

interface ContextProviderProps {
  children: ReactNode;
}

interface ContextData {
  handleRecover: (e: boolean) => void;
  recoverPassword: boolean;
}

const Context = createContext<ContextData>(
  {} as ContextData
);

export function ContextProvider({ children }: ContextProviderProps) {
  const [recoverPassword, setRecoverPassword] = useState(false);

  function handleRecover(e: boolean) {
    setRecoverPassword(e)
  }


  return(
    <Context.Provider
      value={{
        handleRecover,
        recoverPassword
      }}
    >
      {children}
    </Context.Provider>
  )
}

export function useContext() {
  const context = ReactUseContext(Context);

  return context;
}