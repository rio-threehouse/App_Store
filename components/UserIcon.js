import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class UserIcon extends React.Component {
  render() {
    return (
    <TouchableOpacity style={styles.container}>
      <Image 
        style={styles.userIcon} 
        source={require('../assets/icoms/userIcom.png')} />
    </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 70,
    right: 0,
  },
  userIcon: {
    width: 35,
    height: 35,
  }
});
