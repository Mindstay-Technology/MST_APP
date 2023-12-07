import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../TabScreens/home/HomeScreen';
import TrainerList from '../TabScreens/trainerList/TrainerList';
import MyProgram from '../TabScreens/myProgram/MyProgram';
import Chat from '../TabScreens/chat/Chat';
//import Icon from 'react-native-vector-icons/Ionicons';
import {Image, View, Text} from 'react-native';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
          initialRouteName="TrainerList"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 60,
        },

        }}
        >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarItemStyle: {
            borderColor: '#1111111A',
            borderWidth: 0.5,
          },
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
          tabBarLabel:'Home',
          tabBarActiveTintColor:'#2676C2',
          tabBarInactiveTintColor:'#ffffff'
          
        }}
      />


      <Tab.Screen
        name="TrainerList"
        component={TrainerList}
        options={{
          headerShown: false,
          tabBarItemStyle: {
            borderColor: '#1111111A',
            borderWidth: 0.5,
          },
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
          tabBarLabel:'Trainer List',
          tabBarActiveTintColor:'#2676C2',
          tabBarInactiveTintColor:'#ffffff'
        }}
      />


      <Tab.Screen
        name="MyProgram"
        component={MyProgram}
        options={{
          headerShown: false,
          tabBarItemStyle: {
            borderColor: '#1111111A',
            borderWidth: 0.5,
          },
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
          tabBarLabel:'My Program',
          tabBarActiveTintColor:'#2676C2',
          tabBarInactiveTintColor:'#ffffff'
        }}
      />

      
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarItemStyle: {
            borderColor: '#1111111A',
            borderWidth: 0.5,
          },

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
          tabBarLabel:'Chat',
          tabBarActiveTintColor:'#2676C2',
          tabBarInactiveTintColor:'#ffffff'
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
