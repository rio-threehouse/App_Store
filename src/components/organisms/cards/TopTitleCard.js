import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import CardTitle from '../../molecules/card/CardTitle';

export default class TopTitleCard extends React.Component {
  render() {
    const { cardSubTitle, cardMainTitle } = this.props;
    
    return (
      <View style={styles.container}>
        <View  style={styles.cardTitleContainer}>
          <CardTitle 
            cardSubTitle={cardSubTitle}
            cardMainTitle={cardMainTitle}
          />
        </View>

        <Image 
          style={styles.image}
          source={require('../../../../assets/sample_images/cardImg_sample.png')}
        />
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
});
