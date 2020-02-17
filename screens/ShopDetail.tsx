import * as React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

type Props = {} & NavigationStackScreenProps;

const component: React.FC<Props> = ({ navigation }) => {

  return (
    <ScrollView>
      <Text style={{marginBottom: 400}}>SHOP</Text>
      <Button onPress={() => navigation.navigate('Hour')} title="Hourの詳細" />
      <Button onPress={() => navigation.navigate('Map')} title="Mapの詳細" />
      <View style={{ flex: 1, backgroundColor: 'pink', height: 600 }}></View>
      <View style={{flex: 1, backgroundColor: 'blue', height: 600}}></View>
    </ScrollView>
  )

}

export default component;