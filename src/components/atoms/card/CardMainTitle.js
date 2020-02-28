import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class CardMainTitle extends React.Component {
  render() { 
    return (
      <Text style={styles.text}>{this.props.cardMainTitle}</Text>
    );
  }
}

CardMainTitle.defaultProps = {
  cardMainTitle: 'メインタイトル'
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 27,
  }
});
