import React, { createContext, useReducer, Dispatch, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialValue: TinitialValue = {
  theme: true,
  username: 'Rizki Fauzian R',
};

export const GlobalContext = createContext<{
  state: TinitialValue;
  dispatch: Dispatch<TactionContext>;
}>({
  state: initialValue,
  dispatch: () => null,
});

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(AppReducer, initialValue, () => {
    // get localstorage
    const localData = localStorage.getItem('context');
    return localData ? JSON.parse(localData) : initialValue;
  });

  useEffect(() => {
    // set when state change
    localStorage.setItem('context', JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
