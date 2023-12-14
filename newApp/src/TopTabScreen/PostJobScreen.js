import { View, Text , ScrollView, TouchableOpacity, TextInput, Image} from 'react-native'
import React, {useState} from 'react'
import styles from './Styles/PostScreenStyles';
import Slider from '@react-native-community/slider';
import { SubmitSuccess } from './PostDataSuccess';

const PostJobScreen = () => {
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