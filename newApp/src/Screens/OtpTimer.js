import React, {useState, useEffect, useCallback} from 'react';
import {View, Text} from 'react-native';
import styles from '../style/styles';
import {useFocusEffect} from '@react-navigation/native';

const OTPTimer = ({expiryTimeFromBackend}) => {
  const [timer, setTimer] = useState(expiryTimeFromBackend);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    let interval;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    }

    const timer1 = setTimeout(() => {
      setShowText(false);
    }, 2000);
    return () => {
      clearInterval(interval);
      clearTimeout(timer1);
    };
  }, [timer]);

  useFocusEffect(
    useCallback(() => {
      // Reset the timer when the screen comes into focus
      setTimer(expiryTimeFromBackend);
    }, []),
  );

  return (
    <View style={styles.otpTimerView}>
      {timer > 0 ? (
        <Text style={styles.otpTimerText}>OTP expires in : {timer}</Text>
      ) : (
        <View>
          {showText && (
            <Text style={styles.otpExpiryText}>OTP has expired</Text>
          )}
        </View>
      )}
    </View>
  );
};

export default OTPTimer;
