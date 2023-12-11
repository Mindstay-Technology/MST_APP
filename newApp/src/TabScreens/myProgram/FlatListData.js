import { View, Text, FlatList } from 'react-native'
import React from 'react'

const FlatListData = ({data}) => {


    const renderProgramData =()=>{

    };
    
    const keyExtractor=(index)=>index.toString()

  return (
    <View>
    <FlatList
        data = {data}
        renderItem={renderProgramData}
        keyExtractor={keyExtractor}
    />
    </View>
  )
}

export default FlatListData