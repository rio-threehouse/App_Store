import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class UserIcon extends React.Component {
  render() {
    return (
    <TouchableOpacity>
      <Ionicons name='ios-contact' style={styles.icon} />
    </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    color: '#007aff',
    fontSize: 40,
  },
})