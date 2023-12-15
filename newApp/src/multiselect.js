import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const MultiSelectDropdown = ({ options, selectedValues, onSelect }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSelectItem = (item) => {
    onSelect(item);
    toggleDropdown();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleSelectItem(item)}>
      <Text style={styles.optionText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
        <Text>{selectedValues.length > 0 ? selectedValues.join(', ') : 'Select Items'}</Text>
      </TouchableOpacity>

      {dropdownVisible && (
        <FlatList
          data={options}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          style={styles.dropdown}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  dropdownButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  dropdown: {
    position: 'absolute',
    top: 40,
    right: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    zIndex: 1,
  },
  optionText: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default MultiSelectDropdown;
