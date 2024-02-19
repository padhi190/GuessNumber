import { createContext, useContext, useReducer } from 'react';
import { generateRandomBetween } from '../utils/utils';

const INITIAL_STATE = {
  number: null,
  gameState: 'waiting',
  minBoundary: 1,
  maxBoundary: 100,
  currentGuess: null,
  noOfGuess: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return INITIAL_STATE;
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
      const lowerGuess = generateRandomBetween(
        state.minBoundary,
        state.currentGuess,
        state.currentGuess
      );

      return {
        ...state,
        maxBoundary: state.currentGuess,
        currentGuess: lowerGuess,
        gameState: lowerGuess === state.number ? 'gameOver' : state.gameState,
        noOfGuess: state.noOfGuess + 1,
      };
    case 'guess-higher':
      const higherGuess = generateRandomBetween(
        state.currentGuess + 1,
        state.maxBoundary,
        state.currentGuess
      );

      return {
        ...state,
        minBoundary: state.currentGuess + 1,
        currentGuess: higherGuess,
        gameState: higherGuess === state.number ? 'gameOver' : state.gameState,
        noOfGuess: state.noOfGuess + 1,
      };
    case 'game-over':
      return {
        ...state,
        gameState: 'gameOver',
      };
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
