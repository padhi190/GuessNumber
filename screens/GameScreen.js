import { Alert, StyleSheet, Text, View } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import Title from '../components/Title';
import Colors from '../utils/colors';
import { useAppContext } from '../provider/Provider';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/Card';

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
      <Card style={{ marginTop: 50 }}>
        <Text style={styles.text}>Higher or Lower?</Text>
        <View style={{ flexDirection: 'row'}}>
          <View style={{ flex: 1 }}>
            <PrimaryButton onPress={handleLower} >
              <Ionicons name='remove' size={24} />
            </PrimaryButton>
          </View>
          <View style={{ flex: 1}}>
            <PrimaryButton onPress={handleHigher}>
              <Ionicons name='add' size={24} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 34,
  },
  text: {
    color: 'white',
    fontSize: 24,
    marginBottom: 14
  }
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
    marginTop: 24,
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
