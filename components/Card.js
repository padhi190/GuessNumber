import { StyleSheet, View } from 'react-native';
import Colors from '../utils/colors';

function Card({ children, style }) {
  return <View style={[styles.inputContainer, style]}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginHorizontal: 24,
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: 'center',
  },
});
