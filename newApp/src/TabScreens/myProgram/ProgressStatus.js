import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TListData} from '../../constants/Constants';

const ProgressStatus = () => {
  const [buttonText, setButtonText] = useState('Posted');
  const [selectedStep, setSelectedStep] = useState(1);
  const [selectedStatusText, setSelectedStatusText] =
    useState('Application Posted');
  const [showTrainer, setShowTrainer] = useState(false);

  useEffect(() => {
    // animateProgress();
    updateButtonText();
  }, [selectedStep]);

  const updateButtonText = () => {
    switch (selectedStep) {
      case 1:
        setButtonText('Posted');
        setSelectedStatusText('Application Posted');
        break;
      case 2:
        setButtonText('Accepted');
        setSelectedStatusText('Application Accepted');
        break;
      case 3:
        setButtonText('Progress');
        setSelectedStatusText('Training on Progress');
        break;
      default:
        setButtonText('completed');
        setSelectedStatusText('Training Completed');
        break;
    }
  };

  const handleNextClick = () => {
    setShowTrainer(true);
    const nextStep = Math.min(selectedStep + 1);
    setSelectedStep(nextStep);
  };

  //---------------posted trainer-------------

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: '3%',
        }}>
        <View style={styles.progressCircle}>
          <Text style={styles.numberText}>1</Text>
        </View>
        <View style={styles.progressLine} />

        <View
          style={[
            styles.progressCircle1,
            {backgroundColor: selectedStep > 1 ? '#2676C2' : '#EBEBEB'},
          ]}>
          <Text style={styles.numberText}>2</Text>
        </View>
        <View
          style={[
            styles.progressLine1,
            {backgroundColor: selectedStep > 1 ? '#2676C2' : '#EBEBEB'},
          ]}
        />

        <View
          style={[
            styles.progressCircle2,
            {backgroundColor: selectedStep > 2 ? '#2676C2' : '#EBEBEB'},
          ]}>
          <Text style={styles.numberText}>3</Text>
        </View>
        <View
          style={[
            styles.progressLine2,
            {backgroundColor: selectedStep > 2 ? '#2676C2' : '#EBEBEB'},
          ]}
        />

        <View
          style={[
            styles.progressCircle3,
            {backgroundColor: selectedStep > 3 ? '#2676C2' : '#EBEBEB'},
          ]}>
          <Text style={styles.numberText}>4</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <View>
          <Text style={styles.programStatusTextStyle}>Program Status</Text>
          <Text style={styles.statusTextStyle}>{selectedStatusText}</Text>
          <TouchableOpacity
            onPress={handleNextClick}
            style={styles.buttonViewStyle}>
            <Text style={styles.buttonTextStyle}>{buttonText}</Text>
          </TouchableOpacity>
        </View>

        {showTrainer && (
          <View style={{width: '60%', height: 80, marginLeft: '5%'}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/images/profile.png')}
                style={{width: 50, height: 70, borderRadius: 10}}
              />
              <View style={{marginLeft: '2%'}}>
                <Text style={styles.trainerNameStyle}>Abdul</Text>
                <Text style={styles.trainerDesignationStyle}>
                  React developer
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.trainerYearstyle}>10+ years</Text>
                </View>
              </View>
            </View>
          </View>
        )}

        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  progressCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#2676C2',
    justifyContent: 'center',
  },
  progressCircle1: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
  },
  progressCircle2: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
  },
  progressCircle3: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
  },
  numberText: {
    color: '#ffff',
    textAlign: 'center',
    //    alignSelf:'center'
  },
  progressLine: {
    height: 4,
    backgroundColor: '#2676C2',
    width: 60,
  },
  progressLine1: {
    height: 4,
    backgroundColor: '#2676C2',
    width: 60,
  },
  progressLine2: {
    height: 4,
    backgroundColor: '#2676C2',
    width: 60,
  },

  programStatusTextStyle: {
    color: '#535353',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: '5%',
  },

  statusTextStyle: {
    color: '#535353',
    fontSize: 10,
    fontWeight: '400',
    marginBottom: '10%',
  },

  buttonViewStyle: {
    width: '50%',
    height: 14,
    backgroundColor: '#2676C233',
    borderRadius: 4,
  },
  buttonTextStyle: {
    textAlign: 'center',
    color: '#2676C2',
    borderRadius: 5,
    fontSize: 8,
    fontWeight: '400',
  },

  trainerNameStyle: {
    color: '#535353',
    fontSize: 12,
    fontWeight: '400',
  },
  trainerDesignationStyle: {
    color: '#535353',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: '2%',
  },
  trainerYearstyle: {
    color: '#2676C2',
    fontSize: 10,
    fontWeight: '400',
  },
});

export default ProgressStatus;
