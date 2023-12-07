import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from '../../style/styles';
import TrainerListData from './TrainerListData';
import TrainerCardData from './TrainerCardData';

const TrainerList = () => {
  const [searchText, setSearchText] = useState('');

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
            }}
          />

          <TextInput
            style={styles.tListSearchInput}
            value={searchText}
            onChangeText={text => setSearchText(text)}
            placeholder="what are you looking for?"
            placeholderTextColor="black"
          />
        </View>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/bell.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: '5%',
          marginTop: '8%',
        }}>
        <Text style={styles.tListHeadText}>Based on your profile</Text>

        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/list_group.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
      </View>

      <TrainerCardData />

      <TrainerListData />
    </View>
  );
};

export default TrainerList;
