import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import CurrentDate from './components/CurrentDate'
import UserIcon from './components/UserIcon'
import MainTitle from './components/MainTitle'

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
