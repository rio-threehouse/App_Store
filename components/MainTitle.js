import React from 'react';
import { StyleSheet, View, Text } from  'react-native';

export default class MainTitle extends React.Component {
  render() {
    const {titlefontSize, title} = this.props;
    return (
      <View style={styles.container}>
        <Text style={[titlefontSize, styles.title]}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '700',
  },
});