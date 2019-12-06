import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import Header from '../../organisms/Header';
import Divider from '../../atoms/Divider';
import Footer from '../../organisms/Footer';

export default class TopGameTemplate extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header title='ゲーム'/>
        <Divider />

        <Footer />
        {/* タブナビゲーションをここに追加 */}
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
