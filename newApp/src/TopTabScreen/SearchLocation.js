import { View, Text, TouchableOpacity, Modal, TextInput, FlatList, StyleSheet} from 'react-native'
import React, {useState} from 'react'

const SearchLocation = ({myLocationData}) => {
    const [locationData, setLocationData] =useState(myLocationData);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLocationModal, setIsLocationModal] = useState(false);

//---------Modal----------------

const openSearchModal=()=>{
    setIsLocationModal(true)
};
//--------------------------------------------
const handleSearch = (query) => {
    // Implement your search logic here
    const filteredResults = locationData.filter(
      (location) => location.name.toLowerCase().includes(query.toLowerCase())
    );
    setLocationData(filteredResults);
  };    

    const handleLocationSelect = (selectedLocation) => {
        // Handle the selected location, e.g., set it as the value of the TextInput
        console.log('Selected Location:', selectedLocation);
        setSearchQuery(selectedLocation.name);
        // Clear search results
        // Close the modal
        setIsLocationModal(false);
      };

    const renderLocationData = ({ item, index }) => (
        <TouchableOpacity onPress={() => handleLocationSelect(item)}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      );

  return (
    <View style={styles.inputContainer}>
    <TouchableOpacity onPress={()=>openSearchModal()} style={styles.searchInput}>
    <TextInput
        placeholder="Enter Location"
        value={searchQuery}
        onChangeText={(text) => {
          setSearchQuery(text);
          handleSearch(text);
          setIsLocationModal(true)
        }}
      />
    </TouchableOpacity>

{

}
    <Modal
        animationType="slide"
        transparent={false}
        visible={isLocationModal}
        onRequestClose={() => setIsLocationModal(false)}
      >
        <View >
          <FlatList
            data={locationData}
            renderItem={renderLocationData}
            keyExtractor={(item) => item.id}
          />
        </View>
      </Modal>
    </View>
  )
}

const styles= StyleSheet.create({
    inputContainer:{
        marginBottom:"3%",

    },
    searchInput:{
        width:'60%',
        height:40,
        borderWidth:1,
        borderRadius:5,
        borderColor:'red'
    }
})

export default SearchLocation