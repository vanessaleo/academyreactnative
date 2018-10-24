import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import FirstPage from './screens/FirstPage'
import {Root} from './router';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return (
          <Root />
      );
  }
}



