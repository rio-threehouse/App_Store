import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CurrentDate extends React.Component {
  render() {
    const currentDate = new Date();

    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    const day = currentDate.getDay();
    const dayOfstr = [ "日", "月", "火", "水", "木", "金", "土" ][day];
    
    return (
      <View style={styles.container}>
        <Text style={styles.date}>{month}月{date}日 {dayOfstr}曜日</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top: 25,
  },
  date: {
    color: '#949495',
    fontWeight: 'bold',
  }
});
