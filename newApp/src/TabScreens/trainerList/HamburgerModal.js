import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles/TrainerListStyle';
import { ConnectModal } from './SuccessModals';

const HamburgerModal = ({isVisible, onClose}) => {


  const [connectSuccess, setConnectSuccess] = useState(false);


  //------------------open connect success message---------------
  const ShowConnectModal = () => {
   // onClose();
   setConnectSuccess(true);
    setTimeout(() => {
      setConnectSuccess(false);
      onClose();
    }, 2000);

  };


  return (
    <View>
      <Modal
        isVisible={isVisible}
        onRequestClose={onClose}
        animationType="slide"
        transparent={true}>
        <View style={styles.hamburgerModalContent}>
          <TouchableOpacity onPress={onClose} style={styles.hamburgerCloseButton}>
            <Image
              source={require('../../assets/icons/close.png')}
              style={styles.hamburgerCloseImageStyle}
            />
          </TouchableOpacity>

          <View style={styles.hamburgerTextView}>
            <TouchableOpacity style={{height: 50, backgroundColor: 'white'}} onPress={()=>{ShowConnectModal()}}>
              <Text style={styles.hamburgerModalText}>Connect</Text>
            </TouchableOpacity>            
            <View style={styles.hamburgerModalLine} />
            <TouchableOpacity style={{height: 50, backgroundColor: 'white'}}>
              <Text style={styles.hamburgerModalText}>Share Via</Text>
            </TouchableOpacity>
            <View style={styles.hamburgerModalLine} />
            <TouchableOpacity style={{height: 50, backgroundColor: 'white'}}>
              <Text style={styles.hamburgerModalText}>
                Remove, Don’t Show Again
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {connectSuccess && ( 
            <ConnectModal/>
          )}

      </Modal>
    </View>
  );
};

export default HamburgerModal;
