import React from 'react';
import { StyleSheet, Text } from  'react-native';

export default class HeaderTitle extends React.Component {
  render() {
    return (
      <Text style={styles.title}>{this.props.headerTitle}</Text>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '700',
    fontSize: 35,
  },
});
