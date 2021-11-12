/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle(old => old);
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={() => setToggle(old => !old)}>
        <Image 
          style={toggle ? styles.LightOff : styles.LightOn} 
          source={
            toggle 
            ? require('./assets/icons/light-off.jpg') 
            : require('./assets/icons/light-on.jpg')
          }
        >
        </Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LightOn: {
    resizeMode: 'contain',
    width: 200,
    height: 200,
  },
  LightOff: {
    resizeMode: 'contain',
    width: 200,
    height: 200,
  },
});

export default App;
