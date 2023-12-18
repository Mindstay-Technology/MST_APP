import { View, Text , ScrollView, TouchableOpacity, TextInput, Image} from 'react-native'
import React, {useState} from 'react'
import styles from '../Styles/PostScreenStyles';
import DropDownPicker from 'react-native-dropdown-picker';
import Slider from '@react-native-community/slider';
import { SubmitSuccess } from '../PostDataSuccess';
import {
  Skills,
} from '../../constants/Constants';
import Qualification from './Qualication';

const PostJobScreen = () => {

  const [isSkills, setIsSkills] = useState(false);
  const [currentTech, setCurrentTech] = useState(null);

  const [jobTitle, setJobTitle] = useState('');
  const [jobDescText, setJobDescText] = useState('');
  const [sliderValue, setSliderValue] = useState(0); // Initial value
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [overview, setOverview] = useState('');
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


//------------------Down Picker Skills---------------------------
const handleTechTextChange = val => {
  setCurrentTech(val);
  setCustomStyle({
    fontSize3: val.length <= 0 ? 14 : 18,
    fontWeight3: val.length <= 0 ? '400' : '500',
  });
  //setTechError('');
};
//--------------Slider------------------------
const handleSliderChange = (value) => {
  setSliderValue(value);
};
 //-------------------Sumbit Job-------------
 const submitJobPost = () => {
  setSubmitPost(true);

  // Automatically hide the half-screen after 3 seconds
  setTimeout(() => {
    setSubmitPost(false)
  }, 3000);
};

  return (
    <View style={styles.postJobContainer}>
    <ScrollView style={{width: '95%', marginLeft: '5%', marginTop: '5%'}}>

    <Text style={styles.jobTitleText}>Job Title</Text>
        <TextInput
          style={[
            styles.jobTitleInput,
            {
              fontSize: customStyle.fontSize1,
              fontWeight: customStyle.fontWeight1,
            },
          ]}
          placeholder="Enter Job Title"
          value={jobTitle}
          onChangeText={text => {
            setJobTitle(text);
            setCustomStyle({
              fontSize1: text.length <= 0 ? 10 : 16,
              fontWeight1: text.length <= 0 ? '400' : '500',
            });
           // setCompanyError('');
          }}
          autoCapitalize="none"
          placeholderTextColor={'#888888'}
        />

<Text style={styles.jobTitleText}>Job Description</Text>
        <TextInput
          style={[
            styles.jobTitleInput,
            {
              fontSize: customStyle.fontSize1,
              fontWeight: customStyle.fontWeight1,
            },
          ]}
          placeholder="Enter Job Description"
          value={jobDescText}
          onChangeText={text => {
            setJobDescText(text);
            setCustomStyle({
              fontSize1: text.length <= 0 ? 10 : 16,
              fontWeight1: text.length <= 0 ? '400' : '500',
            });
           // setCompanyError('');
          }}
          autoCapitalize="none"
          placeholderTextColor={'#888888'}
        />
        <Text>Qualification</Text>
        <Qualification />
<View>
          <Text style={styles.technologyText}>Skills</Text>
          <DropDownPicker
            items={Skills}
            open={isSkills}
            setOpen={() => setIsSkills(!isSkills)}
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

        <Text style={styles.jobTitleText}>Location</Text>
        <TextInput
          style={[
            styles.jobTitleInput,
            {
              fontSize: customStyle.fontSize1,
              fontWeight: customStyle.fontWeight1,
            },
          ]}
          placeholder="Enter Job Location"
          value={location}
          onChangeText={text => {
            setLocation(text);
            setCustomStyle({
              fontSize1: text.length <= 0 ? 10 : 16,
              fontWeight1: text.length <= 0 ? '400' : '500',
            });
           // setCompanyError('');
          }}
          autoCapitalize="none"
          placeholderTextColor={'#888888'}
        />

<Text style={styles.jobTitleText}>Salary & Benefits</Text>
<TextInput
          style={[
            styles.jobTitleInput,
            {
              fontSize: customStyle.fontSize1,
              fontWeight: customStyle.fontWeight1,
            },
          ]}
          placeholder="Enter salary details & benefits"
          value={salary}
          onChangeText={text => {
            setSalary(text);
            setCustomStyle({
              fontSize1: text.length <= 0 ? 10 : 16,
              fontWeight1: text.length <= 0 ? '400' : '500',
            });
           // setCompanyError('');
          }}
          autoCapitalize="none"
          placeholderTextColor={'#888888'}
        />

<Text style={styles.jobTitleText}>Company Overview</Text>
        <TextInput
          style={[
            styles.jobTitleInput,
            {
              fontSize: customStyle.fontSize1,
              fontWeight: customStyle.fontWeight1,
            },
          ]}
          placeholder="Enter About Company"
          value={overview}
          onChangeText={text => {
            setOverview(text);
            setCustomStyle({
              fontSize1: text.length <= 0 ? 10 : 16,
              fontWeight1: text.length <= 0 ? '400' : '500',
            });
           // setCompanyError('');
          }}
          autoCapitalize="none"
          placeholderTextColor={'#888888'}
        />

    <View style={styles.buttonsView}>
            <View style={styles.resetButton}>
              <TouchableOpacity>
                <Text style={styles.resetText}>Reset</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.submitButton}>
            <TouchableOpacity onPress={()=>{submitJobPost()}}>
                <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
          {submitPost && ( 
            <SubmitSuccess/>
          )}
    </ScrollView>
    </View>
  )
}

export default PostJobScreen