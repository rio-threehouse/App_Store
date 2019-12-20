import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class CardText extends React.Component {
  render() { 
    return (
      <Text style={styles.text}>{this.props.cardText}</Text>
    );
  }
}

CardText.defaultProps = {
  cardText: 'テキストテキストテキストテキストテキストテキストテキスト。'
}

const styles = StyleSheet.create({
  text: {
    color: '#949495',
    lineHeight: 17,
  }
});