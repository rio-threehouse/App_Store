import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Linking } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import TermsText from '../atoms/texts/TermsText';

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
        <Ionicons name='ios-arrow-forward' style={styles.icon} />
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
    color: '#d1d1d2',
    fontSize: 15,
    marginLeft: 7,
  }
});
