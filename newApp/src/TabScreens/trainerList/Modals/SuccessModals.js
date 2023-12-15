import {View, Text, Image, Modal, StyleSheet} from 'react-native';
import React from 'react';

export const HireNowModal = () => {
  return (
    <View style={styles.modalContainer}>
      <View>
        <View style={{marginTop: '3%', marginBottom: '3%'}}>
          <Image
            source={require('../../../assets/images/connect_circle.png')}
            style={styles.successOuterImage}
          />
          <Image
            source={require('../../../assets/images/connect.png')}
            style={styles.successInnerImage}
          />
        </View>
        <Text style={styles.headText}>
          Request sent to the trainer successfully
        </Text>
        <Text style={styles.bottomText}>Kindly await acceptance</Text>
      </View>
    </View>
  );
};

export const ConnectModal = ({IsConnectModalVisible, onCloseConnectModal}) => {
  return (
    <View>
      <Modal
        isVisible={IsConnectModalVisible}
        onRequestClose={onCloseConnectModal}
        animationType="slide"
        transparent={true}>
        <View style={styles.modalContainer}>
          <View style={{marginTop: '3%', marginBottom: '3%'}}>
            <Image
              source={require('../../../assets/images/connect_circle.png')}
              style={styles.successOuterImage}
            />
            <Image
              source={require('../../../assets/images/connect.png')}
              style={styles.successInnerImage}
            />
          </View>
          <Text style={styles.headText}>
            Your connection request has been sent!
          </Text>
          <Text style={styles.bottomText}>
            Waiting for the request to be accepted
          </Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    top: '75%',
    left: 0,
    width: '100%',
    height: '25%',
    backgroundColor: '#ffffff', // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  successOuterImage: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  successInnerImage: {
    alignSelf: 'center',
    position: 'absolute',
    width: 55,
    height: 55,
    resizeMode: 'contain',
    top: '13%',
  },
  headText: {
    color: '#535353',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
  bottomText: {
    color: '#535353',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
});
