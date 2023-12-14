import React from 'react';
import { View, Text } from 'react-native';
import SwipeOut from 'react-native-swipeout';

const SwipeOutCard = ({ onDelete }) => {
    const SwipeButtons = [
      {
        text: 'Delete',
        backgroundColor: 'red',
        onPress: onDelete,
      },
    ];
  
    return (
      <SwipeOut right={SwipeButtons} autoClose={true}>
        <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
        </View>
      </SwipeOut>
    );
  };

  export default SwipeOutCard;
  