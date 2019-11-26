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
    marginVertical: 5,
  },
  title: {
    fontWeight: '700',
  },
});