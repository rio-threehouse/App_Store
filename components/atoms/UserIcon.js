import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

export default class UserIcon extends React.Component {
  render() {
    return (
    <TouchableOpacity>
      <Image 
        source={require('../../assets/icoms/userIcon.png')} />
    </TouchableOpacity>
    );
  }
}
