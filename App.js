import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Button from './components/Button';

import { calculator } from './calculator';

export default class App extends React.Component {

  state = {
    currentValue: "0",
    operator: null,
    previousValue: null
  };

  handleTap = (type, value) => {
    this.setState(state => calculator(type, value, state));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.value}>
          {parseFloat(this.state.currentValue).toLocaleString()}
        </Text>
                <View style={styles.row}>
          <Button text="+/-" theme = "white" onPress={() => this.handleTap("operator","pm" )} />
          <Button text="x^2" theme = "white" onPress={() => this.handleTap("operator","sq" )} />
          <Button text="%" theme = "white" onPress={() => this.handleTap("pc")} />
          <Button text="÷" theme = "white" onPress={() => this.handleTap("operator", "/")} />
        </View>
        <View style={styles.row}>
          <Button text="7"theme = "orange" onPress={() => this.handleTap("number", 7)} />
          <Button text="8"theme = "orange" onPress={() => this.handleTap("number", 8)} />
          <Button text="9"theme = "orange" onPress={() => this.handleTap("number", 9)} />
          <Button text="X" onPress={() => this.handleTap("operator", "*")} />
        </View>
        <View style={styles.row}>
          <Button text="4"theme = "orange" onPress={() => this.handleTap("number", 4)} />
          <Button text="5"theme = "orange" onPress={() => this.handleTap("number", 5)} />
          <Button text="6"theme = "orange" onPress={() => this.handleTap("number", 6)} />
          <Button text="-" onPress={() => this.handleTap("operator", "-")} />
        </View>
        <View style={styles.row}>
          <Button text="1"theme = "orange" onPress={() => this.handleTap("number", 1)} />
          <Button text="2"theme = "orange" onPress={() => this.handleTap("number", 2)} />
          <Button text="3"theme = "orange" onPress={() => this.handleTap("number", 3)} />
          <Button text="+" onPress={() => this.handleTap("operator", "+")} />
        </View>
        <View style={styles.row}>
          <Button text="0"theme = "orange" onPress={() => this.handleTap("number", 0)} />
          <Button text="."theme = "orange" onPress={() => this.handleTap("number", ".")} />
          <Button text="C"theme = "orange" onPress={() => this.handleTap("clear")} />
          <Button text="=" onPress={() => this.handleTap("equal")} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  value: {
    textAlign: "right",
    color: "white",
    fontSize: 40
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "black",
    padding: 8,
  }
});