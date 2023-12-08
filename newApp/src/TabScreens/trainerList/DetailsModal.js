// CommentModal.js

import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import styles from './TrainerListStyle'

const DetailsModal = ({isVisible, onClose, selectedTrainer}) => {
  const [commentInput, setCommentInput] = useState('');

  const item = selectedTrainer.item;
  const index = selectedTrainer.index;

  return (
    <View style={{flex: 1, height: '100%'}}>
      <Modal
        isVisible={isVisible}
        onRequestClose={onClose}
        animationType="slide"
        transparent={true}>
        <View style={styles.detailsModalContent}>
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
              <TouchableOpacity>
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
          <View style={styles.hireButton}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.hireText}>Hire Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};


export default DetailsModal;
