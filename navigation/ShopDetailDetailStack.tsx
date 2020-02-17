import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import Shop from '../screens/Shop';
import ShopDetail from '../screens/ShopDetail';
import Hours from '../screens/Hours';
import Map from '../screens/Map';

const SearchNavigator = createStackNavigator({
  ['ShopDetail']: {
    screen: ShopDetail,
  },
  ['Hour']: {
    screen: Hours
  },
  ['Map']: {
    screen: Map
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