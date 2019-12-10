import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class ItemTitle extends React.Component {
  render() { 
    return (
      <Text style={styles.text}>{this.props.title}</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 27,
  }
});
