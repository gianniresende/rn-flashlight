/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';

const App = () => {
  const [toggle, setToggle] = useState(true);


  return (
    <View style={styles.Container}>
      <Image 
        style={toggle ? styles.LightOff : styles.LightOn} 
        source={
          toggle 
          ? require('./assets/icons/light-off.jpg') 
          : require('./assets/icons/light-on.jpg')
        }
      >
      </Image>
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
