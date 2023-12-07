import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../style/styles';
import {TListData} from '../../constants/Constants';
import StarRating from 'react-native-star-rating';

const TrainerListData = () => {

  
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

  return (
    <View>
      <View style={styles.tListViewContainer}>
        <View>
          <FlatList
            data={TListData}
            renderItem={renderTListData}
            keyExtractor={keyExtractor}
            // ItemSeparatorComponent={renderSeparator}
            // onEndReached={handleEndReached}
            // onEndReachedThreshold={0.1}
          />
        </View>
      </View>
    </View>
  );
};

export default TrainerListData;
