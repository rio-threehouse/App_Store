import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class CurrentDate extends React.Component {
  render() {
    const currentDate = new Date();

    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    const day = currentDate.getDay();
    const dayOfstr = [ "日", "月", "火", "水", "木", "金", "土" ][day];
    
    return (
      <Text style={styles.date}>{month}月{date}日 {dayOfstr}曜日</Text>
    );
  }
}

const styles = StyleSheet.create({
  date: {
    color: '#949495',
    fontWeight: 'bold',
  }
});
