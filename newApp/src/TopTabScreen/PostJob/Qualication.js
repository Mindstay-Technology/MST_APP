import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList,
    StyleSheet,
  } from 'react-native';
  import React, {useState, useRef} from 'react';
  
  const Qualification = ({myLocation}) => {
    const searchRef = useRef();
    const [locationData, setLocationData] = useState(myLocation);
    const [selectedLocation, setSelectedLocation] = useState('Enter Location');
    const [isClicked, setIsClicked] = useState(false);
  
    //---------Modal----------------
  
    const openDropDownArea = () => {
      setIsClicked(true);
    };
    //--------------------------------------------
    const onSearch = text => {
      // Implement your search logic here
      if (text !== '') {
        let tempData = locationData.filter(location => {
          return location.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
        });
        setLocationData(tempData);
      } else {
        setLocationData(myData);
      }
    };
  
    const handleLocationSelect = (item, index) => {
      setSelectedLocation(item.name);
      setIsClicked(false);
      onSearch('');
      searchRef.current.clear();
    };
  
    const renderLocationData = ({item, index}) => {
      return (
        <View>
          <TouchableOpacity
            onPress={() => handleLocationSelect(item, index)}
            style={styles.locationNameView}>
            <Text style={styles.locationName}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      );
    };
  
    const keyExtractor = item => item.toString();
  
    return (
      <View style={styles.inputContainer}>
        <TouchableOpacity
        onPress={() => openDropDownArea()}
        style={styles.selectedCurrencyView}>
        <Text style={styles.selectedCurrencyText}>{selectedCurrency}</Text>
        {!isSelected ? (
          <Image
            source={require('../../assets/icons/down.png')}
            style={{
              width: 15,
              height: 15,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
        ) : (
          <Image
            source={require('../../assets/icons/up.png')}
            style={{
              width: 15,
              height: 15,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
        )}
        </TouchableOpacity> 
  
        {isClicked ? (
          <View>
            <TouchableOpacity style={styles.dropDownArea}>
              <TextInput
                ref={searchRef}
                placeholder="Search Location"
                style={styles.searchInput}
                onChangeText={text => {
                  onSearch(text);
                }}
              />
              <View>
                <FlatList
                  data={locationData}
                  renderItem={renderLocationData}
                  keyExtractor={keyExtractor}
                />
              </View>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    inputContainer: {
      marginBottom: '3%',
    },
    locationText: {
      color: '#333333',
      fontSize: 14,
      fontWeight: '500',
      marginBottom: '2%',
    },
    selectedLocationText: {
      color: '#535353',
      fontSize: 12,
      fontWeight: '400',
    },
    locationTextContainer: {
      width: '60%',
      height: 40,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#E3E3E3',
      justifyContent: 'center',
      paddingLeft: '2%',
      marginBottom: '2%',
    },
    dropDownArea: {
      width: '60%',
      height: 200,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#E3E3E3',
      // justifyContent:'center',
      backgroundColor: '#ffffff',
      elevation: 5,
      paddingTop: '2%',
    },
    searchInput: {
      width: '90%',
      height: 40,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#E3E3E3',
      alignSelf: 'center',
      color: '#535353',
      fontSize: 12,
      fontWeight: '400',
    },
    locationNameView: {
      width: '80%',
      height: 40,
      borderBottomWidth: 0.2,
      borderBottomColor: '#E3E3E3',
      alignSelf: 'center',
      justifyContent: 'center',
    },
    locationName: {
      color: '#535353',
      fontSize: 12,
      fontWeight: '400',
    },
  });
  
  export default Qualification;
  