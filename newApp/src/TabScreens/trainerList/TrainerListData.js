import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  
} from 'react-native';
import React, {useState, useEffect} from 'react';
import { Swipeable } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import styles from '../../style/styles';
import {TListData} from '../../constants/Constants';
import StarRating from 'react-native-star-rating';
import TrainerCardData from './TrainerCardData';
import FilterModal from './Modals/FilterModal'
import { useNavigation } from '@react-navigation/native';

const TrainerListData = () => {

  const navigation = useNavigation();
  const [data, setData] = useState(TListData);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

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

  
  //------------Filtering the Data Modal-------------------


  const [isModalVisible, setModalVisible] = useState(false);

  const handleFilter = (item, index) => {
    setModalVisible(true);
  };

  const closeFilterModal = () => {
    setModalVisible(false);
  };

  //-------------------- trainer details Screen-------------
  const handleTrainerData = (item, index) => {
   navigation.navigate('DetailScreen', {item, index});
  };

  //----------------Swipe Right---------------------------

  const handleRemoveTrainer = (item, index) => {
    // Filter out the item with the specified itemId
    const updatedData = data.filter((item) => item.id !== index);
   // console.log(index, item.id, "lama", updatedData, 'kama')
    setData(updatedData);
  };

  const rightSwipe = (item, index)=>{
    return (
      <View style={{backgroundColor:'#ffffff', height:50, alignSelf:'center', }}>
          <TouchableOpacity style={{width:100, height:50, backgroundColor:'red', alignItems:'center',  justifyContent:'center', }} onPress={()=>handleRemoveTrainer(item, index)}>
          <Text style={{color:'#ffffff', fontSize:16, fontWeight:'600'}}>Remove</Text>
          </TouchableOpacity>
      </View>
    )
  }
  //------------------------------------------------------------------------------------
  const renderTListData = ({item, index}) => {
    return (
      <Swipeable renderRightActions={()=>rightSwipe(item, index)}>
      <TouchableOpacity 
      onPress={() => handleTrainerData(item, index)}
      >
      <View style={styles.flatListTListData}>
        <View style={styles.tListRowView}>
          <View style={{marginLeft: '0%'}}>
            <Image
              source={item.image}
              style={{
                width: 90,
                height: 110,
                borderRadius: 10,
              }}
            />
          </View>

          <View style={styles.tListColumnView}>
            <View>
              <Text style={styles.tListName}>{item.name}</Text>

              <Text style={styles.tListDesignation}>{item.designation}</Text>
              <Text style={styles.tListYoe}>{item.yoe}+ years</Text>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={item.rating}
                starSize={15}
                fullStarColor="gold"
                emptyStarColor="gray"
              />

              <View style={{flexDirection: 'row', marginTop: '3%'}}>
                <Image
                  source={item.skills.python}
                  style={{width: 20, height: 20, marginRight: '3%', resizeMode:'contain'}}
                />
                <Image
                  source={item.skills.java}
                  style={{width: 20, height: 20, marginRight: '3%', resizeMode:'contain'}}
                />
                <Image
                  source={item.skills.react}
                  style={{width: 20, height: 20, resizeMode:'contain'}}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.tListLocationView}>
          <Image
            source={require('../../assets/icons/location.png')}
            style={{width: 15, height: 15, marginRight: '10%', resizeMode:'contain'}}
          />
          <Text style={styles.tListLocationText}>{item.location}</Text>
        </View>

        <View style={styles.tListDateView}>
          <Text style={styles.tListAvailText}>Avail On</Text>
          <Text style={styles.tListAvailDateText}>{item.date}</Text>
        </View>

        <View style={styles.tListSessionView}>
          <Text style={styles.tListSessionText}>
            +{item.session} Training Session
          </Text>
        </View>
      </View>
      </TouchableOpacity>
      </Swipeable>
    );
  };

  const keyExtractor = item => item.toString();

  const renderFooter = () => {
    return loading ? (
      <ActivityIndicator
        style={{paddingBottom: 20}}
        size="large"
        color="blue"
      />
    ) : null;
  };


  return (
    <GestureHandlerRootView>
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: '5%',
          marginTop: '6%',
          paddingBottom:'2%'
        }}>
        <Text style={styles.tListHeadText}>Most Demand Trainers</Text>

        <TouchableOpacity onPress={() => handleFilter()}>
          <Image
            source={require('../../assets/icons/list_group.png')}
            style={{width: 20, height: 20, resizeMode:'contain'}}
          />
        </TouchableOpacity>
      </View>

      {isModalVisible &&
        <FilterModal
          isVisible={isModalVisible}
          onClose={closeFilterModal}
        //  onSubmit={submitComment}
          //selectedPost={selectedPost}
        />}

    {/* {selectedTrainer && (
        <DetailsModal
          isVisible={isTrainerDetailsVisible}
          onClose={closeDetailModal}
          selectedTrainer={selectedTrainer}
        />
      )} */}
        <ScrollView>
      <TrainerCardData />
      <View style={styles.tListViewContainer}>
        <View>
          <FlatList
            data={data}
            renderItem={renderTListData}
            keyExtractor={keyExtractor}
            // ItemSeparatorComponent={renderSeparator}
            //  onEndReached={handleLoadMore}
            // onEndReachedThreshold={0.1}
            ListFooterComponent={renderFooter}
            // contentContainerStyle={{ flexGrow: 1 }}
          />
        </View>
      </View>
      </ScrollView>
    </View>
    </GestureHandlerRootView>
  );
};

export default TrainerListData;
