import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppSummary from '../../atoms/appbar/AppSummary';
import AppTitle_sm from '../../atoms/appbar/AppTitle_sm';

export default class AppBarTitle_sm extends React.Component {
  render(){
    const { appTitle_sm, appSummary } = this.props;
    return(
      <View>
        <View>
          <AppTitle_sm appTitle_sm={appTitle_sm}/>
        </View>
        <View style={styles.appSummaryContainer}>
          <AppSummary appSummary={appSummary}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appSummaryContainer: {
    marginTop: 5,
  }
});