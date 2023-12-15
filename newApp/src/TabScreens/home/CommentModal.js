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
import styles from './styles/HomeStyles'

const CommentModal = ({isCommentModalVisible, onCloseComment, onSubmit, selectedPost}) => {
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
      isVisible={isCommentModalVisible}
      onRequestClose={onCloseComment}
      animationType="slide"
      transparent={true}>
      <View style={styles.CommentModalContent}>
        <TouchableOpacity onPress={onCloseComment} style={styles.commentCloseButton}>
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

export default CommentModal;
