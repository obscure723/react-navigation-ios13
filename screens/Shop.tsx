import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

type Props = {} & NavigationStackScreenProps;

const component: React.FC<Props> = ({ navigation }) => {

  return (
    <View>
      <Text style={{marginBottom: 200, color: 'red'}}>SHOP</Text>
      <Button onPress={() => navigation.push('ShopDetailDetail')} title="SHOPの詳細" />
    </View>
  )

}

export default component;