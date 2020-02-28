import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class CardSubTitle extends React.Component {
  render() { 
    return (
      <Text style={styles.text}>{this.props.cardSubTitle}</Text>
    );
  }
}

CardSubTitle.defaultProps = {
  cardSubTitle: 'サブタイトル'
}

const styles = StyleSheet.create({
  text: {
    color: '#949495',
    fontWeight: 'bold',
  }
});