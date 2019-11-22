import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import CurrentDate from './components/CurrentDate'
import UserIcon from './components/UserIcon'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CurrentDate />
        <UserIcon />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});
