import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import CardText from '../../atoms/card/CardText';
import CardTitle from '../../molecules/card/CardTitle';

export default class BottomTextCard extends React.Component {
  render() {
    const { cardSubTitle, cardMainTitle, cardText } = this.props;

    return (
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={require('../../../../assets/sample_images/cardImg_sample.png')}
        />

        <View style={styles.cardTitleContainer}>
          <CardTitle 
            cardSubTitle={cardSubTitle} 
            cardMainTitle={cardMainTitle} 
          />
        </View>
        
        <View  style={styles.cardTextContainer}>
          <CardText cardText={cardText}/>
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
  cardTextContainer: {
    marginHorizontal: 17,
    marginVertical: 20,
  },
});
