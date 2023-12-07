import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeData} from '../../constants/Constants';
import styles from '../../style/styles';

const HomeListData = () => {


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

  //     const [data, setData] = useState([]);
  //   const [page, setPage] = useState(1);
  //   const [isLoading, setIsLoading] = useState(true);

  //   const fetchData = async () => {
  //     try {
  //       const response = await Axios(`https://api.example.com/data?page=${page}`);
  //       const newData = await response.json();

  //       setData((prevData) => [...prevData, ...newData]);
  //       setPage((prevPage) => prevPage + 1);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  // const handleEndReached = () => {
  //     // Fetch more data when the user reaches the end of the list
  //     fetchData();
  //   };

  // if (isLoading) {
  //     return (
  //       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //         <ActivityIndicator size="large" color="blue" />
  //       </View>
  //     );
  //   }

  //-----------------------------------------------------

  const renderHomeData = ({item}) => {
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
              marginLeft: '45%',
              justifyContent: 'flex-end',
              flexDirection: 'row',
            }}>
            <TouchableOpacity style={{marginRight: '5%'}}>
              <Icon name="bookmark-outline" size={25} color="#8D8D8D" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name="dots-vertical" size={25} color="#8D8D8D" />
            </TouchableOpacity>
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

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{marginRight: '10%'}}>
            <Image source = {require('../../assets/icons/like.png')} style={{width:24, height:24}}/>
          
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: '10%'}}>
          <Image source = {require('../../assets/icons/comment.png')} style={{width:24, height:24}}/>
          </TouchableOpacity>

          <TouchableOpacity>
          <Image source = {require('../../assets/icons/send.png')} style={{width:24, height:24}}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const keyExtractor = item => item.toString();

  const renderSeparator = () => {
    <View style={styles.homeSeparatorStyle} />;
  };

  return (
    <View>
      <View style={styles.scrollViewContainer}>
        <Text style={styles.homeHeadText}>Based on your profile</Text>

        <View>
          <FlatList
            data={HomeData}
            renderItem={renderHomeData}
            keyExtractor={keyExtractor}
            ItemSeparatorComponent={renderSeparator}
            // onEndReached={handleEndReached}
            // onEndReachedThreshold={0.1}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeListData;
