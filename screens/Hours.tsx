import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

type Props = {} & NavigationStackScreenProps;

const component: React.FC<Props> = ({ navigation }) => {

  return (
    <View>
      <Text>HOURS</Text>
    </View>
  )

}

export default component;