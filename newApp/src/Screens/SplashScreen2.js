// SplashScreen1.js
import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';

const SplashScreen2 = ({navigation}: {navigation: any}) => {
  const [alignsecond, setAlignsecond] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAlignsecond(true);
      setTimeout(() => {
        navigation.replace('OnBoard');
      }, 1000);
    }, 1000); // Adjust the delay as needed
  });

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/splash_4.png')}
        style={{
          width: '100%',
          height: '100%',
          overflow: 'visible',
          position: 'absolute',
        }}
      />
      {!alignsecond ? null : (
        <View>
          <Image
            source={require('../assets/images/splash_3.png')}
            style={{
              width: 300,
              height: 111,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen2;
