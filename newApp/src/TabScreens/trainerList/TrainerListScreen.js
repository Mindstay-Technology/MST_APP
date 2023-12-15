import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from '../../style/styles';
import TrainerListData from './TrainerListData';
import TrainerCardData from './TrainerCardData';

const TrainerListScreen = () => {


  const [searchText, setSearchText] = useState('');

  

  //---------------------------------------

  return (
    <View style={styles.tListContainer}>
      <View style={styles.tListHeaderView}>
        <Image source={require('../../assets/images/tab_logo.png')} />

        <View style={styles.tListSearchView}>
          <Image
            source={require('../../assets/icons/magnify.png')}
            style={{
              width: 20,
              height: 20,
              alignSelf: 'center',
              marginRight: '2%',
              resizeMode:'contain'
            }}
          />

          <TextInput
            style={styles.tListSearchInput}
            value={searchText}
            onChangeText={text => setSearchText(text)}
            placeholder="what are you looking for?"
            placeholderTextColor="#8D8D8D"
          />
        </View>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/bell.png')}
            style={{width: 20, height: 20, resizeMode:'contain'}}
          />
        </TouchableOpacity>
      </View>
      <TrainerListData />
    </View>
  );
};

export default TrainerListScreen;
