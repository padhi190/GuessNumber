import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/Title';

function generateRandomBetween(min, max, exclude) {
  const rndNo = Math.floor(Math.random() * (max - min)) + min;

  if (rndNo === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return rndNo;
}

function GameScreen() {
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <Text>Higher or Lower?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 34,
  },
});

export default GameScreen;
