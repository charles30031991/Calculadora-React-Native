import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Button from './src/componets/Button'
import Display from './src/componets/Display'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  corrent: 0,
}

export default class App extends Component {
  state = {
    ...initialState
  }

  addDigit = n => {
    if (n === '.' && this.displayValue.includes('.')) {
      return
    }

    const clearDisplay = this.displayValue === '0' || this.state.clearDisplay
  }

  clearMemory = () => {
    this.setState({ displayValue: '0' })
  }

  setOperation = operation => {
  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue}></Display>
        <View style={styles.buttons}>
          <Button label='AC' triple onClick={this.clearMemory}></Button>
          <Button label='/' operation onClick={this.setOperation}></Button>
          <Button label='7' onClick={this.addDigit}></Button>
          <Button label='8' onClick={this.addDigit}></Button>
          <Button label='9' onClick={this.addDigit}></Button>
          <Button label='*' operation onClick={this.setOperation}></Button>
          <Button label='4' onClick={this.addDigit}></Button>
          <Button label='5' onClick={this.addDigit}></Button>
          <Button label='6' onClick={this.addDigit}></Button>
          <Button label='-' operation onClick={this.setOperation}></Button>
          <Button label='1' onClick={this.addDigit}></Button>
          <Button label='2' onClick={this.addDigit}></Button>
          <Button label='3' onClick={this.addDigit}></Button>
          <Button label='+' operation onClick={this.setOperation}></Button>
          <Button label='0' double onClick={this.addDigit}></Button>
          <Button label='.' onClick={this.addDigit}></Button>
          <Button label='=' operation onClick={this.setOperation}></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});



