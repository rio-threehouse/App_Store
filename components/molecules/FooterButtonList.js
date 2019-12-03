import React from 'react';
import { StyleSheet, View } from 'react-native';

import BlockstyleButton from '../atoms/BlockstyleButton';

export default class FooterButtonList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonMargin}>
          <BlockstyleButton text='コードを使う' />
        </View>
        <View style={styles.buttonMargin}>
          <BlockstyleButton text='ギフトを贈る' />
        </View>
        <View style={styles.buttonMargin}>
          <BlockstyleButton text='Apple IDに入金' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 30,
  },
  buttonMargin: {
    marginVertical: 5,
  },
});
