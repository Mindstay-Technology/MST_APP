import { View, Text, FlatList,ScrollView} from 'react-native'
import React from 'react'
import styles from './MyProgramStyles'
import {MyProgramData} from '../../constants/Constants'
import FlatListData from './FlatListData'

const MyProgramScreen = () => {
  return (
    <View style={style.programScreenContainer}>
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

      <ScrollView style={{marginLeft:'3%'}}>
        <Text style={styles.headTextStyle}>On Going Program</Text>

        <View>
          <FlatListData data ={MyProgramData}/>
        </View>
      </ScrollView>
    </View>
  )
}

export default MyProgramScreen