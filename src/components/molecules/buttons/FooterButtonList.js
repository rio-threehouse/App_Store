import React from 'react';
import { StyleSheet, View } from 'react-native';

import BlockstyleButton from '../../atoms/buttons/BlockstyleButton';

export default class FooterButtonList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonMargin}>
          <BlockstyleButton blockstyleButton='コードを使う' />
        </View>
        <View style={styles.buttonMargin}>
          <BlockstyleButton blockstyleButton='ギフトを贈る' />
        </View>
        <View style={styles.buttonMargin}>
          <BlockstyleButton blockstyleButton='Apple IDに入金' />
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
