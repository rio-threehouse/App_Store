import React from 'react';
import { View } from 'react-native';

import FooterButtonList from '../molecules/buttons/FooterButtonList';
import TermsLinkBar from '../molecules/TermsLinkBar';
import Divider from '../atoms/Divider';

export default class Footer extends React.Component {
  render() {
    return (
      <View>
        <FooterButtonList />
        <Divider />
        <TermsLinkBar />
      </View>
    );
  }
}
