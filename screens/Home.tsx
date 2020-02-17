import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

type Props = {} & NavigationStackScreenProps;

const component: React.FC<Props> = ({ navigation }) => {

  return (
    <View>
      <Text style={{marginBottom: 300, marginTop: 100}}>Home</Text>
      <Button onPress={() => navigation.navigate('ShopDetailStack')} title="SHOP" />
    </View>
  )

}

export default component;