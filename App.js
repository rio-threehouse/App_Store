import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import CurrentDate from './components/CurrentDate'
import UserIcon from './components/UserIcon'
import MainTitle from './components/MainTitle'
import BlockstyleButton from './components/BlockstyleButton'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CurrentDate />
        <UserIcon />  
        <MainTitle
          title='Today' 
          titlefontSize={{fontSize: 35}} />
        {/* Todayのリスト */}
        <MainTitle 
          title='おすすめのストーリー'
          titlefontSize={{fontSize: 27}} />
        {/* おすすめのストーリーのリスト */}
        <BlockstyleButton text='コードを使う' />
        <BlockstyleButton text='ギフトを贈る' />
        <BlockstyleButton text='Apple IDに入金' />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});
