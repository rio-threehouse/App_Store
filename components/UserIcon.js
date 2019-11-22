import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default class UserIcon extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <Image 
        style={styles.userIcon} 
        source={require('../assets/icoms/userIcom.png')} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    right: 0,
  },
  userIcon: {
    width: 35,
    height: 35,
  }
});
