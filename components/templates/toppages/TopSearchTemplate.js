import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import Header from '../../organisms/Header';

export default class TopSearchTemplate extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header title='検索'/>

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
