import { View, Text,ScrollView, Image, TextInput, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import styles from './styles/MyProgramStyles'
import {OnGoingProData, PreviousProgramData} from '../../constants/Constants'
import OnGoingProgram from './OnGoingProgram';
import PreviousProgram from './PreviousProgram'

const MyProgramScreen = () => {
  const [searchText, setSearchText] =useState('');
  return (
    <View style={styles.programScreenContainer}>
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

      <ScrollView style={{ marginTop:'5%'}}>
        <Text style={styles.onGoingText}>On Going Program</Text>

        <View>
          <OnGoingProgram myData ={OnGoingProData}/>
        </View>

        <Text style={styles.previousProText}>Previous Training Program</Text>
        <View>
          <PreviousProgram myData ={PreviousProgramData}/>
        </View>
      </ScrollView>
    </View>
  )
}

export default MyProgramScreen