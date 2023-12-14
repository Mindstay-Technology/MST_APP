import {View, Text} from 'react-native';
import React from 'react';
import styles from '../Styles/TrainerListStyle';

const SearchModal = ({isVisible, onClose}) => {
  return (
    <View style={{flex:1}}>
      <Modal
        isVisible={isVisible}
        onRequestClose={onClose}
        animationType="slide"
        transparent={true}>
            <View style={styles.searchModalContent}>

                
            </View>
        </Modal>
    </View>
  );
};

export default SearchModal;
