import * as React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
const { Value } = Animated;

type Props = {
  next: () => void;
}

const component: React.FC<Props> = ({next}) => {

  return (
    <>
      <View style={{height: Dimensions.get('screen').height * 0.95, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => next()}>
          <Text>クリック</Text>
        </TouchableOpacity>
      </View>

      <View style={{height: Dimensions.get('screen').height * 0.95, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => next()}>
          <Text>クリック</Text>
        </TouchableOpacity>
      </View>

      <View style={{height: Dimensions.get('screen').height * 0.95, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => next()}>
          <Text>クリック</Text>
        </TouchableOpacity>
      </View>

    </>
  )

}

export default component;