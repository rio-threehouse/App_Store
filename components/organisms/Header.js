import React from 'react';
import { StyleSheet, View } from 'react-native';

import MainTitle from '../atoms/MainTitle';
import UserIcon from '../atoms/UserIcon';

export default class HeaderTitle extends React.Component {
  render() {
    return (
      <View>
        <MainTitle
          title={ this.props.title } 
          titlefontSize={{fontSize: 35}} />
          <View style={styles.iconContainer}>
            <UserIcon /> 
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    right: 0,
    top: 5,
  },
});
