import React from 'react';
import { StyleSheet, View } from 'react-native';

import HeaderTitle from '../atoms/HeaderTitle';
import UserIcon from '../atoms/UserIcon';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderTitle title={ this.props.title } />
          <View style={styles.iconContainer}>
            <UserIcon /> 
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
    top: 5,
  },
});
