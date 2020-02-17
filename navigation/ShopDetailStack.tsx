import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import Shop from '../screens/Shop';
import ShopDetail from '../screens/ShopDetail';
import Hours from '../screens/Hours';
import ShopDetailDetailStack from './ShopDetailDetailStack';

const SearchNavigator = createStackNavigator({
  ['Shop']: {
    screen: Shop
  },
  ['ShopDetailDetail']: {
    screen: ShopDetailDetailStack,
    navigationOptions: {
      ...TransitionPresets.ModalPresentationIOS,
      gestureEnabled: true,
      cardOverlayEnabled: true,
    }
  },
  ['Hour']: {
    screen: Hours
  },
},
{
  // defaultNavigationOptions: {
  //   ...TransitionPresets.ModalPresentationIOS,
  //   gestureEnabled: true,
  //   cardOverlayEnabled: true,
  // },
  // mode: 'modal',
  headerMode: 'none',
  }
)

export default SearchNavigator;