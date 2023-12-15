import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from '../Styles/TrainerListStyle';
import { ConnectModal } from './SuccessModals';

const HamburgerModal = ({isHamburgerVisible, onCloseHamburger, selectedTrainer}) => {

const item = selectedTrainer.item;
const index = selectedTrainer.index;

const [showConnectModal, setShowConnectModal] = useState(false);



  //------------------open connect success message---------------  

  const OpenConnectModal = () => {
  
  //  onCloseHamburger();
    setShowConnectModal(true);
    setTimeout(() => {
      setShowConnectModal(false);
      
    }, 2000);
  };
  
  const CloseConnectModal = ()=>{
    setShowConnectModal(false);
  }

  return (
    <View>
      <Modal
        isVisible={isHamburgerVisible}
        onRequestClose={onCloseHamburger}
        animationType="slide"
        transparent={true}>
        <View style={styles.hamburgerModalContent}>
          <TouchableOpacity onPress={onCloseHamburger} style={styles.hamburgerCloseButton}>
            <Image
              source={require('../../../assets/icons/close.png')}
              style={styles.hamburgerCloseImageStyle}
            />
          </TouchableOpacity>

          <View style={styles.hamburgerTextView}>
            <TouchableOpacity style={{height: 50, backgroundColor: 'white'}} onPress={()=>{OpenConnectModal()}}>
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

        

          {showConnectModal &&
        <ConnectModal
          IsConnectModalVisible={showConnectModal}
          onCloseConnectModal={CloseConnectModal}
        
        />}

      </Modal>
    </View>
  );
};

export default HamburgerModal;
