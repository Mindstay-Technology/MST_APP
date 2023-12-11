import {View, Text, Image} from 'react-native';
import React from 'react';

export const HireNowModal = () => {
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
            source={require('../../assets/images/connect_circle.png')}
            style={{
              width: 75,
              height: 75,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
          <Image
            source={require('../../assets/images/connect.png')}
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
          
          Request sent to the trainer successfully
        </Text>
        <Text
          style={{
            color: '#535353',
            fontSize: 14,
            fontWeight: '400',
            textAlign: 'center',
          }}>
          Kindly await acceptance
        </Text>
      </View>
    </View>
  );
};


export const ConnectModal = () => {
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
              source={require('../../assets/images/connect_circle.png')}
              style={{
                width: 75,
                height: 75,
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
            />
            <Image
              source={require('../../assets/images/connect.png')}
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
            
            Your connection request has been sent! 
          </Text>
          <Text
            style={{
              color: '#535353',
              fontSize: 14,
              fontWeight: '400',
              textAlign: 'center',
            }}>
            Waiting for the request to be accepted
          </Text>
        </View>
      </View>
    );
  };
  
