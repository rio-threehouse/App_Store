import React from 'react';
import { StyleSheet, View } from 'react-native';

import CardTitle from '../../molecules/card/CardTitle';
import AppBarList_sm from '../lists/AppBarList_sm';

export default class AppBarListCard extends React.Component {
  render() {
    const {cardMainTitle, cardSubTitle, numOfAppDisplay } = this.props;
    return (
      <View style={styles.container}>
        <View  style={styles.cardTitleContainer}>
          <CardTitle 
            cardMainTitle={cardMainTitle}
            cardSubTitle={cardSubTitle}
          />
        </View>

        <View style={styles.appBarListContainer}>
          <AppBarList_sm numOfAppDisplay={numOfAppDisplay}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 15,
    height: 400, 
    marginBottom: 30,

    borderColor:'#f7f6fb',
    borderWidth:2,
  },
  image: {
    flex: 1,
    width: '100%',
  },
  cardTitleContainer: {
    marginHorizontal: 17,
    marginVertical: 13,
  },
  appBarListContainer: {
    marginHorizontal: 17,
  }
});
