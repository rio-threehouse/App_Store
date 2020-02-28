import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class NormalButton extends React.Component {
  render() {
    return(
      <TouchableOpacity
        style={styles.button}>
        <Text style={styles.text}>{this.props.normalButton}</Text>
      </TouchableOpacity>
    );
  }
}

NormalButton.defaultProps = {
  normalButton: '入手'
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f1f0f7',
    padding: 7,
    borderRadius: 15,
    minWidth: 70,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007afe',
    textAlign: 'center',
  },
});
