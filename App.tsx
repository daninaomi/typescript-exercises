
import React from 'react'
import { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Hello } from './src/components/Hello'

// type Props = {
//   name: 'Dani'
// };

// export default class App extends Component<Props> {
export default class App extends Component {
  render() {
    return (
      <View>
        <Hello name="Dani" enthusiasmLevel={10} />
      </View>
    );
  }
}


