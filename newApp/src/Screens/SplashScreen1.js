// Example of Animated Splash Screen in React Native
// https://aboutreact.com/animated-splash-screen/

// import React in our code
import React, {useEffect, useRef, useState} from 'react';

// import all the components we are going to use
import {View, Animated, Easing, Image, StyleSheet} from 'react-native';

const splashScreen1 = ({navigation}) => {
  // const [align, setAlign] = useState('center');
  const [alignsecond, setAlignsecond] = useState(false);

  const translateY = useRef(new Animated.Value(-300)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const bounceAnimation = Animated.sequence([
      Animated.timing(translateY, {
        toValue: 0, // Translate to the center (0)
        duration: 500,
        easing: Easing.in(Easing.bounce),
        useNativeDriver: true,
      }),
      // Animated.spring(scale, {
      //   toValue: 1.2, // Scale up
      //   friction: 50,
      //   tension: 30,
      //   useNativeDriver: true,
      // }),
      // Animated.spring(scale, {
      //   toValue: 1, // Scale down
      //   friction: 50,
      //   tension: 30,
      //   useNativeDriver: true,
      // }),
    ]);

    bounceAnimation.start();
  }, [translateY, scale]);

  useEffect(() => {
    setTimeout(() => {
      //  setAlign('flex-start'),
      setAlignsecond(true);
      setTimeout(() => {
        navigation.navigate('Splash2');
      }, 1000);
    }, 1500);
  },[navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/images/splash_1.png')}
        style={{
          width: 150,
          height: 150,
          overflow: 'visible',
          position: 'absolute',
          transform: [{translateY}, {scale}],
        }}
      />
      {!alignsecond ? null : (
        <View>
          <Image
            source={require('../assets/images/splash_2.png')}
            style={{
              width: 100,
              height: 100,
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

export default splashScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
