  
import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

export default function Button({ text, onPress, theme }) {
  const buttonStyles = [styles.button];
  if (theme == "orange")
buttonStyles. push(styles.buttonOrange);
  if (theme == "white")
buttonStyles. push(styles.buttonWhite);
  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button: {
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    borderRadius: Math.floor(buttonWidth)
  },
 buttonOrange: {
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    borderRadius: Math.floor(buttonWidth)
  },
  buttonWhite: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    borderRadius: Math.floor(buttonWidth)
  }
});
