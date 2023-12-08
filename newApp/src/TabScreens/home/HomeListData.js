import {View, Text, FlatList, TouchableOpacity, Image, Modal, Animated} from 'react-native';
import React, {useState, useEffect} from 'react';
import {HomeData} from '../../constants/Constants';
import styles from '../../style/styles';
import CommentModal from './CommentModal'

const HomeListData = () => {

  

  
  const [data, setData] = useState(HomeData);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // const [page, setPage] = useState(1);
   const [loading, setLoading] = useState(false);



  //-----------Comment Modal--------------

  
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState();

  const handleComment = (item, index) => {
    setSelectedPost({ item, index });
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedPost(null);
  };

  const submitComment = (index, comment) => {
    const updatedPosts = [...posts];
    updatedPosts[index] = {
      ...updatedPosts[index],
      comments: [...(updatedPosts[index].comments || []), comment],
    };
    setPosts(updatedPosts);
    closeModal();
  };

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

  


//----------Like ----------------------


  const handleLike = (index) => {
    setSelectedImageIndex(index === selectedImageIndex ? null : index);    
  };

  const getLikeColor = (index) => (index === selectedImageIndex ? 'red' : '#8D8D8D');


  const renderHomeData = ({item, index}) => {
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
              <TouchableOpacity>
                <Image
                  source={require('../../assets/icons/save.png')}
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
              source={require('../../assets/icons/like.png')}
              style={[styles.likeImage, { tintColor: getLikeColor(index)}]}
            />
          </TouchableOpacity>
        
          <TouchableOpacity style={{marginRight: '10%'}} onPress={()=>handleComment(item, index)}>
            <Image
              source={require('../../assets/icons/comment.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/send.png')}
              style={{width: 24, height: 24}}
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
      <View style={styles.scrollViewContainer}>
        <Text style={styles.homeHeadText}>Based on your profile</Text>
        {selectedPost && (
        <CommentModal
          isVisible={isModalVisible}
          onClose={closeModal}
          onSubmit={submitComment}
          selectedPost={selectedPost}
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
        <View style={{width:50, height:50, borderRadius:25, backgroundColor:'#2676C2', position:'absolute', justifyContent:'center', top:'78%', left:'82%'}}>
          <TouchableOpacity>
            <Text style={{color:'#ffffff', textAlign:'center', fontSize:16, fontWeight:'600'}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeListData;
