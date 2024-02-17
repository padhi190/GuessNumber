import { Pressable, StyleSheet, Text, View } from 'react-native';

function PrimaryButton({ children }) {
  return (
    <Pressable style={styles.container}>
      <View>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#72063c',
    }
})

export default PrimaryButton;
