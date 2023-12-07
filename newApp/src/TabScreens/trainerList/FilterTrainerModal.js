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

const FilterTrainerModal = ({isVisible, onClose}) => {
  const [commentInput, setCommentInput] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <Modal
      isVisible={isVisible}
      onRequestClose={onClose}
      animationType="slide"
      transparent={true}>
      <View style={styles.modalContent}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Image
            source={require('../../assets/icons/close.png')}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
              alignSelf: 'center',
              marginTop: '25%',
            }}
          />
        </TouchableOpacity>

        <View style={styles.modalContainer}>
          <View>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          //  tintColors={{true: 'white', false: 'white'}}
            onFillColor='#EAEAEA'
            onCheckColor='#2676C2'
          />
            <Text style={styles.locationText}>Search by a location</Text>
          </View>
          <View>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
           // tintColors={{true: 'white', false: 'white'}}
            onFillColor='#EAEAEA'
            onCheckColor='#2676C2'
          />
            <Text style={styles.postText}>Search by a posts</Text>
          </View>

          <View>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white', //FDFEFE
    height: '70%',
    width: '100%',
    position: 'absolute',
    top: '30%',
    opacity: 1,
    borderColor: '#1111111A',
    borderWidth: 0.5,
  },
  closeButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ffff',
    position: 'absolute',
    alignSelf: 'center',
    bottom: '95%',
    borderColor: '#1111111A',
    borderWidth: 1,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 2,
    shadowRadius: 4,
    elevation: 5,
  },
  closeImageStyle: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '25%',
  },
  modalContainer:{
    alignItems:'flex-start',
    marginTop:'30%'
    
  },
  locationText: {
    color: '#535353',
    fontSize: 14,
    fontWeight: '400',
  },
  postText: {
    color: '#535353',
    fontSize: 16,
    fontWeight: '400',
  },
  filterButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#2676C2',
    borderRadius: 10,
  },
  filterText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default FilterTrainerModal;
