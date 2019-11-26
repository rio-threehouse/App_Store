import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { Linking } from 'expo';

export default class TermsLinkButton extends React.Component {
  _handlePressLink = () => {
    Linking.openURL('https://www.apple.com/legal/internet-services/itunes/');
  };

  render () {
    return(
      <TouchableOpacity
        style={styles.container}
        onPress={this._handlePressLink}>
        <Text style={styles.text}>利用規約</Text>
        <Image 
          style={styles.brackeIcon} 
          source={require('../assets/icoms/brackeIcon.png')} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 17,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#97969c',
  },
  brackeIcon: {
    width: 14,
    height: 14,
    marginLeft: 4,
  }
});