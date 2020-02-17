import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import Home from '../screens/Home';
import Shop from '../screens/Shop';
import ShopDetailStack from './ShopDetailStack';
import ShopDetail from '../screens/ShopDetail';
import Hours from '../screens/Hours';

const SearchNavigator = createStackNavigator({
  ['Home']: {
    screen: Home
  },
  ['ShopDetailStack']: {
    screen: ShopDetailStack
  },
},
{
//   defaultNavigationOptions: {
//     ...TransitionPresets.ModalPresentationIOS,
//     cardOverlayEnabled: true,
//     gestureEnabled: true,
//     headerShown: false,
//   },
//   mode: 'modal',
  headerMode: 'none'
  }
)

export default SearchNavigator;