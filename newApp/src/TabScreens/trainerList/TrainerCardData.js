import React, {useState, useEffect, useRef} from 'react';
import {View, Text, FlatList, Dimensions, Image, Animated, TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import styles from '../../style/styles';
import StarRating from 'react-native-star-rating';
import { TListData } from '../../constants/Constants';
import DetailsModal from './DetailScreen';
import { useNavigation } from '@react-navigation/native';



const TrainerCardData = () => {

  const navigation = useNavigation();


  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const [activeSlide, setActiveSlide] = useState(0);

  const sortedData = [...TListData].sort((a, b) => b.rating - a.rating);
  const showCardData = sortedData.slice(0,3);

  let interval = 5000;
  const screenWidth = Dimensions.get('window').width;

  const sliderWidth = screenWidth;
  const itemWidth = screenWidth * 0.95;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide(prevSlide => (prevSlide + 1) % TListData.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [showCardData, interval]);

  //-----------------Trainer Details Screen----

  const handleTrainerData = (item, index) => {
    navigation.navigate('DetailScreen', {item, index});
   };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => handleTrainerData(item, index)}>
      <View style={styles.tListCardData}>
        <View style={styles.cardRowData}>
          <View>
            <Image
              source={item.image}
              style={{
                width: 90,
                height: 110,
                borderRadius: 10,
                marginBottom:'10%',
                marginTop:'15%',
               // resizeMode:'contain'              

              }}
            />
            <View style={styles.cardLocationView}>
              <Image
                source={require('../../assets/icons/location.png')}
                style={{width: 15, height: 15, marginRight: '10%'}}
              />
              <Text style={styles.cardLocationText}>{item.location}</Text>
            </View>
          </View>

          <View style={styles.cardColumnView}>
            <View>
              <Text style={styles.cardName}>{item.name}</Text>

              <Text style={styles.cardDesignation}>{item.designation}</Text>
              <Text style={styles.cardYoe}>{item.yoe}+ years</Text>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={item.rating}
                starSize={15}
                fullStarColor="gold"
                emptyStarColor="gray"
              />

              <View style={{flexDirection: 'row', marginTop: '3%', resizeMode:'contain'}}>
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
                <View style={{width:1, height:'121%', borderWidth:1, borderColor:'#EEEEEE', marginRight:'7%',}}></View>
          <View style={styles.cardDateView}>
            <Text style={styles.cardAvailDateText}>Avail On</Text>
            <Text style={styles.cardDateText}>{item.date}</Text>
          </View>


        </View>
        <View style={styles.cardSessionStyle}>
          <Text style={styles.cardSessionText}>+{item.session} Training Session</Text>
        </View>
      </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        marginTop: '2%',
        width: '100%',
        height: 250,
       // borderWidth: 1,
        //borderColor: 'green',
      }}>

      <Carousel
        data={showCardData}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        onSnapToItem={index => setActiveSlide(index)}
        dotStyle={{marginTop: '5%'}}
        loop={true}
        autoplay={true}
        autoplayInterval={interval}
       // paginationStyle={{ marginBottom: '10%', backgroundColor:'red' }}
      
      />
      <Pagination
        dotsLength={showCardData.length}
        activeDotIndex={activeSlide}
        containerStyle={{marginBottom: "-7%",}}
        dotColor='#3C84C9'
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 4,
          marginHorizontal: 3,          
          
        }}
        activeDotStyle={{width:15, height:4, borderRadius: 4,}}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
        activeDotColor='#3C84C9'
        inactiveDotColor='#2676C266'
      />
     
    </View>
  );
};

export default TrainerCardData;
