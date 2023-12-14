import {View, Text, Image} from 'react-native';
import React from 'react';


export const SubmitSuccess = () => {
    return (
      <View
        style={{
          position: 'absolute',
          top: '75%',
          left: 0,
          width: '100%',
          height: '25%',
          backgroundColor: '#ffffff', // Semi-transparent background
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <View style={{marginTop: '3%', marginBottom: '3%'}}>
            <Image
              source={require('../assets/images/connect_circle.png')}
              style={{
                width: 75,
                height: 75,
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
            />
            <Image
              source={require('../assets/images/connect.png')}
              style={{
                alignSelf: 'center',
                position: 'absolute',
                width: 55,
                height: 55,
                resizeMode: 'contain',
                top: '13%',
              }}
            />
          </View>
          <Text
            style={{
              color: '#535353',
              fontSize: 14,
              fontWeight: '400',
              textAlign: 'center',
            }}>
            
            You have posted successfully
          </Text>
          <Text
            style={{
              color: '#535353',
              fontSize: 12,
              fontWeight: '400',
              textAlign: 'center',
            }}>
            awaiting a response from the Job seekers
          </Text>
        </View>
      </View>
    );
  };