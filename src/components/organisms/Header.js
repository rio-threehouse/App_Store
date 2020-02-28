import React from 'react';
import { StyleSheet, View } from 'react-native';

import HeaderTitle from '../atoms/titles/HeaderTitle';
import UserIcon from '../atoms/UserIcon';

export default class Header extends React.Component {
  render() {
    const { headerTitle } = this.props;
    return (
      <View style={styles.container}>
        <HeaderTitle headerTitle={ headerTitle } />
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
