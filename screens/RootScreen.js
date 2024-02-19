import React from 'react';
import { useAppContext } from '../provider/Provider';
import StartGameScreen from './StartGameScreen';
import GameScreen from './GameScreen';
import { SafeAreaView, StyleSheet } from 'react-native';

function RootScreen() {
  const { state } = useAppContext();
  let Screen = StartGameScreen;
  const { gameState } = state;

  if (gameState == 'waiting') {
    Screen = StartGameScreen;
  } else if (gameState === 'inProgress') {
    Screen = GameScreen;
  }
  return <SafeAreaView style={styles.container}><Screen /></SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default RootScreen;
