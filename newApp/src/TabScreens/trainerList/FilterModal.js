// CommentModal.js

import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './Styles/TrainerListStyle'

const FilterModal = ({isVisible, onClose}) => {
  const [commentInput, setCommentInput] = useState('');

  const [toggleCheckBox, setToggleCheckBox] = useState({
    checkbox1: false,
    checkbox2: false,
  });

  const handleCheckboxChange = (checkboxName) => {
    setToggleCheckBox((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };
 
  return (
    <Modal
      isVisible={isVisible}
      onRequestClose={onClose}
      animationType="slide"
      transparent={true}>
      <View style={styles.filterModalContent}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Image
            source={require('../../assets/icons/close.png')}
            style={styles.closeImageStyle}
          />
        </TouchableOpacity>

        <View style={{ marginLeft:'10%', marginTop:'20%'}}>
          <View style={{flexDirection:'row', marginBottom:'2%'}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox.checkbox1}
            onValueChange={newValue => handleCheckboxChange('checkbox1')}
           tintColors={{true: '#2676C2', false: '#EAEAEA'}}
            onFillColor='red'
            onCheckColor='red'
          />
            <Text style={styles.locationText}>Search by a location</Text>
          </View>

          <View style={{flexDirection:'row'}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox.checkbox2}
            onValueChange={newValue => handleCheckboxChange('checkbox2')}
           tintColors={{true: '#2676C2', false: '#EAEAEA'}}
            onFillColor='#EAEAEA'
             onCheckColor='#2676C2'
          />
            <Text style={styles.postText}>Search by a post</Text>
          </View>          
        </View>
        <View>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>Filter</Text>
            </TouchableOpacity>
          </View>
      </View>
    </Modal>
  );
};


export default FilterModal;
