import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../style/styles';
import DropDownPicker from 'react-native-dropdown-picker';
import {Years, Skills} from '../constants/Constants';
//import { useNavigation } from '@react-navigation/native';

const TrainerScreen = ({navigation}) => {
  //const navigation = useNavigation();

  const [name, setName] = useState('');
  const [curExperience, setCurExperience] = useState(null);
  const [currentSkill, setCurrentSkill] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSkill, setIsOpenSkill] = useState(false);

  const [nameError, setNameError] = useState('');
  const [expError, setExpError] = useState('');
  const [skillsError, setSkillsError] = useState('');

  const [customStyle, setCustomStyle] = useState([
    {
      fontSize1: 14,
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

  const goToTrainerSignUp = () => {
    if (name.length === 0) {
      setNameError('Please Enter Your Full Name');
    } else if (!curExperience) {
      setExpError('Please Select Years Of Experience');
    } else if (!currentSkill) {
      setSkillsError('Please Select The Skills');
    } else {
      // navigation.navigate('');
    }
  };

  const handleNameTextChange = text => {
    setName(text);
    setCustomStyle({
      fontSize1: text.length <= 0 ? 14 : 18,
      fontWeight1: text.length <= 0 ? '400' : '500',
    });
    setNameError('');
  };

  const handleSkillTextChange = val => {
    setCurrentSkill(val);
    setCustomStyle({
      fontSize3: val.length <= 0 ? 14 : 18,
      fontWeight3: val.length <= 0 ? '400' : '500',
    });
    setSkillsError('');
  };

  const handleExpTextChange = val => {
    setCurExperience(val);
    setCustomStyle({
      fontSize2: val.length <= 0 ? 14 : 18,
      fontWeight2: val.length <= 0 ? '400' : '500',
      color: val.length <= 0 ? '#E9E9E9' : '#ffffff',
    });
    setExpError('');
  };

  return (
    <View style={styles.trainerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Image
          source={require('../assets/icons/back.png')}
          style={{
            resizeMode: 'contain',
            marginTop: '3%',
            marginLeft: '7%',
            marginBottom: '5%',
          }}
        />
      </TouchableOpacity>

      <Image
        source={require('../assets/images/login_logo.png')}
        style={styles.empLogoStyle}
      />

      <Text style={styles.trainerWelcomeText1}>Trainer's Gateway:</Text>
      <Text style={styles.trainerWelcomeText2}>Craft, Inspire, Elevate</Text>

      <View
        style={{
          height: '200%',
          width: '400%',
          borderRadius: 600,
          backgroundColor: '#2676C2',
          right: '50%',
          bottom: '1%',
          borderWidth: 10,
          borderColor: '#A9CCE3',
        }}>
        <View style={{left: '14%', marginTop: '10%'}}>
          <View style={styles.trainerInputView}>
            <Text style={styles.trainerLabelText}>Full Name</Text>
            <TextInput
              style={[
                styles.trainerInputField,
                {
                  fontSize: customStyle.fontSize1,
                  fontWeight: customStyle.fontWeight1,
                },
              ]}
              placeholder="Full Name"
              value={name}
              onChangeText={text => {
                handleNameTextChange(text);
              }}
              autoCapitalize="none"
              placeholderTextColor={'#E9E9E9'}
            />
            {nameError !== '' && (
              <Text style={styles.TrainerErrorStyle}>{nameError}</Text>
            )}
            <View>
              <Text style={styles.trainerLabelText}>Experience</Text>

              <DropDownPicker
                items={Years}
                open={isOpen}
                setOpen={() => setIsOpen(!isOpen)}
                value={curExperience}
                setValue={val => {
                  handleExpTextChange(val);
                }}
                placeholder="Select your experience level"
                placeholderStyle={styles.dropDownPlaceholderStyle}
                style={[
                  styles.dropDownExpStyle,
                  {
                    fontSize: customStyle.fontSize2,
                    fontWeight: customStyle.fontWeight2,
                    color: customStyle.color,
                  },
                ]}
                dropDownContainerStyle={styles.dropDownContainerStyle}
                selectedItemLabelStyle={{
                  color: 'black',
                  fontSize: 14,
                  fontWeight: '400',
                }}
                disableBorderRadius={false}
                maxHeight={200}
                autoScroll
                showArrowIcon={false}
                showTickIcon={true}
                closeOnBackPressed={true}
                dropDownDirection="TOP"
              />
            </View>
            {expError !== '' && (
              <Text style={styles.TrainerErrorStyle}>{expError}</Text>
            )}
            <View>
              <Text style={styles.trainerLabelText}>Skill sets</Text>
              <DropDownPicker
                items={Skills}
                open={isOpenSkill}
                setOpen={() => setIsOpenSkill(!isOpenSkill)}
                value={currentSkill}
                setValue={val => {
                  handleSkillTextChange(val);
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
                badgeTextStyle={{color: '#E9E9E9'}}
                badgeDotColors={['#E9E9E9']}
                badgeColors={['#FFFFFF33']}
                searchable
                // dropDownDirection='BOTTOM'
              />
            </View>
            {skillsError !== '' && (
              <Text style={styles.TrainerErrorStyle}>{skillsError}</Text>
            )}
          </View>

          <TouchableOpacity
            style={styles.trainerSignUpButtonView}
            onPress={() => goToTrainerSignUp()}>
            <Text style={styles.trainerSignUpButtonText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TrainerScreen;
