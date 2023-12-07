import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import styles from '../style/styles';
import {useNavigation} from '@react-navigation/native';

const ExistingUserSuccess = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      //      navigation.navigate('SignUp');
    }, 1500); // Adjust the delay (in milliseconds) as needed

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, [navigation]);

  return (
    <View style={styles.successContainer}>
      <Image
        source={require('../assets/images/success.png')}
        style={styles.successImage}
      />
      <Text style={styles.successLoginText}>
        Welcome Back, Knowledge Seeker!Your Learning Adventure Continues with
        SISSOO
      </Text>
    </View>
  );
};

export default ExistingUserSuccess;
