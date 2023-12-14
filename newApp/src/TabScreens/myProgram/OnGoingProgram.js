import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles/MyProgramStyles';
//import OrderStatusAnimation from './orderStatus';
import ProgressStatus from './ProgressStatus';
import MenuModal from './MenuModal';

const OnGoingProgram = ({data}) => {
  const [programData, setProgramData] = useState(data);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState();

  const toggleTextExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  const displayedDescription = item =>
    isExpanded ? item.subjects : `${item.subjects.slice(0, 50)}...`;

//------------menu----------------
const openMenuModal = (item, index) => {
  setShowMenu(true);
  setSelectedProgram({item, index})
  
};

const closeMenuModal = () => {
  setShowMenu(false);
};

//---------------------------------------------------------

  const renderProgramData = ({item, index}) => {
    return (
      <View style={styles.flatListOuterView}>
        <View style={styles.flatListInnerView}>
          <Text style={styles.postedDateStyle1}>Posted Date</Text>
          <Text style={styles.postedDateStyle2}>{item.postedDate}</Text>

          <Text style={styles.programNameStyle1}>Training Program Name</Text>
          <View>
            <TouchableOpacity onPress={()=>openMenuModal(item, index)}>
              <Image
                source={require('../../assets/icons/menu.png')}
                style={{
                  width: 15,
                  height: 15,
                  resizeMode: 'contain',
                  position: 'absolute',
                  left: '97%',
                  bottom: '5%',
                }}
              />
            </TouchableOpacity>
          </View>

          {showMenu &&
        <MenuModal
          isMenuVisible={showMenu}
          onCloseMenu={closeMenuModal}
          selectedProgram = {selectedProgram}
        
        />}

          <Text style={styles.programNameStyle2}>{item.programName}</Text>

          <Text style={styles.subjectsStyle1}>Training Topics & Subjects</Text>

          <View style={styles.readMoreStyle}>
            <Text style={styles.subjectsStyle2} numberOfLines={3}>
              {displayedDescription(item)}
            </Text>
            {!isExpanded && (
              <TouchableOpacity onPress={toggleTextExpansion}>
                <Text style={styles.readMoreLink}>More</Text>
              </TouchableOpacity>
            )}
          </View>

                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:'3%', marginBottom:'8%'}}>
                  <View>
                    <Text style={styles.trainingTypeStyle1}>Type Of Training</Text>
                    <Text style={styles.trainingTypeStyle2}>{item.typeOfTraining}</Text>

                    <Text style={styles.startDateStyle1}>Start Date</Text>
                    <Text style={styles.startDateStyle2}>{item.startDate}</Text>


                  </View>

                  <View>
                  <Text style={styles.trainingDurationStyle1}>Duration Of Training</Text>
                    <Text style={styles.trainingDurationStyle2}>{item.trainingDuration} Days</Text>

                    <Text style={styles.endDateStyle1}>End Date</Text>
                    <Text style={styles.endDateStyle2}>{item.endDate}</Text>

                  </View>

                </View>

                <View style={{flexDirection:'row', justifyContent:'flex-start', marginBottom:'5%'}}>
                <Text style={styles.totalPartStyle1}>Total Participants</Text>
                <View style={{flexDirection:'row', marginLeft:'25%'}}>
                    <Text style={styles.totalPartStyle2}>{item.totalParticipants}</Text>
                    <Text style={styles.totalPartStyle3}>Participants</Text>
                </View>
                </View>

                <View style={{flexDirection:'row', justifyContent:'flex-start', marginBottom:'3%'}}>
                  <View>
                    <Text style={styles.modeStyle1}>Mode</Text>
                    <Text style={styles.modeStyle2}>{item.mode}</Text>
                  </View>
                  <View style={{marginLeft:'47%'}}>
                    <Text style={styles.locationStyle1}>Location</Text>
                    <Text style={styles.locationStyle2}>{item.location}</Text>
                  </View>
                </View>

                <View style={styles.horizontalLineStyle}/>

              <ProgressStatus/>
        </View>
      </View>
    );
  };

  const keyExtractor = item => item.toString();

  return (
    <View>
      <FlatList
        data={programData}
        renderItem={renderProgramData}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default OnGoingProgram;
