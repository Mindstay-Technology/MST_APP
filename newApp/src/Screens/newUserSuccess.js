import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import styles from '../style/styles';
import {useNavigation} from '@react-navigation/native';

const newUserSuccess = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SignUp');
    }, 1000); // Adjust the delay (in milliseconds) as needed

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, [navigation]);

  return (
    <View style={styles.successContainer}>
      <Image
        source={require('../assets/images/success.png')}
        style={styles.successImage}
      />
      <Text style={styles.successLoginText}>
        {' '}
        Embark on a Learning Odyssey! Awaits to Elevate Your Skills.
      </Text>
    </View>
  );
};

export default newUserSuccess;
