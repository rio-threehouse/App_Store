import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class AppTitle_sm extends React.Component {
  render() {
    return (
      <Text 
        style={styles.text}
        numberOfLines={1}
        ellipsizeMode='tail'
      >
        {this.props.appTitle_sm}
      </Text>
    );
  }
}

AppTitle_sm.defaultProps = {
  appTitle_sm: 'タイトルタイトルタイトル'
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  }
});
