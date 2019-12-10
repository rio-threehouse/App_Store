import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import TopToday from '../../pages/toppages/TopToday';
import TopGame from '../../pages/toppages/TopGame';
import TopApp from '../../pages/toppages/TopApp';
import TopArcade from '../../pages/toppages/TopArcade';
import TopSearch from '../../pages/toppages/TopSearch';

const TabNavigator =  createBottomTabNavigator(
  {
    Today: {
      screen: TopToday,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
          <Ionicons name='ios-today' color={tintColor} style={styles.icon} />
        }
    },
    ゲーム: {
      screen: TopGame,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
          <Ionicons name='ios-rocket' color={tintColor} style={styles.icon} />
      }
    },
    App: {
      screen: TopApp,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
          <Ionicons name='ios-apps' color={tintColor} style={styles.icon} />
      }
    },
    Arcade: {
      screen: TopArcade,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
          <Ionicons name='ios-ribbon' color={tintColor} style={styles.icon} />
      }
    },
    検索: {
      screen: TopSearch,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
          <Ionicons name='ios-search' color={tintColor} style={styles.icon} />
      },
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: 'rgba(246,246,246,0.5)',
      },
      labelStyle: {
        fontWeight: '600',
      }
    }
  }
)

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    bottom: 0,
    fontSize: 25,
  }
});
