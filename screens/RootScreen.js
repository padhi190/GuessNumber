import React from 'react';
import { useAppContext } from '../provider/Provider';
import StartGameScreen from './StartGameScreen';
import GameScreen from './GameScreen';
import { SafeAreaView, StyleSheet } from 'react-native';
import GameOverScreen from './GameOverScreen';

function RootScreen() {
  const { state } = useAppContext();
  let Screen = StartGameScreen;
  const { gameState } = state;

  switch (gameState) {
    case 'waiting':
      Screen = StartGameScreen;
      break;
    case 'inProgress':
      Screen = GameScreen;
      break;
    case 'gameOver':
      Screen = GameOverScreen;
      break;
    default:
      Screen = StartGameScreen;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Screen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default RootScreen;
