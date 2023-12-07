import AsyncStorage from "@react-native-async-storage/async-storage";
import Axios from 'axios'
import {SET_PHONE_NUMBER, SET_OTP, SET_AUTHENTICATED, 
  FETCH_HOME_DATA_REQUEST,
   FETCH_HOME_DATA_SUCCESS,
   FETCH_HOME_DATA_FAILURE,
} from '../actionTypes'

//Certainly! Below is an example of how you can create a phone login page and OTP login page using Redux in React Native. We'll include functions for getting OTP from the backend and verifying OTP


export const setNumber = (number) => ({
    type: SET_PHONE_NUMBER,
    payload: phone,
  });
  
  export const setOTP = (otp) => ({
    type: SET_OTP,
    payload: otp,
  });

  
  export const setAuthenticated = (isAuthenticated) => ({
    type: SET_AUTHENTICATED,
    payload: isAuthenticated,
  });
  
  export const getOTP = (phone) => {
    return async (dispatch) => {
      try {
        // Replace the URL with your backend API endpoint for sending OTP
        await Axios.post('http://10.0.2.2:4000/user/generateotp', {number:phone})
        .then(()=>{
            AsyncStorage.setItem('userNumber', JSON.stringify(phone))
            Navigation.navigate('LoginOTP')
        }) 
        } catch (error) {
        console.error('Error sending OTP:', error);
      }
    };
  };
  
  // Async action to verify OTP
  export const verifyOTP = (otp) => {
    return async (dispatch, getState) => {
      const { auth } = getState();
  
      try {
        // Replace the URL with your backend API endpoint for verifying OTP
        await axios.post('http://10.0.2.2:4000/user/verifyotp', {otp, userNumber: auth.phone,})
        .then(resp => {
                if (resp.data.message === 'Already' && resp.data.success) {
                  console.log('true block');
                  console.log(resp.data.message);
                  navigation.navigate('ExistingUser');
                } 
                else {
                  console.log(resp.data.message);
                  // navigation.navigate('NewUser');
                }
              })
        dispatch({ type: 'SET_AUTHENTICATED', payload: true });
  
        // Navigate to the next screen or perform further actions
      } catch (error) {
        console.error('Error verifying OTP:', error);
        // Handle error if needed
      }
    };
  };
  
// ----------for HOME data show---------------
export const fetchHomeDataRequest = () => ({
  type: FETCH_HOME_DATA_REQUEST,
});

export const fetchHomeDataSuccess = (homeData) => ({
  type: FETCH_HOME_DATA_SUCCESS,
  payload: homeData,
});

export const fetchHomeDataFailure = (error) => ({
  type: FETCH_HOME_DATA_FAILURE,
  payload: error,
});

