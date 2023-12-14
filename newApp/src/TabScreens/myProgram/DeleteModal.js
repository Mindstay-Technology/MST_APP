import { View, Text, Modal, TouchableOpacity, Image} from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/MyProgramStyles'

const DeleteModal = ({isDelVisible, onCloseDelModal, delSelectedProg}) => {
    const navigation = useNavigation();
    const item = delSelectedProg.item;
    const index = delSelectedProg.index;


    //---------------Cancel--------------
const cancelDelProgram =()=>{
    onCloseDelModal();
}

  return (
    <View>
        <Modal
        isVisible={isDelVisible}
        onRequestClose={onCloseDelModal}
        animationType="slide"
        transparent={true}
        >
        <View style={styles.delModalContainer}>

        <TouchableOpacity onPress={onCloseDelModal} style={styles.delCloseButton}>
            <Image
              source={require('../../assets/icons/close.png')}
              style={styles.delCloseImageStyle}
            />
          </TouchableOpacity>

          <Text style={styles.delSureText}>Are you sure, do you want to delete the post application</Text>

          <View style={styles.delButtonsView}>
            <View style={styles.delResetButton}>
              <TouchableOpacity onPress={()=>{delProgram()}}>
                <Text style={styles.delResetText}>Delete</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.delSubmitButton}>
            <TouchableOpacity onPress={()=>{cancelDelProgram()}}>
                <Text style={styles.delSubmitText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
        </Modal>
    </View>
  )
}

export default DeleteModal