import { Image, StyleSheet, Text, View } from 'react-native';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import { useAppContext } from '../provider/Provider';

function GameOverScreen() {
  const { state, dispatch } = useAppContext();
  return (
    <View style={styles.container}>
      <Title>GameOver</Title>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/success.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.text}>
          It took {state.noOfGuess} guesses to guess your number {state.number}
        </Text>
        <PrimaryButton onPress={() => dispatch({ type: 'reset' })}>
          {' '}
          Start Another Game
        </PrimaryButton>
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 100,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%',
    width: 200,
    height: 200,
    overflow: 'hidden',
    marginBottom: 30,
    borderWidth: 4,
    borderColor: 'black'
  },
  text: {
    marginVertical: 30,
    fontSize: 24,
    textAlign: 'center',
  },
  image: {
    objectFit: 'cover',
    width: 200,
    height: 200,
  }
});
