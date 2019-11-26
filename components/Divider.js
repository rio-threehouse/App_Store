import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class Divider extends React.Component {
  render() {
    return (
      <View style={styles.divider}></View>
    );
  }
}

const styles = StyleSheet.create({
  divider: {
    borderTopWidth: 0.5,
    borderTopColor: '#d1d2d6',
  },
});
