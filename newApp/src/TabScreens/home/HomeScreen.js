import {View, Text, Image, TextInput, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from '../../style/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeListData from './HomeListData';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');

  
  return (
    <View style={styles.HomeScreenContainer}>
      <View style={styles.headerView}>
        <Image source={require('../../assets/images/tab_logo.png')} />

        <View style={styles.searchView}>
          <Icon
            name="magnify"
            size={30}
            color="black"
            style={styles.searchIconStyle}
          />
          <TextInput
            style={styles.searchInput}
            value={searchText}
            onChangeText={text => setSearchText(text)}
            placeholder="what are you looking for?"
            placeholderTextColor="black"
          />
        </View>
        <TouchableOpacity>
        <Image source={require('../../assets/icons/bell.png')} style={{width:20, height:25}} />
        </TouchableOpacity>
      </View>

      <HomeListData/>
    </View>
  );
};

export default HomeScreen;
