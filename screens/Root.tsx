import * as React from 'react';
import { Text, View, TouchableOpacity, Button, Dimensions } from 'react-native';
import { Pager, ProgressBar } from 'react-native-pager-component';
import Animated from 'react-native-reanimated';
const { Value } = Animated;

import View1 from './View1';
import View2 from './View2';

const component: React.FC = () => {

  const [index, setIndex] = React.useState(0);

  let dx = new Value(0);

  return (
    <View style={{ position: 'absolute', width: '100%', height: Dimensions.get('screen').height * 0.95}}>
      <Pager
        dx={dx}
        activeIndex={index}
        onChange={(index) => setIndex(index)}
      >
        <View1 key={0} next={() => setIndex(1)} />
        <View2 key={1} back={() => setIndex(0)} />
      </Pager>

      {/* <View style={{ width: '100%', borderWidth: 1, height: 100 }}>
        <Button title="Inc" onPress={() => increment()} />
        <Button title="Dec" onPress={() => decrement()} />
      </View> */}
    </View>
  )

}

export default component;