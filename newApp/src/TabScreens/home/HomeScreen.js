import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from '../../style/styles';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeListData from './HomeListData';

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
            placeholderTextColor="black"
          />
        </View>
        <TouchableOpacity>
        <Image source={require('../../assets/icons/bell.png')} style={{width:20, height:20, resizeMode:'contain'}} />
        </TouchableOpacity>
      </View>

      <HomeListData/>
      
      <View style={{width:50, height:50, borderRadius:25, backgroundColor:'#2676C2', position:'absolute', justifyContent:'center', top:'90%', left:'82%'}}>
          <TouchableOpacity onPress={()=>navigation.navigate('PostTabs')}>
            <Text style={{color:'#ffffff', textAlign:'center', fontSize:16, fontWeight:'600'}}>+</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default HomeScreen;
