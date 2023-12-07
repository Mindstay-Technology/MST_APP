import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../style/styles';
//import {useNavigation} from '@react-navigation/native';

const SignUp = ({navigation}) => {
  //const navigation = useNavigation();
  return (
    <View style={styles.signUPContainer}>
      <Image
        source={require('../assets/images/login_logo.png')}
        style={styles.imageLogoStyle}
      />
      <Text style={styles.signUpWelcomeText}>
        Trailblazer or Voyager, Select Your Role!
      </Text>

      <View
        style={{
          height: '200%',
          width: '400%',
          borderRadius: 600,
          backgroundColor: '#2676C2',
          right: '50%',
          borderWidth:10,
          borderColor:'#A9CCE3'
        }}>
        <View style={{left: '13%', marginTop: '12%'}}>
          <View style={{paddingBottom: '3%'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('EmployerScreen')}>
              <View style={styles.empTrainerView}>
                <Image
                  source={require('../assets/images/employer.png')}
                  style={{alignSelf: 'center', resizeMode: 'contain', marginLeft:'3%'}}
                />
                <View style={styles.empTrainerTextView}>
                  <Text style={styles.empTrainerHeadText}>
                    Unlock Team Excellence
                  </Text>
                  <Text style={styles.empTrainerDescText}>
                    Lead team growth effortlessly as an{' '}
                  </Text>
                  <Text style={styles.empTrainerDescText}>
                    Employer with sissoo Training
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('TrainerScreen')}>
              <View style={styles.empTrainerView}>
                <Image
                  source={require('../assets/images/trainer.png')}
                  style={{alignSelf: 'center', resizeMode: 'contain', marginLeft:'3%'}}
                />
                <View style={styles.empTrainerTextView}>
                  <Text style={styles.empTrainerHeadText}>
                    Inspire Learning Journey
                  </Text>
                  <Text style={styles.empTrainerDescText}>
                    Shape learning as a Trainer with
                  </Text>
                  <Text style={styles.empTrainerDescText}>
                    sissoo crafting engaging courses.{' '}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
