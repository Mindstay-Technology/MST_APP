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

const CommentModal = ({isVisible, onClose, onSubmit, selectedPost}) => {
  const [commentInput, setCommentInput] = useState('');

  const submitComment = () => {
    onSubmit(selectedPost.index, commentInput);
    setCommentInput('');
  };

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
            style={styles.closeImageStyle}
          />
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            marginLeft: '5%',
            position: 'absolute',
            top: '85%',
          }}>
          <Image
            source={selectedPost.post.image}
            style={{height: 50, width: 50, borderRadius: 25, marginRight: '2%'}}
          />
          <View style={styles.inputPostRow}>
            <TextInput
              placeholder="Leave your thoughts for kowshik"
              value={commentInput}
              onChangeText={text => setCommentInput(text)}
              style={styles.input}
            />
            <View
              style={{
                height: 30,
                width: 1,
                backgroundColor: '#E3E3E3',
                alignSelf: 'center',
              }}
            />
            <TouchableOpacity
              style={styles.postButton}
              onPress={() => submitComment()}>
              <Text style={styles.postText}>Post</Text>
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
    elevation: 3,
  },
  closeImageStyle: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '30%',
  },
  input: {
    width: '80%',
    height: 40,
    color: '#8D8D8D',
    fontSize: 12,
    fontWeight: '400',
    marginLeft: '2%',
    textAlign: 'center',
    alignSelf: 'center',
  },
  inputPostRow: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 10,
    width: '80%',
  },
  postButton: {
    alignSelf: 'center',
    marginLeft: '3%',
  },
  postText: {
    color: '#2676C2',
    fontSize: 14,
    fontWeight: '400',
  },
});

export default CommentModal;
