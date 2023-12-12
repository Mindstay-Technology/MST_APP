import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import React, {useState} from 'react';
import styles from '../style/styles';
//import {useNavigation} from '@react-navigation/native';

const EmployerScreen = ({navigation}) => {
  //const navigation = useNavigation();

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [designation, setDesignation] = useState('');

  const [nameError, setNameError] = useState('');
  const [companyError, setCompanyError] = useState('');
  const [designationError, setDesignationError] = useState('');


  const [customStyle, setCustomStyle]= useState([
    {
    fontSize1:14,
    fontWeight1:'400',
    },
    {
      fontSize2:14,
      fontWeight2:'400',
      },
      {
        fontSize3:14,
        fontWeight3:'400',
        },
      ]
    );

  const goToEmpSignUp = () => {

    if(name.length===0){

    setNameError('Please Enter Your Full Name')
    } else if(company.length===0){
      setCompanyError('Please Enter The company Name')
    } else if(designation.length===0){
      setDesignationError('Please Enter The Designation')
    } else {
       navigation.navigate('MyTabs');
    }
  };

  return (
    <View style={styles.employerContainer}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Image
            source={require('../assets/icons/back.png')}
            style={{
              resizeMode: 'contain',
              marginLeft: '7%',
              marginBottom: '5%',
              marginTop: '3%',
            }}
          />
        </TouchableOpacity>
      </View>

      <Image
        source={require('../assets/images/login_logo.png')}
        style={styles.empLogoStyle}
      />
      <Text style={styles.empWelcomeText}>
        Welcome, Employers! Elevate Team Excellence with sissoo Training
      </Text>

      <View
        style={{
          height: '200%',
          width: '400%',
          borderRadius: 600,
          backgroundColor: '#2676C2', //#C8C8FA #AED6F1 #A9CCE3
          right: '50%',
          bottom:'3%',
          borderWidth:10,
          borderColor:'#A9CCE3'
        }}>
        <View style={{left: '14%', marginTop: '10%'}}>
          
          
          <View style={styles.empInputView}>

            <Text style={styles.empLabelText}>Full Name</Text>
            <TextInput
              style={[styles.empInputField , {fontSize:customStyle.fontSize1, fontWeight:customStyle.fontWeight1}]}
              placeholder="Enter Full Name"
              value={name}
              onChangeText={(text) => {
                setName(text);
                setCustomStyle({fontSize1: text.length <=0 ? 14 : 18, fontWeight1:text.length<=0 ? '400' : '500'})
                setNameError('');
              }}
              autoCapitalize="none"
              placeholderTextColor={'#E9E9E9'}
            />
            {nameError !== '' && (
            <Text style={styles.EmpErrorStyle}>{nameError}</Text>
          )}

            <Text style={styles.empLabelText}>Comapany Name</Text>
            <TextInput
              style={[styles.empInputField, {fontSize:customStyle.fontSize2, fontWeight:customStyle.fontWeight2}]}
              placeholder="Enter Company Name"
              value={company}
              onChangeText={(text) => {
                setCompany(text);
                setCustomStyle({fontSize2: text.length <=0 ? 14 : 18, fontWeight2:text.length<=0 ? '400' : '500'})
                setCompanyError('');
              }}
              autoCapitalize="none"
              placeholderTextColor={'#E9E9E9'}
            />
              {companyError !== '' && (
              <Text style={styles.EmpErrorStyle}>{companyError}</Text>
                )}

            <Text style={styles.empLabelText}>Designation</Text>
            <TextInput
              style={[styles.empInputField, , {fontSize:customStyle.fontSize3, fontWeight:customStyle.fontWeight3}]}
              placeholder="Enter Your Role"
              value={designation}
              onChangeText={(text) => {
                setDesignation(text);
                setCustomStyle({fontSize3: text.length <=0 ? 14 : 18, fontWeight3:text.length<=0 ? '400' : '500'})
                setDesignationError('');
              }}
              autoCapitalize="none"
              placeholderTextColor={'#E9E9E9'}
            />
                {designationError !== '' && (
            <Text style={styles.EmpErrorStyle}>{designationError}</Text>
          )}

          </View>

          <TouchableOpacity
            style={styles.empSignUpButtonView}
            onPress={() => goToEmpSignUp()}>
            <Text style={styles.empSignUpButtonText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EmployerScreen;
