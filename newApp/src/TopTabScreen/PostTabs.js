import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PostJobScreen from './PostJobScreen';
import PostTrainingScreen from './PostTrainingScreen';
import styles from './Styles/PostScreenStyles';

const Tab = createMaterialTopTabNavigator();

const PostTabs = ({navigation}) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={{flex: 1, backgroundColor:'#ffffff'}}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
          <Image
            source={require('../assets/icons/goback.png')}
            style={{width: 15, height: 15, resizeMode: 'contain'}}
          />
        </TouchableOpacity>

        <View style={styles.searchView}>
          <Image
            source={require('../assets/icons/magnify.png')}
            style={{
              width: 20,
              height: 20,
              alignSelf: 'center',
              marginRight: '2%',
              resizeMode: 'contain',
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
          <Image
            source={require('../assets/icons/bell.png')}
            style={{width: 20, height: 20, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>

      <Tab.Navigator
        initialRouteName="PostTrainingScreen"
        screenOptions={{
          
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#2676C2',
          tabBarInactiveTintColor: '#888888',
          tabBarLabelStyle: {fontSize: 14, fontWeight: '500'},
          tabBarStyle: {backgroundColor: 'white'},
          style: {backgroundColor: 'white'},
          indicatorStyle: {backgroundColor: '#2676C2'},
          swipeEnabled:false,
          

          // tabBarIndicatorContainerStyle:{width:'40%', marginLeft:'13%', }
        }}>
        <Tab.Screen
          name="PostTrainingScreen"
          component={PostTrainingScreen}
          options={{
            tabBarLabel: 'Post Training',
            tabBarIndicatorContainerStyle: {width: '40%', marginLeft: '13%'},
          }}
        />
        <Tab.Screen
          name="PostJobScreen"
          component={PostJobScreen}
          options={{
            tabBarLabel: 'Post Job',
            tabBarIndicatorContainerStyle: {width: '30%', marginLeft: '15%'},
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default PostTabs;
