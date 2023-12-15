// CommentModal.js

import React, {useState, useCallback} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  TextInput
} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import StarRating from 'react-native-star-rating';
import styles from './Styles/TrainerListStyle';
//import {TListData} from '../../constants/Constants'
import HamburgerModal from './Modals/HamburgerModal'
import {HireNowModal} from './Modals/SuccessModals';

const DetailScreen = ({ route}) => {

  const navigation = useNavigation();

  const { item, index } = route.params;

  const [searchText, setSearchText] = useState('');
  const [showHamburgerModal, setShowHamburgerModal] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState();
  const [buttonText, setButtonText] = useState('Hire Now');
  const [hireNowSuccess, setHireNowSuccess] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setIsExpanded(false)
    },[]),
  );


//------------------------Hamburger Modal------
  const openHamburgerModal = (item, index) => {
    setSelectedTrainer({item, index})
    setShowHamburgerModal(true);
    
  };

  const closeHamburgerModal = () => {
    setShowHamburgerModal(false);
  };

  //-------------------hire now success message---------------
  const handleHireNow = () => {
    setHireNowSuccess(true);

    // Automatically hide the half-screen after 3 seconds
    setTimeout(() => {
      setButtonText('Pending...');
      setHireNowSuccess(false)
    }, 3000);
  };

  //---------------Go back-----------------

  const goToTrainerList=()=>{
    navigation.navigate('TrainerListScreen');
  }
  //---------------Text Expansion-----------

  const toggleTextExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  const displayedContent = (item) =>
    isExpanded ? item.certification.content : `${item.certification.content.slice(0, 110)}...`;
 //---------------------------------------------------------------------------
  return (
    <View style={styles.detailContainer}>
      
      <View style={styles.detailHeaderView}>

      <TouchableOpacity onPress={()=>goToTrainerList()}>
        <Image source={require('../../assets/icons/goback.png')} style={{
              width: 15,
              height: 15,
              alignSelf: 'center',
              marginRight: '2%',
              resizeMode:'contain'
            }}/>
            </TouchableOpacity>

        <View style={styles.detailSearchView}>
          <Image
            source={require('../../assets/icons/magnify.png')}
            style={{
              width: 20,
              height: 20,
              alignSelf: 'center',
              marginRight: '2%',
              resizeMode:'contain'
            }}
          />

          <TextInput
            style={styles.detailSearchInput}
            value={searchText}
            onChangeText={text => setSearchText(text)}
            placeholder="what are you looking for?"
            placeholderTextColor="#8D8D8D"
          />
        </View>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/bell.png')}
            style={{width: 20, height: 20, resizeMode:'contain'}}
          />
        </TouchableOpacity>
      </View>
        
        <ScrollView>

        {showHamburgerModal &&
        <HamburgerModal
          isHamburgerVisible={showHamburgerModal}
          onCloseHamburger={closeHamburgerModal}
          selectedTrainer = {selectedTrainer}
        
        />}

          <Image
            source={item.bannerImage}
            style={styles.bannerImageStyle}
          />

          <View style={styles.rowDataStyle}>
            <Image source={item.image} style={styles.detailProfile} />
            <View style={styles.columnData}>
              <Text style={styles.nameText}>{item.name}</Text>
              <Text style={styles.designationText}>{item.designation}</Text>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={item.rating}
                starSize={15}
                fullStarColor="gold"
                emptyStarColor="gray"
              />
              <View style={styles.dateView}>
                <Text style={styles.availText}>Avail On</Text>
                <Text style={styles.availDateText}>{item.date}</Text>
              </View>
            </View>
            <View
              style={{
                position: 'absolute',
                left: '95%',
                top: '40%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity 
               onPress={()=>openHamburgerModal(item, index)}
              >
                <Image
                  source={require('../../assets/icons/menu.png')}
                  style={{width: 15, height: 15, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
            </View>
          </View>

                <View style={styles.profileTextView}>
                  <Text style={styles.profileText}>{item.designation} | {item.profile}</Text>
                </View>

                <Text style={styles.contentText}>{item.content}</Text>

                <View style={styles.horizontalLine}/>
                <Text style={styles.titleText}>{item.certification.title}</Text>

                <View style={styles.certOrganizaTionView}>
                <Text style={styles.certDesignationText}>{item.certification.designation}</Text>
                <Text style={styles.certOrganizaTionText}>{item.certification.organization}</Text>
                </View>

                <Text style={styles.topCertContentText}>{item.certification.content}</Text>
        
                <Image
            source={item.certification.certificate}
            style={styles.certImage}
          />

                <View style={{flexDirection:'row',}}>
                <Text style={{color:'#535353', fontSize:12, fontWeight:'500' ,     marginLeft:'5%', marginBottom:'2%', marginRight:'1%'}}>Certified development:</Text>
                <Text style={{color:'#2676C2', fontSize:12, fontWeight:'500'}}>{item.certification.organization}</Text>
                </View>
                {/* <Text style={styles.certContentText}>{item.certification.content}</Text> */}

            <Text style={isExpanded ? styles.certContentText : styles. certContentText1} >
              {displayedContent(item)}
            </Text>
            {!isExpanded && (
              <TouchableOpacity onPress={toggleTextExpansion}>
                <Text style={styles.readMoreLink}>More</Text>
              </TouchableOpacity>
            )}

                <Text style={styles.skillsHeadText}>Skills</Text>
                  
                  <View style={styles.lineContainer}>
                <Image
                  source={item.skills.react}
                  style={{width: 25, height: 25, marginRight: '2%'}}
                />
                    <View style={{width:'70%', marginRight:'2%'}}>
                    <View style={[styles.line, { width: `${item.langPercent.react}%` }]} />
                    </View>
                    <Text style={styles.percentageText}>{`${item.langPercent.react}%`}</Text>
                </View>

                

          </ScrollView>
          <View style={styles.hireButton}>
            <TouchableOpacity 
             onPress={()=>handleHireNow()}
            >
              <Text style={styles.hireText}>{buttonText}</Text>
            </TouchableOpacity>
          </View>
          
          {hireNowSuccess && ( 
            <HireNowModal/>
          )}
          

    </View>
  );
};


export default DetailScreen;
