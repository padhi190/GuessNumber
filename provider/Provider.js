import { createContext, useContext, useReducer } from 'react';

const INITIAL_STATE = {
  number: null,
  gameState: 'waiting',
};

function reducer(state, action) {
  switch (action.type) {
    case 'set-number':
      return { ...state, number: action.number, gameState: 'inProgress'};
    default:
      throw new Error('unhandled action', action.type);
  }
}

const Context = createContext();

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export function useAppContext() {
  const { state, dispatch } = useContext(Context);

  return { state, dispatch };
}

export default AppProvider;
