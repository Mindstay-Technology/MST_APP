import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import { GestureHandlerRootView } from 'react-native-gesture-handler';


import onBoarding from '../Screens/OnBoarding';
import Login from '../Screens/Login';
import LoginOTP from '../Screens/LoginOtp';
import SplashScreen1 from '../Screens/SplashScreen1';
import SplashScreen2 from '../Screens/SplashScreen2';
import SignUp from '../Screens/SignUp';
import EmployerScreen from '../Screens/EmployerScreen';
import TrainerScreen from '../Screens/TrainerScreen';
import ExistingUserSuccess from '../Screens/ExistingUserSuccess';
import newUserSuccess from '../Screens/newUserSuccess';
import MyTabs from './TabNavigation';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  
  return (
    <NavigationContainer>
      
      {/* <Stack.Navigator
        initialRouteName="Splash1"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash1" component={SplashScreen1} />
        <Stack.Screen name="Splash2" component={SplashScreen2} />
        <Stack.Screen name="OnBoard" component={onBoarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginOTP" component={LoginOTP} options= {unmountOnBlur=true}/>
        <Stack.Screen name="ExistingUser" component={ExistingUserSuccess} />
        <Stack.Screen name="NewUser" component={newUserSuccess} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="EmployerScreen" component={EmployerScreen} />
        <Stack.Screen name="TrainerScreen" component={TrainerScreen} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Tab.Screen name="PostTabs" component={PostTabs} />
      </Stack.Navigator> */}
      <MyTabs/>
      
    </NavigationContainer>
  );
};

export default Navigation;
