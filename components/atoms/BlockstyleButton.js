import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class BlockstyleButton extends React.Component {
  render() {
    return(
      <TouchableOpacity
        style={styles.button}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f1f0f7',
    paddingVertical: 13,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007afe',
    textAlign: 'center',
  },
});
