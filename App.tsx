import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';
// import { Pager, ProgressBar } from 'react-native-pager-component';
import { PagerProvider, Pager, Pagination } from '@crowdlinker/react-native-pager';
import Animated from 'react-native-reanimated';
const { Value } = Animated;

import View1 from './screens/View1';
import Root from './screens/Root';
import ModalSample from './screens/ModalSample';
import AppContainer from './navigation/AppContainer'

import View2 from './screens/View2';

export default function App() {

  const modalRef = React.useRef(null);
 
  const onOpen = () => {
    const modal = modalRef.current;
 
    if (modal) {
      modal.open();
    }
  };

  const [index, setIndex] = React.useState(0);

  let dx = new Value(0);

  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.tsx to start working on your app!</Text>

  //     <TouchableOpacity onPress={onOpen}>
  //       <Text>Open the modal</Text>
  //     </TouchableOpacity>
 
  //     <Modalize ref={modalRef}>
  //       {/* <Root /> */}

  //       {/* <Pager
  //         dx={dx}
  //         activeIndex={index}
  //         onChange={(index) => setIndex(index)}
  //       > */}
  //       <PagerProvider activeIndex={index} onChange={setIndex}>
  //         {/* <Pager> */}
  //           <View1 key={0} next={() => setIndex(1)} />
  //           <View2 key={1} back={() => setIndex(0)} />
  //         {/* </Pager> */}
  //       </PagerProvider>
  //       {/* </Pager> */}

  //     </Modalize>

  //   </View>
  // );

  return (
    <AppContainer />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
