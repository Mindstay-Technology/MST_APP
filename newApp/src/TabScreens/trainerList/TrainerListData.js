import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../style/styles';
import {TListData} from '../../constants/Constants';
import StarRating from 'react-native-star-rating';
import TrainerCardData from './TrainerCardData';
import FilterTrainerModal from './FilterTrainerModal'

const TrainerListData = () => {
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

  const renderTListData = ({item}) => {
    return (
      <View style={styles.flatListTListData}>
        <View style={styles.tListRowView}>
          <View style={{marginLeft: '0%'}}>
            <Image
              source={item.image}
              style={{
                width: 90,
                height: 130,
                borderRadius: 30,
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

              <View style={{flexDirection: 'row', marginTop: '5%'}}>
                <Image
                  source={item.skills.python}
                  style={{width: 25, height: 25, marginRight: '3%'}}
                />
                <Image
                  source={item.skills.java}
                  style={{width: 25, height: 25, marginRight: '3%'}}
                />
                <Image
                  source={item.skills.react}
                  style={{width: 25, height: 25}}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.tListLocationView}>
          <Image
            source={require('../../assets/icons/location.png')}
            style={{width: 15, height: 15, marginRight: '10%'}}
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

  //------------Filtering the Data


  const [isModalVisible, setModalVisible] = useState(false);
  const [filterData, setFilterData] = useState(false);

  const handleFilter = (post, index) => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  //--------------------

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: '5%',
          marginTop: '8%',
        }}>
        <Text style={styles.tListHeadText}>Based on your profile</Text>

        <TouchableOpacity onPress={() => handleFilter()}>
          <Image
            source={require('../../assets/icons/list_group.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
      </View>

      {isModalVisible &&
        <FilterTrainerModal
          isVisible={isModalVisible}
          onClose={closeModal}
        //  onSubmit={submitComment}
          //selectedPost={selectedPost}
        />}

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
    </View>
  );
};

export default TrainerListData;
