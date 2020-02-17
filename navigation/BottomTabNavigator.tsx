import * as React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ModalSample from '../screens/ModalSample'
import AppFooter from '../organisms/AppFooter';
import ShopStack from './ShopStack';

const MainNavigator = createBottomTabNavigator(
  {
    ['first']: {
      screen: ShopStack,
    },
  },
  {
    tabBarOptions : {
      activeBackgroundColor: "black",
    },
    tabBarComponent: ({navigation}) => {
      return (
        <AppFooter
          tabItems={[
            {
              key: 'first',
              iconName: "search",
              iconType: "FontAwesome5",
              text: "検索",
              image: null,
            },
          ]}
          currentTabItemIndex={navigation.state.index}
          navigate={navigation.navigate}
        />
      )
    },
  },
)

export default MainNavigator;