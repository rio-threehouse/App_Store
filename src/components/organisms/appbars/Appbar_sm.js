import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import AppBarTitle_sm from '../../molecules/appbar/AppBarTitle_sm';
import NormalButton from '../../atoms/buttons/NormalButton';

export default class AppBar_sm extends React.Component {
  render() {
    const {appTitle_sm, appSummary, normalButton } = this.props;

    return(
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../../assets/sample_images/appIcon_sample.png')}
        />

        <View style={styles.appBarTitleContainer}>
          <AppBarTitle_sm 
            appTitle_sm={appTitle_sm}
            appSummary={appSummary}
          />
        </View>
        <NormalButton normalButton={normalButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    height: 45,
    width: 45,
    borderRadius: 10,
  },
  appBarTitleContainer: {
    marginHorizontal: 10,
    flex: 1,
  },
});