import React from 'react';
import { StyleSheet, View } from 'react-native';

import CardSubTitle from '../../atoms/card/CardSubTitle';
import CardMainTitle from '../../atoms/card/CardMainTitle';

export default class CardTitle extends React.Component {
  render() {
      const { cardSubTitle, cardMainTitle } = this.props;
    return (
      <View>
        <View style={styles.subTitleContainer}>
          <CardSubTitle cardSubTitle={cardSubTitle}/>
        </View>
        <View style={styles.mainTitlecontainer}>
          <CardMainTitle cardMainTitle={cardMainTitle}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subTitleContainer: {
    marginVertical: 5,
  },
  mainTitlecontainer: {
    marginVertical: 5,
  },
});
