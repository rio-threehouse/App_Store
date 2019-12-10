import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import CurrentDate from '../../atoms/CurrentDate';
import Header from '../../organisms/Header';
import ItemListTitle from '../../atoms/ItemListTitle';
import Divider from '../../atoms/Divider';
import Footer from '../../organisms/Footer';

export default class TopTodayTemplate extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CurrentDate />
        <Header title='Today'/>
        {/* Todayのリストをここに追加 */}

        <Divider />

        <View style={styles.itemTitleContainer} >
          <ItemListTitle title='おすすめのストーリー' />
        </View>
        {/* おすすめのストーリーのリストをここに追加 */}

        <Footer />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    top: 45,
  },
  itemTitleContainer: {
    height: 50,
    justifyContent: 'center',
  },
});
