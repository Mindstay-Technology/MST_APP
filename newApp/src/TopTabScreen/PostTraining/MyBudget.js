import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

const MyBudget = ({myCurrency}) => {
  const [currencyData, setCurrencyData] = useState(myCurrency);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('IND');

  const [minInput, setMinInput] = useState('');
  const [maxInput, setMaxInput] = useState('');

  const openDropDownArea = () => {
    setIsSelected(true);
  };

  const handleCurrencySelect = (item, index) => {
    setSelectedCurrency(item.name);
    setIsSelected(false);
  };

  const renderCurrencyData = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => handleCurrencySelect(item, index)}
          style={styles.currencyNameView}>
          <Text style={styles.currencyName}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const keyExtractor = item => item.toString();

  const currencySymbols = {
    IND: '₹', // Indian Rupee
    USD: '$', // US Dollar
    UAE: 'د.إ', // UAE Dirham
    EURO: '\u20AC',// Euro
    // Add more currency symbols as needed
  };

  const getCurrencySymbol = (currencyCode) => {
    return currencySymbols[currencyCode] || '';
  };

  return (
    <View >
      <View style={styles.currencyView}>
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


      <View
        style={styles.minMaxView}>
        <TextInput
          style={styles.minInput}
        //  placeholder="Min"
        placeholder={`${getCurrencySymbol(selectedCurrency)} Min`}
          value={minInput}
          onChangeText={text => {
            setMinInput(text);
            // setCompanyError('');
          }}
          autoCapitalize="none"
          placeholderTextColor={'#535353'}
        />
        <View style={styles.verticalLine1} />
        <TextInput
          style={styles.maxInput}
          //placeholder="Max"
          placeholder={`${getCurrencySymbol(selectedCurrency)} Max`}
          value={maxInput}
          onChangeText={text => {
            setMaxInput(text);
            // setCompanyError('');
          }}
          autoCapitalize="none"
          placeholderTextColor={'#535353'}
        />
      </View>
      </View>

      {isSelected ? (
          <View>
            <TouchableOpacity style={styles.dropDownArea}>
              <View>
                <FlatList
                  data={currencyData}
                  renderItem={renderCurrencyData}
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
  currencyView: {
    flexDirection: 'row',
    width: '75%',
    height: 40,
    marginBottom: '2%',
  },
  selectedCurrencyView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '35%',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },
  selectedCurrencyText: {
    color: '#535353',
    fontSize: 14,
    fontWeight: '400',
    marginRight: '3%',
    marginLeft: '2%',
    alignSelf: 'center',
  },
  minMaxView:{
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    justifyContent: 'space-around',
    borderColor: '#E3E3E3',
    borderTopEndRadius: 8,
    borderBottomRightRadius: 8,
  },
  minInput: {
    color: '#888888',
    backgroundColor: '#ffffff',
    fontSize: 14,
    fontWeight: '400',
    width: '35%',
    textAlign: 'center',
    justifyContent: 'center',
  },
  maxInput: {
    color: '#888888',
    backgroundColor: '#ffffff',
    fontSize: 14,
    fontWeight: '400',
    width: '35%',
        textAlign: 'center',
    justifyContent: 'center',
  },
  verticalLine1: {
    height: 40,
    width: 1,
    backgroundColor: '#E3E3E3',
  },
  verticalLine2: {
    height: 40,
    width: 1,
    backgroundColor: '#E3E3E3',
  },

  dropDownArea: {
    width: '25%',
    height: 160,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E3E3E3',
    justifyContent:'center',
    backgroundColor: '#ffffff',
    elevation: 5,
    paddingTop: '1%',
    marginBottom: '3%',
  },
  currencyNameView: {
    width: '80%',
    height: 30,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  currencyName: {
    color: '#535353',
    fontSize: 12,
    fontWeight: '400',
  },
});

export default MyBudget;
