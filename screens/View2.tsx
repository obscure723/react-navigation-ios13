import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
const { Value } = Animated;

type Props = {
  back: () => void;
}

const component: React.FC<Props> = ({ back }) => {

  return (
    <View style={{flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => back()}>
        <Text>クリック2</Text>
      </TouchableOpacity>
    </View>
  )

}

export default component;