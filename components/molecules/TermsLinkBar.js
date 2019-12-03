import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Linking } from 'expo';

import TermsText from '../atoms/TermsText';

export default class TermsLinkBar extends React.Component {
  _handlePressLink = () => {
    Linking.openURL('https://www.apple.com/legal/internet-services/itunes/');
  };

  render () {
    return(
      <TouchableOpacity
        style={styles.container}
        onPress={this._handlePressLink}>
        <TermsText />
        <Image 
          style={styles.icon} 
          source={require('../../assets/icoms/arrowIcon.png')} />
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
  icon: {
    marginLeft: 9,
  }
});
