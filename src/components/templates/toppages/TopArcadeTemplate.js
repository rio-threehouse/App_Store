import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import Header from '../../organisms/Header';
import TermsLinkBar from '../../molecules/TermsLinkBar';


export default class TopArcadeTemplate extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />

        <TermsLinkBar />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    top: 80,
  },
});
