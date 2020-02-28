import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import CardTitle from '../../molecules/card/CardTitle';
import AppBar_sm from '../appbars/Appbar_sm';

export default class BottomAppBarCard extends React.Component {
  render() {
    const {cardMainTitle, cardSubTitle, appTitle_sm, appSummary } = this.props;

    return(
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../../assets/sample_images/cardImg_sample.png')}
        />

        <View style={styles.cardTitleContainer}>
          <CardTitle 
            cardMainTitle={cardMainTitle}
            cardSubTitle={cardSubTitle}
          />
        </View>
        
        <View style={styles.appBarContainer}>
          <AppBar_sm 
            appTitle_sm={appTitle_sm}
            appSummary={appSummary}/>
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

    borderColor: '#f7f6fb',
    borderWidth: 2,
  },
  image: {
    flex: 1,
    width: '100%',
  },
  cardTitleContainer: {
    position: 'absolute',
    width: 300,
    top: 17,
    left: 13,
  },
  appBarContainer: {
    marginHorizontal: 17,
    marginVertical: 15,
  },
});
