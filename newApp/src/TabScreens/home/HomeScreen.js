import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles/HomeStyles';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeListData from './HomeListData';
import {HomeData} from '../../constants/Constants';

const HomeScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');

  
  return (
    <View style={styles.HomeScreenContainer}>
      <View style={styles.headerView}>
        <Image source={require('../../assets/images/tab_logo.png')} />

        <View style={styles.searchView}>
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
            style={styles.searchInput}
            value={searchText}
            onChangeText={text => setSearchText(text)}
            placeholder="what are you looking for?"
            placeholderTextColor="#8D8D8D"
          />
        </View>
        <TouchableOpacity>
        <Image source={require('../../assets/icons/bell.png')} style={{width:20, height:20, resizeMode:'contain'}} />
        </TouchableOpacity>
      </View>

      <HomeListData myData = {HomeData}/>
      
      <View style={styles.plusButton}>
          <TouchableOpacity onPress={()=>navigation.navigate('PostTabs')}>
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default HomeScreen;
