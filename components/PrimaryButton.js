import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../utils/colors';

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
        android_ripple={{ color: '#52063c' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary800,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    },
  pressed: {
    opacity: 0.75,
  }
});

export default PrimaryButton;
