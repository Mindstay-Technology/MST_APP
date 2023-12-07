import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import styles from '../style/styles';
import OTPTextView from 'react-native-otp-textinput';
//import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import OTPTimer from './OtpTimer';
//import { useDispatch, useSelector } from 'react-redux';
//import { setOTP, verifyOTP } from '../redux/actions';


const LoginOTP = ({navigation}) => {

  //const dispatch = useDispatch();
 // const otp = useSelector((state) => state.auth.otp);
 // const navigation = useNavigation();


  const [otp, setOTP] = useState('');
  const [otpError, setOtpError] = useState('');

  const expiryTimeFromBackend = 60;

// Reset OTP on component mount
  // useEffect(() => {
  //   console.log('Component mounted. Resetting OTP.');

  //   setOTP('');
  //   console.log('hiiiiiiiiiiiiiiiii');

  // }, []);

  useFocusEffect(
    useCallback(() => {
      console.log('Screen is focused. Resetting OTP.');
      setOTP('');
      console.log('ssssssssss')
    }, [])
  );
 

  const verifyOTP = async () => {
    const storage = await AsyncStorage.getItem('userNumber');
    const number = JSON.parse(storage);
    console.log('clicking login', number);

    if (otp.length === 0) {
      setOtpError('Please enter OTP you have received');
    } else if (otp.length < 4) {
      setOtpError('Please enter 4 digit OTP');
    } else {


    // await Axios.post('http://10.0.2.2:4000/user/verifyotp', {
    //   userNumber: number,
    //   otp: otp,
    // })
    //   .then(resp => {
    //     if (resp.data.message === 'Already' && resp.data.success) {
    //       console.log('true block');
    //       console.log(resp.data.message);
    //       navigation.navigate('ExistingUser');
    //     } 
    //     else {
    //       console.log(resp.data.message);
    //       // navigation.navigate('NewUser');
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    navigation.navigate('NewUser');
    setOTP('');
    }


  };

  const OtpBackButton =()=>{
    setOTP('');
    navigation.navigate('Login');


  }

  return (
    <View style={styles.loginOTPContainer}>
      <TouchableOpacity onPress={() => OtpBackButton()}>
        <Image
          source={require('../assets/icons/back.png')}
          style={{
            resizeMode: 'contain',
            marginTop: '3%',
            marginLeft: '7%',
            marginBottom: '8%',
          }}
        />
      </TouchableOpacity>
      <Image
        source={require('../assets/images/login_logo.png')}
        style={styles.otpImageLogoStyle}
      />
      <Text style={styles.welcomeOtpText}>
        Enter your 4-digit OTP to verify
      </Text>
      <Text style={styles.loginOTPText}>OTP</Text>

      <View
        style={{
          height: '200%',
          width: '400%',
          borderRadius: 600,
          backgroundColor: '#2676C2',
          right: '50%',
          bottom: '3%',
          borderWidth:10,
          borderColor:'#A9CCE3'
        }}>
        <View style={{left: '13%', marginTop: '10%'}}>
          <View>
            <OTPTextView
              handleTextChange={(code) => {
                setOTP(code)
                  setOtpError('');
                }}
              containerStyle={styles.otpContainer}
              textInputStyle={styles.otpInput}
              defaultValue={otp}
              inputCount={4}
              tintColor={'transparent'}
              offTintColor={'transparent'}
              //autoFocus
            />
          </View>
          {otpError !== '' && (
            <Text style={styles.otpErrorStyle}>{otpError}</Text>
          )}

          <OTPTimer expiryTimeFromBackend={expiryTimeFromBackend} />

          <TouchableOpacity
            style={styles.verifyButton}
            onPress={() => verifyOTP()}>
            <Text style={styles.verifyButtonText}>Verify</Text>
          </TouchableOpacity>

          <View style={styles.OTPResendView}>
            <Text style={styles.receivedOTPText}>
              If you haven't received the OTP ?
            </Text>
            <TouchableOpacity>
              <Text style={styles.ResendButtonText}>Resend</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.otphrLineView}>
            <View style={styles.otphrLine} />

            <Text style={styles.otporWithText}>Or With</Text>

            <View style={styles.otphrLine} />
          </View>

          <View style={styles.emailCatOTPView}>
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

export default LoginOTP;
