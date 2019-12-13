import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class TermsText extends React.Component {
  render () {
    return(
      <Text style={styles.text}>利用規約</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#97969c',
  },
});
