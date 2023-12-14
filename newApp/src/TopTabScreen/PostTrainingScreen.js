import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import styles from './Styles/PostScreenStyles';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  Skills,
  Currency,
  TypeTrainingOptions,
  DurationTrainingOptions,
  ModeTrainingOptions,
  TOC
} from '../constants/Constants';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import Slider from '@react-native-community/slider';
import CheckBox from '@react-native-community/checkbox';
import { SubmitSuccess } from './PostDataSuccess';
import DatePicker from '../Components/DatePicker';

const PostTrainingScreen = ({navigation}) => {
  const [companyName, setCompanyName] = useState('');
  const [companyError, setCompanyError] = useState('');
  const [currentTech, setCurrentTech] = useState(null);
  const [isOpenTech, setIsOpenTech] = useState(false);
  const [techError, setTechError] = useState('');
  const [radioType, setRadioType] = useState(0);
  const [participantSelected, setParticipantSelected] = useState(false);
  const [radioDuration, setRadioDuration] = useState(0);
  const [radioMode, setRadioMode] = useState(0);
  const [incDecParticipant, setIncDecParticipant] = useState(0);
  const [sliderValue, setSliderValue] = useState(0); // Initial value
  const [isCurrency, setIsCurrency] = useState();
  const [minInput, setMinInput] = useState('');
  const [maxInput, setMaxInput] = useState('');
  const [radioTOC, setRadioTOC] = useState(0);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
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
      setRadioTOC(null)
    },[]),
  );
  

  //-----------------Radio options------------------------

  const handleTypeTraining = (value) => {
    setRadioType(value);
    setParticipantSelected(true);
  };

  const handleDurationTraining = value => {
    setRadioDuration(value);
    //   setParticipantSelected(true)
  };
  const handleModeTraining = (value) => {
    setRadioMode(value);
    //   setParticipantSelected(true)
  };

  const handleTOC = (value) =>{
    setRadioTOC(value);
  }
  //------------------Down Picker---------------------------
  const handleTechTextChange = (val) => {
    setCurrentTech(val);
    setCustomStyle({
      fontSize3: val.length <= 0 ? 14 : 18,
      fontWeight3: val.length <= 0 ? '400' : '500',
    });
    setTechError('');
  };

  const handleCurrency = (val) => {
    setIsCurrency(val);
  };
  //--------------Slider------------------------
  const handleSliderChange = (value) => {
    setSliderValue(value);
  };
  //-------------Increment and Decrement----------------------
  const handleIncParticipant = () => {
    setIncDecParticipant(incDecParticipant + 1);
  };

  const handleDecParticipant = () => {
    if (incDecParticipant > 0) {
      setIncDecParticipant(incDecParticipant - 1);
    }
  };

  //-----------------Check box---------------

  const handleCheckbox =()=>{
    setToggleCheckBox(true)
  }

  //-------------------Sumbit trainer-------------
  const submitTrainerPost = () => {
    setSubmitPost(true);

    // Automatically hide the half-screen after 3 seconds
    setTimeout(() => {
      setSubmitPost(false)
    }, 3000);
  };

  return (
    <View style={styles.postTrainingContainer}>
      <ScrollView style={{width: '95%', marginLeft: '5%', marginTop: '5%'}}>
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
              fontSize1: text.length <= 0 ? 10 : 16,
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
            maxHeight={200}
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
            dropDownDirection="TOP"
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
        {participantSelected && (
          <View style={{marginBottom:'3%'}}>
            <Text style={styles.participantsText}>Total Participants</Text>
            <View style={styles.totalParticipantsView}>
              <TouchableOpacity onPress={() => handleDecParticipant()}>
                <Text>-</Text>
              </TouchableOpacity>
              <Text>{incDecParticipant}</Text>
              <TouchableOpacity onPress={() => handleIncParticipant()}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

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
                  onPress={() => handleModeTraining(index)}
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
                  onPress={() => handleModeTraining(index)}
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
        <Text style={styles.sliderValueStyle}>Years: {sliderValue}</Text>

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
                  onPress={() => handleDurationTraining(index)}
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
                  onPress={() => handleDurationTraining(index)}
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

        <Text style={styles.budgetText}>Budgets</Text>

        <View style={styles.currencyView}>
          <View>
          <DropDownPicker
            items={Currency}
            open={isCurrency}
            setOpen={() => setIsCurrency(!isOpen)}
            value={null}
            setValue={val => {
              handleCurrency(val);
            }}
            placeholder="IND"
           // placeholderStyle={styles.dropDownPlaceholderStyle}
            style={[
              styles.currencyDropDown,
              {
                fontSize: customStyle.fontSize2,
                fontWeight: customStyle.fontWeight2,
                color: customStyle.color,
              },
            ]}
            dropDownContainerStyle={styles.currencyDropDownContainer}
            selectedItemLabelStyle={{
              color: 'black',
              fontSize: 14,
              fontWeight: '400',
            }}
            disableBorderRadius={false}
            showArrowIcon={true}
            showTickIcon={true}
            closeOnBackPressed={true}
            dropDownDirection="TOP"
          />
          </View>
            <View style={styles.verticalLine1}/>
          <View style={{flexDirection:'row', right:'12%'}}>
          <TextInput
            style={styles.minInput}
            placeholder="Min"
            value={minInput}
            onChangeText={text => {
              setMinInput(text);
              // setCompanyError('');
            }}
            autoCapitalize="none"
            placeholderTextColor={'#535353'}
          />
<View style={styles.verticalLine2}/>
        <TextInput
            style={styles.maxInput}
            placeholder="Max"
            value={maxInput}
            onChangeText={text => {
              setMaxInput(text);
              // setCompanyError('');
            }}
            autoCapitalize="none"
            placeholderTextColor={'#535353'}
          />
          </View>
          <View></View>
        </View>

        <View style={styles.tocView}>
                <View style={{flexDirection:'row', marginBottom:'2%'}}>
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
                  onPress={() => handleTOC(index)}
                  borderWidth={1}
                  buttonInnerColor={'#2676C2'}
                  buttonOuterColor={'#EAEAEA'}
                  buttonSize={12}
                  buttonOuterSize={16}
                  buttonWrapStyle={{marginLeft:'5%', alignSelf: 'center',}}
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

        <View style={styles.startEndDateView}>
                    <View style={styles.startDateView}>
                      <Text style={styles.startDate}>Start Date</Text>
                      <DatePicker/>
                    </View>

                    <View>
                      <Text style={styles.endDate}>End Date</Text>
                      <DatePicker/>
                    </View>
        </View>

        <View style={{flexDirection:'row', marginBottom:'3%'}}>
          <CheckBox
            value={toggleCheckBox}
            onValueChange={() => handleCheckbox()}
           tintColors={{true: '#2676C2', false: '#EAEAEA'}}
            onFillColor='red'
            onCheckColor='red'
          />
            <Text style={styles.checkBoxText}>If you urgently need the trainer</Text>
          </View>

          <View style={styles.buttonsView}>
            <View style={styles.resetButton}>
              <TouchableOpacity>
                <Text style={styles.resetText}>Reset</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.submitButton}>
            <TouchableOpacity onPress={()=>{submitTrainerPost()}}>
                <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
          {submitPost && ( 
            <SubmitSuccess/>
          )}

      </ScrollView>
    </View>
  );
};

export default PostTrainingScreen;
