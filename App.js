/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <NavigationNativeContainer>
        <Button title="hello?"/>
      </NavigationNativeContainer>
    );
  }
}

export default App;
