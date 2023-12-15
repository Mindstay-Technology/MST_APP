import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles/MyProgramStyles';
import { useNavigation } from '@react-navigation/native';
import DeleteModal from './DeleteModal';


const MenuModal = ({isMenuVisible, onCloseMenu, selectedProgram, deleteProgram}) => {
    const navigation = useNavigation();
    const item = selectedProgram.item;
    const index = selectedProgram.index;

    const [showDelModal, setShowDelModal] = useState(false);
    const [delSelectedProg, setDelSelectedProg] = useState(null);


//--------------------Edit---------------  
const handleEditPost=(item, index)=>{
    onCloseMenu();
    navigation.navigate('PostTabs')
};

//-------------------Delete----------------------
const handleDeletePost =(item, index) =>{
    
    setDelSelectedProg(item, index);
    setShowDelModal(true);
   // onCloseMenu();
};

const closeDelModal = () => {
    setShowDelModal(false);
  };
//-------------------------------

  return (
    <View>
      <Modal
        isVisible={isMenuVisible}
        onRequestClose={onCloseMenu}
        animationType="slide"
        transparent={true}
        >
        <View style={styles.menuModalContainer}>
          <TouchableOpacity onPress={onCloseMenu} style={styles.menuCloseButton}>
            <Image
              source={require('../../assets/icons/close.png')}
              style={styles.menuCloseImageStyle}
            />
          </TouchableOpacity>

          <View style={styles.menuTextView}>
            <TouchableOpacity style={{height: 50, backgroundColor: 'white'}} onPress={()=>{handleEditPost(item, index)}}>
              <Text style={styles.menuModalText}>Edit</Text>
            </TouchableOpacity>            
            <View style={styles.menuModalLine} />
            <TouchableOpacity style={{height: 50, backgroundColor: 'white'}} onPress={()=>handleDeletePost(item, index)}>
              <Text style={styles.menuModalText}>Delete</Text>
            </TouchableOpacity>            
          </View>
          {
            showDelModal && (
                <DeleteModal
                    isDelVisible = {showDelModal}
                    onCloseDelModal = {closeDelModal}
                    deleteProgram = {deleteProgram}

                />
            )
          }
        </View>


      </Modal>
    </View>
  );
};

export default MenuModal;
