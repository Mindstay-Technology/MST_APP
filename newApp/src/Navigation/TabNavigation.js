import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../TabScreens/home/HomeScreen';
import MyProgram from '../TabScreens/myProgram/MyProgram';
import Chat from '../TabScreens/chat/Chat';
import {Image, View, Text} from 'react-native';
import TrainerListScreen from '../TabScreens/trainerList/TrainerListScreen';

const CommonTabOptions = {
  headerShown: false,
  tabBarItemStyle: {
    // borderColor: '#1111111A',
    // borderWidth: 0.5,
  },
  tabBarActiveTintColor: '#2676C2',
  tabBarInactiveTintColor: '#ffffff',
};

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          ...CommonTabOptions,
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/home.png')}
                style={{
                  height: 25,
                  width: 25,
                  resizeMode: 'contain',
                  tintColor: focused ? '#2676C2' : '#8D8D8D',
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="TrainerListScreen"
        component={TrainerListScreen}
        options={{   
          ...CommonTabOptions,       
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/tr_list.png')}
                style={{
                  height: 25,
                  width: 25,
                  resizeMode: 'contain',
                  tintColor: focused ? '#2676C2' : '#8D8D8D',
                }}
              />
            </View>
          ),
          tabBarLabel: 'Trainer List',
        }}
      />

      <Tab.Screen
        name="MyProgram"
        component={MyProgram}
        options={{
          ...CommonTabOptions,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/myprogram.png')}
                style={{
                  height: 25,
                  width: 25,
                  resizeMode: 'contain',
                  tintColor: focused ? '#2676C2' : '#8D8D8D',
                }}
              />
            </View>
          ),
          tabBarLabel: 'My Program',
        }}
      />

      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          ...CommonTabOptions,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/chat.png')}
                style={{
                  height: 25,
                  width: 25,
                  resizeMode: 'contain',
                  tintColor: focused ? '#2676C2' : '#8D8D8D',
                }}
              />
            </View>
          ),
          tabBarLabel: 'Chat',
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
