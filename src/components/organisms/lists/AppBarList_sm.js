import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

// サンプルデータ
import Data from '../../../../sample_data/app_sample.json';

import AppBar_sm from '../appbars/Appbar_sm';
import Divider from '../../atoms/Divider.js';

export default class AppBarList_sm extends React.Component {
  render() {
    const numOfAppDisplay = this.props.numOfAppDisplay;
    
    const renderSeparator = () => 
      <View style={styles.separatorContainer}>
        <Divider />
      </View>;

    const renderItem = ({item}) => (
      <View style={styles.container}>
        <AppBar_sm 
          appTitle_sm={item.title}
          appSummary={item.summary} 
          normalButton={item.installButton}
        />
      </View>
    );

    return(
      <FlatList
        data={Data.slice(0,numOfAppDisplay)}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  separatorContainer: {
    marginLeft: 55,
  }
});
