import {View, Text, FlatList, TouchableOpacity, Image, Modal, Animated, ScrollView} from 'react-native';
import React, {useState, useEffect,} from 'react';
import styles from './styles/HomeStyles';
import CommentModal from './CommentModal'

const HomeListData = ({myData}) => {
  
  const [data, setData] = useState(myData);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [likedPost, setLikedPost] =useState([]);
  const [savedPost, setSavedPost] = useState([]);  
  const [isCommentModal, setIsCommentModal] = useState(false);
  const [postComment, setPostComment] = useState();
  const [loading, setLoading] = useState(false);


  //---------------using redux-------------

  // const dispatch = useDispatch();
  // const { data, isLoading, error, page } = useSelector((state) => state.data);

  // const fetchData = async () => {
  //   try {
  //     dispatch(fetchDataRequest());

  //     // Fetch data from the API
  //     const response = await fetch(`https://api.example.com/data?page=${page}`);
  //     const newData = await response.json();

  //     dispatch(fetchDataSuccess(newData));
  //   } catch (error) {
  //     dispatch(fetchDataFailure(error.message));
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []); // Fetch initial data on mount

  // const handleEndReached = () => {
  //   // Fetch more data when the user reaches the end of the list
  //   fetchData();
  // };

  // if (isLoading && page === 1) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" color="blue" />
  //     </View>
  //   );
  // }

  //-------------without redux------------


  // const fetchData = async () => {
  //   try {
  //     setLoading(true);

  //     setData((prevData) => [...prevData, ...data]);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [page]);

  // const handleLoadMore = () => {
  //   if (!loading) {
  //     setPage((prevPage) => prevPage + 1);
  //   }
  // };
  //-----------------------------------------------------

  


//----------Like  ----------------------
  const handleLike = (index) => {
    const updatedLikedPosts = likedPost.includes(index)
    ? likedPost.filter((id) => id !== index)
    : [...likedPost, index];

  setLikedPost(updatedLikedPosts);
  };

  //-----------Save------------------

  const handleSave=(index) =>{
    const updatedSavedPosts = savedPost.includes(index)
    ? savedPost.filter((id)=>  id !== index)
    : [...savedPost, index];

  setSavedPost(updatedSavedPosts);
  }

  //-----------Comment Modal--------------
  const handleComment = (item, index) => {
    setPostComment({ item, index });
    setIsCommentModal(true);
  };

  const closeCommentModal = () => {
    setIsCommentModal(false);
    setPostComment(null);
  };

  // const submitComment = (index, comment) => {
  //   const updatedPosts = [...posts];
  //   updatedPosts[index] = {
  //     ...updatedPosts[index],
  //     comments: [...(updatedPosts[index].comments || []), comment],
  //   };
  //   setPosts(updatedPosts);
  //   closeModal();
  // };

  const renderHomeData = ({item, index}) => {
    const isLiked = likedPost.includes(index);
    const isSaved = savedPost.includes(index);
    return (
      <View style={styles.flatListHomeData}>
        <View style={styles.homeRowView}>
          <Image
            source={item.image}
            style={{width: 50, height: 50, borderRadius: 25, marginRight: '5%'}}
          />

          <View style={styles.nameDesignationView}>
            <Text style={styles.homeName}>{item.name}</Text>
            <Text style={styles.homeDesignationStyle}>{item.skill}</Text>
          </View>

          <View
            style={{
              marginLeft: '40%',
              justifyContent: 'flex-end',
              flexDirection: 'row',
            }}>
            <View>
              <TouchableOpacity onPress={()=>handleSave(index)}>
                <Image
                  source={isSaved? require('../../assets/icons/saved.png'): require('../../assets/icons/save.png')}
                  style={{
                    width: 15,
                    height: 15,
                    alignSelf: 'center',
                    marginRight: '2%',
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <View style={{marginLeft: '15%'}}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/icons/menu.png')}
                  style={{
                    width: 15,
                    height: 15,
                    alignSelf: 'center',
                    marginRight: '2%',
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Text style={styles.homeDescStyle}>{item.description}</Text>
        <Text style={styles.homeSalaryRangeStyle}>
          {'\u20B9'}
          {item.salaryRange}
        </Text>

        <View style={styles.homeModeStyleView}>
          <Text style={styles.homeModeStyle}>Mode - </Text>
          <Text style={styles.homeModeStyle1}>{item.mode}</Text>
        </View>

        <View style={styles.homeAvailableStyleView}>
          <Text style={styles.homeAvailableStyle}>Available - </Text>
          <Text style={styles.homeAvailableStyle1}>{item.available}</Text>
        </View>

        <View style={{flexDirection: 'row', marginBottom:'2%'}}>
          <TouchableOpacity style={{marginRight: '10%'}} onPress={() => handleLike(index)}>
            <Image
              source={isLiked ? require('../../assets/icons/liked.png') : require('../../assets/icons/like.png')}
              style={styles.likeImage}
            />
          </TouchableOpacity>
        
          <TouchableOpacity style={{marginRight: '10%'}} onPress={()=>handleComment(item, index)}>
            <Image
              source={require('../../assets/icons/comment.png')}
              style={{width: 20, height: 20, resizeMode:'contain'}}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/send.png')}
              style={{width: 20, height: 20, resizeMode:'contain'}}
            />
          </TouchableOpacity>
        </View>
        <View style={{width:'98%', height:1, backgroundColor:'#D9D9D9', alignSelf:'center'}}/>
      </View>
    );
  };
  const keyExtractor = item => item.toString();

  const renderSeparator = () => {
    <View style={styles.homeSeparatorStyle} />;
  };

  
  const renderFooter = () => {
    return loading ? (
      <ActivityIndicator style={{paddingBottom:20}} size="large" color="blue" />
    ) : null;
  };

  return (
    <View>
    <ScrollView>
      <View style={styles.scrollViewContainer}>
        <Text style={styles.homeHeadText}>Based on your profile</Text>
        {postComment && (
        <CommentModal
          isCommentModalVisible={isCommentModal}
          onCloseComment={closeCommentModal}
        //  onSubmit={submitComment}
          selectedPost={postComment}
        />
      )}
        <View>
          <FlatList
            data={data}
            renderItem={renderHomeData}
            keyExtractor={keyExtractor}
            scrollEnabled
            ItemSeparatorComponent={renderSeparator}
           // onEndReached={handleLoadMore}
             onEndReachedThreshold={0.1}
           // contentContainerStyle={{ flexGrow: 1 }}
          />
        </View>
        
      </View>
      </ScrollView>
      
    </View>
  );
};

export default HomeListData;
