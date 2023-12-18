import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import styles from '../Styles/PostScreenStyles';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  Skills,
  Currency,
  TypeTrainingOptions,
  DurationTrainingOptions,
  ModeTrainingOptions,
  TOC,
  Locations,
} from '../../constants/Constants';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import Slider from '@react-native-community/slider';
import CheckBox from '@react-native-community/checkbox';
import {SubmitSuccess} from '../PostDataSuccess';
import DatePicker from '../../Components/DatePicker';
import SearchLocation from './SearchLocation';
import MyBudget from './MyBudget';

const PostTrainingScreen = ({navigation}) => {
  const [companyName, setCompanyName] = useState('');
  const [companyError, setCompanyError] = useState('');
  const [currentTech, setCurrentTech] = useState(null);
  const [isOpenTech, setIsOpenTech] = useState(false);
  const [techError, setTechError] = useState('');

  const [radioType, setRadioType] = useState(0);
  const [isTypeSelected, setIsTypeSelected] = useState(false);
  const [participantValue, setParticipantValue] = useState(0);

  const [radioMode, setRadioMode] = useState(0);
  const [isModeSelected, setIsModeSelected] = useState(false);

  const [radioDuration, setRadioDuration] = useState(0);
  const [isDurationSelected, setIsDurationSelected] = useState(false);
  const [durationLabel, setDurationLabel] = useState('Hrs');
  const [durationValue, setDurationValue] = useState(0);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const [sliderValue, setSliderValue] = useState(0); // Initial value

  const [isCurrencySelected, setIsCurrencySelected] = useState(false);

  const [radioTOC, setRadioTOC] = useState(0);
  const [isTocSelected, setIsTocSelected] = useState(false);

  const [uploadFileName, setUploadFileName] = useState('');
  const [isClickedUpload, setIsClickedUpload] = useState(false);

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [submitPost, setSubmitPost] = useState(false);
  const [resetPost, setResetPost] = useState(false);

  const [customStyle, setCustomStyle] = useState([
    {
      fontSize1: 10,
      fontWeight1: '400',
    },
    {
      fontSize2: 14,
      fontWeight2: '400',
      color: '#E9E9E9',
    },
    {
      fontSize3: 14,
      fontWeight3: '400',
    },
  ]);

  useFocusEffect(
    useCallback(() => {
      setRadioType(null);
      setRadioDuration(null);
      setRadioMode(null);
      setRadioTOC(null);

      setIsModeSelected(false);
      setIsTypeSelected(false);
      setIsDurationSelected(false);
      setIsTocSelected(false);
      setDurationValue(0);
    }, []),
  );

  //-----------------Radio options------------------------

  const handleTypeTraining = index => {
    setRadioType(index);
    setIsTypeSelected(true);
  };

  const handleDurationTraining = (option, index) => {
    setRadioDuration(index);
    setIsDurationSelected(true);
    setIsButtonPressed(false);
    // if(option.label == 'Hourly'){
    //   setDurationLabel('Hrs');
    //   setDurationValue(0);

    // } else if(option.label == 'Day'){
    //   setDurationLabel('Days');
    //   setDurationValue(0);
    // } else if(option.label == "Month"){
    //   setDurationLabel('Month');
    //   setDurationValue(0);
    // };

    switch (option.label.toLowerCase()) {
      case 'hourly':
        setDurationLabel('Hrs');
        setDurationValue(0);
        break;
      case 'day':
        setDurationLabel('Days');
        setDurationValue(0);
        break;
      case 'month':
        setDurationLabel('Month');
        setDurationValue(0);
        break;
      default:
        setDurationLabel('Hrs');
    }
    //   setParticipantSelected(true)
  };

  const handleModeTraining = (option, index) => {
    setRadioMode(index);
    if (option.label == 'Offline') {
      setIsModeSelected(true);
    } else {
      setIsModeSelected(false);
    }
    //   setParticipantSelected(true)
  };

  const handleTOC = (option, index) => {
    setRadioTOC(index);
    setIsClickedUpload(false);

    if (option.label == 'Available') {
      setIsTocSelected(true);
    } else {
      setIsTocSelected(false);
    }
  };
  //------------------Down Picker---------------------------
  const handleTechTextChange = val => {
    setCurrentTech(val);
    setCustomStyle({
      fontSize3: val.length <= 0 ? 14 : 18,
      fontWeight3: val.length <= 0 ? '400' : '500',
    });
    setTechError('');
  };

  //--------------Slider------------------------
  const handleSliderChange = value => {
    setSliderValue(value);
  };
  //-------------Increment and Decrement----------------------
  const handleIncParticipant = () => {
    setParticipantValue(participantValue + 1);
  };

  const handleDecParticipant = () => {
    if (participantValue > 0) {
      setParticipantValue(participantValue - 1);
    }
  };

  const handleDurationInc = () => {
    setIsButtonPressed(true);
    setDurationValue(durationValue + 1);
  };
  const handleDurationDec = () => {
    if (durationValue > 0) {
      setDurationValue(durationValue - 1);
      setIsButtonPressed(true);
    }
  };

  //------------Upload file--------------

  const HandleUploadFile = () => {
    setIsClickedUpload(true);
    setUploadFileName('FileName');
  };

  //-----------------Check box---------------

  const handleCheckbox = () => {
    setToggleCheckBox(true);
  };

  //-------------------Sumbit trainer-------------
  const submitTrainerPost = () => {
    setSubmitPost(true);

    // Automatically hide the half-screen after 3 seconds
    setTimeout(() => {
      setSubmitPost(false);
    }, 3000);
  };

  return (
    <View style={styles.postTrainingContainer}>
      <ScrollView
        style={{width: '95%', marginLeft: '5%', marginTop: '5%', flexGrow: 1}}>
        <Text style={styles.companyNameText}>Company Name</Text>
        <TextInput
          style={[
            styles.companyNameInput,
            {
              fontSize: customStyle.fontSize1,
              fontWeight: customStyle.fontWeight1,
            },
          ]}
          placeholder="Company Name / Organization Name / College Name"
          value={companyName}
          onChangeText={text => {
            setCompanyName(text);
            setCustomStyle({
              fontSize1: text.length <=0 ? 10 : 16,
              fontWeight1: text.length <= 0 ? '400' : '500',
            });
            setCompanyError('');
          }}
          autoCapitalize="none"
          placeholderTextColor={'#888888'}
        />

        <View>
          <Text style={styles.technologyText}>Technology</Text>
          <DropDownPicker
            items={Skills}
            open={isOpenTech}
            setOpen={() => setIsOpenTech(!isOpenTech)}
            value={currentTech}
            setValue={val => {
              handleTechTextChange(val);
            }}
            placeholder=""
            // placeholderStyle={styles.dropDownPlaceholderStyle}
            style={[
              styles.dropDownSkillStyle,
              {
                fontSize: customStyle.fontSize3,
                fontWeight: customStyle.fontWeight3,
              },
            ]}
            dropDownContainerStyle={styles.dropDownContainerStyle1}
            //  selectedItemLabelStyle={{color:'#E9E9E9', fontSize:14, fontWeight:'400'}}
            maxHeight={300}
            autoScroll
            showArrowIcon={false}
            showTickIcon={true}
            disableBorderRadius={false}
            multiple={true}
            min={1}
            max={10}
            mode="BADGE"
            badgeTextStyle={{color: '#8A8A8A80'}}
            badgeDotColors={['#8A8A8A80']}
            badgeColors={['#8A8A8A80']}
            searchable
            //    dropDownDirection="TOP"
          />
        </View>
        {/* {techError !== '' && (
          <Text style={styles.techErrorStyle}>{techError}</Text>
        )} */}

        <Text style={styles.trainingTypeText}>Type Of Training</Text>
        <View style={styles.radioFormView}>
          <RadioForm formHorizontal={false} animation={true}>
            {TypeTrainingOptions.map((option, index) => (
              <RadioButton labelHorizontal={true} key={index}>
                {/* Radio button input */}
                <RadioButtonInput
                  obj={{label: option.label, value: index}}
                  index={index}
                  isSelected={radioType === index}
                  onPress={() => handleTypeTraining(index)}
                  borderWidth={1}
                  buttonInnerColor={'#2676C2'}
                  buttonOuterColor={'#EAEAEA'}
                  buttonSize={12}
                  buttonOuterSize={16}
                />
                {/* Radio button label */}
                <RadioButtonLabel
                  obj={{label: option.label, value: index}}
                  index={index}
                  labelHorizontal={true}
                  onPress={() => handleTypeTraining(index)}
                  labelStyle={{
                    fontSize: 14,
                    color: '#535353',
                    fontWeight: '400',
                  }}
                />
              </RadioButton>
            ))}
          </RadioForm>
        </View>
        {isTypeSelected ? (
          <View style={{marginBottom: '3%'}}>
            <Text style={styles.participantsText}>Total Participants</Text>
            <View style={styles.totalParticipantsView}>
              <TouchableOpacity onPress={() => handleDecParticipant()}>
                <Text>-</Text>
              </TouchableOpacity>
              <Text style={styles.participantValueText}>
                {participantValue}
              </Text>
              <TouchableOpacity onPress={() => handleIncParticipant()}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}

        <Text style={styles.modeTrainingText}>Mode Of training</Text>
        <View style={styles.radioFormView}>
          <RadioForm formHorizontal={true} animation={true}>
            {ModeTrainingOptions.map((option, index) => (
              <RadioButton labelHorizontal={true} key={index}>
                {/* Radio button input */}
                <RadioButtonInput
                  obj={{label: option.label, value: index}}
                  index={index}
                  isSelected={radioMode === index}
                  onPress={() => handleModeTraining(option, index)}
                  borderWidth={1}
                  buttonInnerColor={'#2676C2'}
                  buttonOuterColor={'#EAEAEA'}
                  buttonSize={12}
                  buttonOuterSize={16}
                  buttonWrapStyle={{marginLeft: '5%', alignSelf: 'center'}}
                />
                {/* Radio button label */}
                <RadioButtonLabel
                  obj={{label: option.label, value: index}}
                  index={index}
                  labelHorizontal={true}
                  onPress={() => handleModeTraining(option, index)}
                  labelStyle={{
                    fontSize: 14,
                    color: '#535353',
                    fontWeight: '400',
                  }}
                />
              </RadioButton>
            ))}
          </RadioForm>
        </View>
        {isModeSelected ? (
          <View>
            <SearchLocation myLocation={Locations} />
          </View>
        ) : null}
        <Text style={styles.experienceText}>Experience</Text>
        <Text style={styles.dragExpText}>Drag to select a experience</Text>
        <Slider
          style={styles.slider}
          value={sliderValue}
          minimumValue={0}
          maximumValue={25}
          step={1}
          onValueChange={handleSliderChange}
          minimumTrackTintColor="#2676C2" // Customize the color of the track
          maximumTrackTintColor="#D9D9D9" // Customize the color of the remaining track
          thumbTintColor="#2676C2" // Customize the color of the thumb
        />

        <View style={styles.sliderValueView}>
          <Text style={styles.sliderValueStyle}>{sliderValue} years</Text>
        </View>

        <Text style={styles.durationText}>Duration Of Training</Text>

        <View style={styles.radioFormView}>
          <RadioForm formHorizontal={false} animation={true}>
            {DurationTrainingOptions.map((option, index) => (
              <RadioButton labelHorizontal={true} key={index}>
                {/* Radio button input */}
                <RadioButtonInput
                  obj={{label: option.label, value: index}}
                  index={index}
                  isSelected={radioDuration === index}
                  onPress={() => handleDurationTraining(option, index)}
                  borderWidth={1}
                  buttonInnerColor={'#2676C2'}
                  buttonOuterColor={'#EAEAEA'}
                  buttonSize={12}
                  buttonOuterSize={16}
                />
                {/* Radio button label */}
                <RadioButtonLabel
                  obj={{label: option.label, value: index}}
                  index={index}
                  labelHorizontal={true}
                  onPress={() => handleDurationTraining(option, index)}
                  labelStyle={{
                    fontSize: 14,
                    color: '#535353',
                    fontWeight: '400',
                  }}
                />
              </RadioButton>
            ))}
          </RadioForm>
        </View>

        {isDurationSelected ? (
          <View style={{marginBottom: '3%'}}>
            <View style={styles.durationView}>
              <TouchableOpacity onPress={() => handleDurationDec()}>
                <Text>-</Text>
              </TouchableOpacity>
              <Text style={styles.incDecDurationText}>
                {isButtonPressed ? durationValue : durationLabel}
              </Text>
              <TouchableOpacity onPress={() => handleDurationInc()}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}

        <Text style={styles.budgetText}>Budgets</Text>
        <MyBudget myCurrency={Currency} />

        <View style={styles.tocView}>
          <View style={{flexDirection: 'row', marginBottom: '2%'}}>
            <Text style={styles.tocText1}>Toc</Text>
            <Text style={styles.tocText2}>(Table of content)</Text>
          </View>
          <View>
            <RadioForm formHorizontal={true} animation={true}>
              {TOC.map((option, index) => (
                <RadioButton labelHorizontal={true} key={index}>
                  {/* Radio button input */}
                  <RadioButtonInput
                    obj={{label: option.label, value: index}}
                    index={index}
                    isSelected={radioTOC === index}
                    onPress={() => handleTOC(option, index)}
                    borderWidth={1}
                    buttonInnerColor={'#2676C2'}
                    buttonOuterColor={'#EAEAEA'}
                    buttonSize={12}
                    buttonOuterSize={16}
                    buttonWrapStyle={{marginLeft: '5%', alignSelf: 'center'}}
                  />
                  {/* Radio button label */}
                  <RadioButtonLabel
                    obj={{label: option.label, value: index}}
                    index={index}
                    labelHorizontal={true}
                    onPress={() => handleTOC(index)}
                    labelStyle={{
                      fontSize: 14,
                      color: '#535353',
                      fontWeight: '400',
                    }}
                  />
                </RadioButton>
              ))}
            </RadioForm>
          </View>
        </View>
        {isTocSelected ? (
          <View>
            <Text style={styles.uploadText}>Upload</Text>
            <View style={styles.tocSelectedView}>
              <Text style={{alignSelf: 'center', marginLeft: '2%'}}>
                {!isClickedUpload ? 'Upload a file' : uploadFileName}
              </Text>
              <TouchableOpacity
                style={{alignSelf: 'center', marginRight: '3%'}}
                onPress={() => HandleUploadFile()}>
                <Image
                  source={require('../../assets/icons/upload.png')}
                  style={{width: 15, height: 15, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : null}

        <View style={styles.startEndDateView}>
          <View style={styles.startDateView}>
            <Text style={styles.startDate}>Start Date</Text>
            <DatePicker />
          </View>

          <View>
            <Text style={styles.endDate}>End Date</Text>
            <DatePicker />
          </View>
        </View>

        <View style={{flexDirection: 'row', marginBottom: '3%'}}>
          <CheckBox
            value={toggleCheckBox}
            onValueChange={() => handleCheckbox()}
            tintColors={{true: '#2676C2', false: '#EAEAEA'}}
            onFillColor="red"
            onCheckColor="red"
          />
          <Text style={styles.checkBoxText}>
            If you urgently need the trainer
          </Text>
        </View>

        <View style={styles.buttonsView}>
          <View style={styles.resetButton}>
            <TouchableOpacity>
              <Text style={styles.resetText}>Reset</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.submitButton}>
            <TouchableOpacity
              onPress={() => {
                submitTrainerPost();
              }}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
        {submitPost && <SubmitSuccess />}
      </ScrollView>
    </View>
  );
};

export default PostTrainingScreen;
