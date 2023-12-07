import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  BackHandler,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Login from './Login';
import styles from '../style/styles';

const slides = [
  {
    key: 's1',
    title: 'Seamless Training Management',
    image: require('../assets/images/frame_1.png'),
    description:
      'Empower your team effortlessly. Customize training, track progress, and collaborate seamlessly with siscooTraining',
  },
  {
    key: 's1',
    title: 'Seamless Training Management',
    image: require('../assets/images/frame_2.png'),
    description:
      'Transform training with sissoo Training. Create engaging courses, assess progress, and foster collaboration for impactful learning experiences',
  },
  {
    key: 's1',
    title: 'Seamless Training Management',
    image: require('../assets/images/frame_3.png'),
    description:
      'Unlock success with sissoo Training. Elevate skills, ignite careers. Join us for unstoppable growth',
  },
];

const onBoarding = () => {

  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({item}) => {
    return (
      <View style={styles.onBoardingContainer}>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Text style={styles.introDescStyle}> {item.description}</Text>
      </View>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles.arrowButton}>
        <Image
          source={require('../assets/icons/forward_Arrow.png')}
          style={{alignSelf: 'center'}}
        />
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.arrowButton}>
        <Image
          source={require('../assets/icons/forward_Arrow.png')}
          style={{alignSelf: 'center'}}
        />
      </View>
    );
  };

  const SkipButton = () => {
    return (
      <View style={{marginTop: '10%'}}>
        <Text style={styles.skipButtonText}> Skip</Text>
      </View>
    );
  };

  const BackButton = () => {
    return (
      <View>
        <Text style={styles.backButtonText}>Back</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <Login/>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
          renderNextButton={() => renderNextButton()}
          activeDotStyle={styles.activeDotStyle}
          dotStyle={styles.dotStyle}
          renderSkipButton={() => SkipButton()}
          renderPrevButton={() => BackButton()}
          showPrevButton={true}
          renderDoneButton={() => renderDoneButton()}
        />
      )}
    </>
  );
};

export default onBoarding;
