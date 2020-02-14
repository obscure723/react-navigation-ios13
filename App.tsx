import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';

import View1 from './screens/View1';
import Root from './screens/Root';

export default function App() {

  const modalRef = React.useRef(null);
 
  const onOpen = () => {
    const modal = modalRef.current;
 
    if (modal) {
      modal.open();
    }
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>

      <TouchableOpacity onPress={onOpen}>
        <Text>Open the modal</Text>
      </TouchableOpacity>
 
      <Modalize ref={modalRef} style={{backgroundColor: 'pink', flex: 1}}>
        <Root />
      </Modalize>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
