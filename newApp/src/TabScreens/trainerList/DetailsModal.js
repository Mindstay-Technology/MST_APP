// CommentModal.js

import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList
} from 'react-native';
import StarRating from 'react-native-star-rating';
import styles from './TrainerListStyle';
import {TListData} from '../../constants/Constants'
import HamburgerModal from './HamburgerModal'
import HireNowModal from './SuccessModals';

const DetailsModal = ({isVisible, onClose, selectedTrainer}) => {

  const item = selectedTrainer.item;
  const index = selectedTrainer.index;

  const [isModalVisible, setModalVisible] = useState(false);
  const [buttonText, setButtonText] = useState('Hire Now');
  const [hireNowSuccess, setHireNowSuccess] = useState(false);


//------------------------Hamburger Modal------
  const showHamburgerModal = (item, index) => {
    setModalVisible(true);
  };

  const closeHamburgerModal = () => {
    setModalVisible(false);
  };

  //-------------------hire now success message---------------
  const handleHireNow = () => {
    setHireNowSuccess(true);

    // Automatically hide the half-screen after 3 seconds
    setTimeout(() => {
      setButtonText('Pending...');
      setHireNowSuccess(false)
    }, 3000);
  };

 
  return (
    <View style={{flex: 1, height: '100%'}}>
      <Modal
        isVisible={isVisible}
        onRequestClose={onClose}
        animationType="slide"
        transparent={true}>
        <View style={styles.detailsModalContent}>
        
        <ScrollView>

        {isModalVisible &&
        <HamburgerModal
          isVisible={isModalVisible}
          onClose={closeHamburgerModal}
        
        />}

          <Image
            source={item.bannerImage}
            style={styles.bannerImageStyle}
          />

          <View style={styles.rowDataStyle}>
            <Image source={item.image} style={styles.imageStyle} />
            <View style={styles.columnData}>
              <Text style={styles.nameStyle}>{item.name}</Text>
              <Text style={styles.designationStyle}>{item.designation}</Text>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={item.rating}
                starSize={15}
                fullStarColor="gold"
                emptyStarColor="gray"
              />
              <View style={styles.dateView}>
                <Text style={styles.availText}>Avail On</Text>
                <Text style={styles.availDateText}>{item.date}</Text>
              </View>
            </View>
            <View
              style={{
                position: 'absolute',
                left: '95%',
                top: '40%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity onPress={()=>showHamburgerModal()}>
                <Image
                  source={require('../../assets/icons/menu.png')}
                  style={{width: 15, height: 15, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
            </View>
          </View>

                <View style={styles.profileTextView}>
                  <Text style={styles.profileText}>{item.designation} | {item.profile}</Text>
                </View>

                <Text style={styles.contentText}>{item.content}</Text>

                <View style={styles.horizontalLine}/>
                <Text style={styles.titleText}>{item.certification.title}</Text>

                <View style={styles.certOrganizaTionView}>
                <Text style={styles.certDesignationText}>{item.certification.designation}</Text>
                <Text style={styles.certOrganizaTionText}>{item.certification.organization}</Text>
                </View>

                <Text style={styles.certContentText}>{item.certification.content}</Text>
        
                <Image
            source={item.certification.certificate}
            style={styles.certImage}
          />

                <View style={{flexDirection:'row',}}>
                <Text style={{color:'#535353', fontSize:12, fontWeight:'500' ,     marginLeft:'5%', marginBottom:'2%'}}>Certified development:</Text>
                <Text style={{color:'#2676C2', fontSize:12, fontWeight:'500'}}>{item.certification.organization}</Text>
                </View>
                <Text style={styles.certContentText}>{item.certification.content}</Text>

                <Text style={styles.skillsHeadText}>Skills</Text>
                  
                  <View style={styles.lineContainer}>
                <Image
                  source={item.skills.react}
                  style={{width: 25, height: 25, marginRight: '2%'}}
                />
                    <View style={{width:'70%', marginRight:'2%'}}>
                    <View style={[styles.line, { width: `${item.langPercent.react}%` }]} />
                    </View>
                    <Text style={styles.percentageText}>{`${item.langPercent.react}%`}</Text>
                </View>

                

          </ScrollView>
          <View style={styles.hireButton}>
            <TouchableOpacity onPress={()=>handleHireNow()}>
              <Text style={styles.hireText}>{buttonText}</Text>
            </TouchableOpacity>
          </View>
          
          {setHireNowSuccess && ( 
            <HireNowModal/>
          )}
          
        </View>
      </Modal>
    </View>
  );
};


export default DetailsModal;
