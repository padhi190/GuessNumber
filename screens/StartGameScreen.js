import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import { useAppContext } from '../provider/Provider';
import Colors from '../utils/colors';
import Card from '../components/Card';

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState('');

  const { dispatch } = useAppContext();

  const handleConfirm = () => {
    const number = parseInt(enteredNumber);
    if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert('Error', 'Enter a number between 1 - 99', [
        { text: 'Okay', style: 'destructive', onPress: () => setEnteredNumber('') },
      ]);
      return;
    }
    dispatch({ type: 'set-number', number });
  };

  return (
    <Card style={{marginTop: 50}}>
        <Text style={styles.title}>Enter your number</Text>
        <TextInput
          style={styles.numberInput}
          keyboardType="number-pad"
          maxLength={2}
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={(text) => setEnteredNumber(text)}
        />
        <View style={styles.buttonContainer}>
          <View style={{ flex: 1 }}>
            <PrimaryButton onPress={() => setEnteredNumber('')}>Reset</PrimaryButton>
          </View>
          <View style={{ flex: 1 }}>
            <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    color: Colors.accent500,
    fontSize: 24,
    marginTop: 24
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    margin: 24
  },
});

export default StartGameScreen;
