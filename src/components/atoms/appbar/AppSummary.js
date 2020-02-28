import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class AppSummary extends React.Component {
  render() {
    return(
      <Text
        style={styles.text}
        numberOfLines={1}
        ellipsizeMode='tail'
      >
        {this.props.appSummary}
      </Text>
    );
  }
}

AppSummary.defaultProps = {
  appSummary: 'テキストテキストテキストテキスト'
}

const styles = StyleSheet.create({
  text: {
    color: '#949495',
    fontSize: 13,
  },
});