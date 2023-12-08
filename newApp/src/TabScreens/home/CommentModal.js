// CommentModal.js

import React, {useState, useEffect} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';

const CommentModal = ({isVisible, onClose, onSubmit, selectedPost}) => {
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComments] = useState([]);
  const [currentTimeString, setCurrentTimeString] = useState('');

  const commentItem = selectedPost.item;
  const commentIndex = selectedPost.index;

  useEffect(() => {
    // Set the static current time string when the component is mounted
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    setCurrentTimeString(`${hours}:${minutes}`);
  }, []);

  const postComment = () => {
    // onSubmit(selectedPost.index, commentInput);
    // setCommentInput('');
    // setComments((pre)=>[...pre,commentInput])
    setComments(prevComments => [...prevComments, commentInput]);
    setCommentInput('');

    // console.log(comments, 'sss')
  };

  const renderComment = ({item, index}) => {
    return (
      <View style={styles.commentFlatListView}>
        <View style={{flexDirection: 'row', marginBottom: '3%'}}>
          <Image
            source={commentItem.image}
            style={{width: 30, height: 30, borderRadius: 15}}
          />
          <View style={styles.CommentNameSkillView}>
            <Text style={styles.commentNameText}>{commentItem.name}</Text>
            <Text style={styles.commentSkillText}>{commentItem.skill}</Text>
          </View>
          <Text style={styles.commentTimeText}>{currentTimeString}</Text>
        </View>
        <View style={styles.postCommentBoxStyle}>
          <Text style={styles.postCommentText}>{item}</Text>
        </View>
      </View>
    );
  };

  return (
    <Modal
      isVisible={isVisible}
      onRequestClose={onClose}
      animationType="slide"
      transparent={true}>
      <View style={styles.CommentModalContent}>
        <TouchableOpacity onPress={onClose} style={styles.commentCloseButton}>
          <Image
            source={require('../../assets/icons/close.png')}
            style={styles.commentCloseImageStyle}
          />
        </TouchableOpacity>

        <FlatList
          data={comments}
          keyExtractor={index => index.toString()}
          renderItem={renderComment}
          //   contentContainerStyle={styles.commentsList}
        />
        <View
          style={styles.commentInputPostRow}>
          <Image
            source={commentItem.image}
            style={{height: 50, width: 50, borderRadius: 25, marginRight: '2%'}}
          />
          <View style={styles.inputPostRow}>
            <TextInput
              placeholder="Leave your thoughts for kowshik"
              value={commentInput}
              onChangeText={text => setCommentInput(text)}
              style={styles.commentTextInput}
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
              style={styles.commentPostButton}
              onPress={() => postComment()}>
              <Text style={styles.commentPostText}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  CommentModalContent: {
    backgroundColor: '#ffffff', //FDFEFE
    height: '70%',
    width: '100%',
    top: '30%',
    opacity: 1,
    borderColor: '#1111111A',
    borderWidth: 0.5,
    paddingTop: '10%'
  },
  commentCloseButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ffff',
    position: 'absolute',
    alignSelf: 'center',
    bottom: '103%',
    borderColor: '#1111111A',
    borderWidth: 1,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 2,
    shadowRadius: 4,
    elevation: 3,
  },
  commentCloseImageStyle: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '30%',
  },

  commentFlatListView:{
    marginLeft: '5%' , 
    marginBottom:'5%',
  },
  
  commentInputPostRow:{
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: '5%',
    paddingTop: '5%',
  },
  inputPostRow: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 10,
    width: '80%',
  },
  commentTextInput: {
    width: '80%',
    height: 40,
    color: '#8D8D8D',
    fontSize: 12,
    fontWeight: '400',
    marginLeft: '2%',
  //  textAlign: 'center',
    alignSelf: 'center',
  },
  commentPostButton: {
    alignSelf: 'center',
    marginLeft: '3%',
  },
  commentPostText: {
    color: '#2676C2',
    fontSize: 14,
    fontWeight: '400',
  },
  CommentNameSkillView: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: '3%',
  },
  commentNameText: {
    color: '#333333',
    fontSize: 12,
    fontWeight: '500',
  },
  commentSkillText: {
    color: '#888888',
    fontSize: 10,
    fontWeight: '400',
  },
  commentTimeText:{
    color:'#888888',
    fontSize:10,
    fontWeight:'300',
    position:'absolute',
    left:'70%'
  },
  postCommentBoxStyle: {
    width: '70%',
    height: 50,
    borderWidth: 1,
    borderColor:'#EEEEEE',
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: '10%',
    paddingLeft: '2%',
    paddingTop:'1%',
    paddingRight:'1%'
  },
  postCommentText: {
    color: '#535353',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 15,
    alignSelf: 'flex-start',
  },
});

export default CommentModal;
