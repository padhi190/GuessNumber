import { Alert, StyleSheet, Text, View } from 'react-native';
import Title from '../components/Title';
import Colors from '../utils/colors';
import { useAppContext } from '../provider/Provider';
import PrimaryButton from '../components/PrimaryButton';

function GameScreen() {
  const { state, dispatch } = useAppContext();

  const handleLower = () => {
    if (state.number > state.currentGuess) {
      Alert.alert('No!', "Please don't lie", [{ text: 'OK', style: 'cancel' }]);
    } else {
      dispatch({ type: 'guess-lower' });
    }
  }

  const handleHigher = () => {
    if (state.number < state.currentGuess) {
      Alert.alert('No!', "Please don't lie", [{ text: 'OK', style: 'cancel' }]);
    } else {
      dispatch({ type: 'guess-higher' });
    }
  }
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{state.currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={handleLower}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={handleHigher}>+</PrimaryButton>
        </View>
      </View>
      <Text>{JSON.stringify(state, null, 2)}</Text>
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

function NumberContainer({ children }) {
  return (
    <View style={guessStyles.container}>
      <Text style={guessStyles.text}>{children}</Text>
    </View>
  );
}

const guessStyles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: 'bold',
  },
});
