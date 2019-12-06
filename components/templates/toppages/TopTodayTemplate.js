import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import CurrentDate from '../../atoms/CurrentDate';
import Header from '../../organisms/Header';
import MainTitle from '../../atoms/MainTitle';
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

        <MainTitle 
          title='おすすめのストーリー'
          titlefontSize={{fontSize: 27}} />
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
});
