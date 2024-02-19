import { StyleSheet, Text, View } from 'react-native';

function GameScreen() {
  return (
    <View style={styles.container}>
      <Text>Opponent's Guess</Text>
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
