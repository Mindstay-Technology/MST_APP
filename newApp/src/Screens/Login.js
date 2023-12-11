import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import styles from '../style/styles';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { useDispatch, useSelector } from 'react-redux';
//import {setNumber, getOTP} from '../redux/actions'


const Login = () => {

  // const dispatch = useDispatch();
  // const number = useSelector((state) => state.auth.number);

  const [number, setNumber] = useState('');
  const [numberError, setNumberError] = useState('');
  const navigation = useNavigation();
  const [customStyle, setCustomStyle] = useState({
    fontSize: 14,
    fontWeight: '400',
  });

  
  const getOTP = async () => {
    if (number.length === 0) {
      setNumberError('Please enter mobile number');
    } else if (number.length < 10) {
      setNumberError('Please enter 10 digit mobile number');
    } else {
      // console.log('clickWorking')
      // await Axios.post('http://10.0.2.2:4000/user/generateotp',{number:number})
      // .then((resp)=>{
      //   AsyncStorage.setItem('userNumber',JSON.stringify(phone))
      //    navigation.navigate('LoginOTP');
      // })
      // .catch((err)=>{
      //   console.log(err)
      // })
      navigation.navigate('LoginOTP');
      setNumber('');
    }
  };

  // const getOTP = () => {
  //   // Validate phone number here
  //   dispatch(setPhone(number));
  //   dispatch(sendOTP(number));
  //   // You can navigate to the OTP screen here or in the sendOtp action
  //   navigation.navigate('LoginOTP');
  // };

  return (
    <View style={styles.loginContainer}>
      <Image
        source={require('../assets/images/login_logo.png')}
        style={styles.imageLogoStyle}
      />
      <Text style={styles.welcomeLoginText}>
        Welcome to sissoo Training App !
      </Text>

      <View
        style={{
          height: '200%',
          width: '400%',
          borderRadius: 600,
          backgroundColor: '#2676C2',
          right: '50%',
          borderWidth: 10,
          borderColor: '#A9CCE3',
        }}>
        <View style={{marginLeft: '13%', marginTop: '1%'}}>
          <Text style={styles.mobileText}>Mobile number</Text>
          <TextInput
            style={[
              styles.inputField,
              {
                fontSize: customStyle.fontSize,
                fontWeight: customStyle.fontWeight,
              },
            ]}
            placeholder="Enter Mobile number"
            value={number}
            onChangeText={text => {
              setNumber(text);
              setNumberError('');
              setCustomStyle({
                fontSize: text.length <= 0 ? 14 : 20,
                fontWeight: text.length <= 0 ? '400' : 'bold',
              });
              //  setCustomStyle({})
            }}
            keyboardType="numeric"
            placeholderTextColor={'#E9E9E9'}
            maxLength={10}
          />
          {numberError !== '' && (
            <Text style={styles.numberErrorStyle}>{numberError}</Text>
          )}

          <TouchableOpacity
            style={styles.getOTPButton}
            onPress={() => getOTP()}>
            <Text style={styles.getOTPButtonText}>Get OTP</Text>
          </TouchableOpacity>

          <View style={styles.hrLineView}>
            <View style={styles.hrLine} />

            <Text style={styles.orWithText}>Or With</Text>

            <View style={styles.hrLine} />
          </View>

          <View style={styles.emailGitHubView}>
            <TouchableOpacity>
              <Image
                source={require('../assets/images/email.png')}
                style={{marginRight: '3%'}}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={require('../assets/images/cat.png')}
                style={{marginLeft: '3%'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
