import { createContext, useContext, useReducer } from 'react';
import { generateRandomBetween } from '../utils/utils';

const INITIAL_STATE = {
  number: null,
  gameState: 'waiting',
  minBoundary: 1,
  maxBoundary: 100,
  currentGuess: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'set-number':
      return {
        ...state,
        number: action.number,
        gameState: 'inProgress',
        currentGuess: generateRandomBetween(
          state.minBoundary,
          state.maxBoundary,
          state.currentGuess
        ),
      };
    case 'guess-lower': 
      return {
        ...state,
        maxBoundary: state.currentGuess,
        currentGuess: generateRandomBetween(
          state.minBoundary,
          state.currentGuess,
          state.currentGuess
        )
      }
    case 'guess-higher': 
      return {
        ...state,
        minBoundary: state.currentGuess + 1,
        currentGuess: generateRandomBetween(
          state.currentGuess + 1,
          state.maxBoundary,
          state.currentGuess
        )
      }
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
