import { createStackNavigator } from 'react-navigation-stack';

import BottomTabNavigator from './BottomTabNavigator';

const MainNavigator = createStackNavigator(
  {
    MainStack: {
      screen: BottomTabNavigator,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
)

export default MainNavigator;