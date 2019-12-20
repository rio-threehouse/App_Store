import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class CardMainTitle_lg extends React.Component {
  render() { 
    return (
      <Text style={styles.text}>{this.props.cardMainTitle_lg}</Text>
    );
  }
}

CardMainTitle_lg.defaultProps = {
  cardMainTitle_lg: '今日のゲーム'
}

const styles = StyleSheet.create({
  text: {
    fontWeight: '800',
    fontSize: 40,
    lineHeight: 45,
  }
});
