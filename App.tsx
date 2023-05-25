import React, {useEffect} from 'react';
import { Alert } from 'react-native';
import {Provider} from 'react-redux';
import Contacts from './components/Contacts';
import Splash from './components/Splash';
import Settings from './components/Settings';
import Profile from './components/Profile';
import Categories from './components/Categories';
import Products from './components/Products';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
// import {AntDesign, MaterialIcons} from 'react-native-vector-icons';
// import Icon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import store from './redux/store';
import Login from './components/Login';
import OtpVerify from './components/OtpVerify';
import Home from './components/Home';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return <Icon name="home" size={size} color={color} />;
          } else if (route.name === 'Contacts') {
            return <MaterialIcons name="contacts" size={size} color={color} />;
          } else if (route.name === 'Settings') {
            return <Icon name="settings-outline" size={size} color={color} />;
          } else if (route.name === 'Categories') {
            return <MaterialIcons name="category" size={size} color={color} />;
          }
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'tomato',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function App() {
  useEffect(() => {
    getDeviceToken();
  }, []);

  useEffect(() => {
    // when app is in background state
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage,
      );
    });

    // when app is in kill state
    messaging().getInitialNotification().then(remoteNotification=>{
      console.log('Initial message!', remoteNotification);
    }).catch((err)=>{ alert(err); })

    // when app is opened
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      PushNotification.localNotification({
        channelId: 'test-channel',
        title: 'Local Notification called as push',
        message: 'Notification message',
      });
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  const getDeviceToken = async () => {
    const token = await messaging().getToken();
    console.log(token);
  };
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Tab Navigator"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="OtpVerify" component={OtpVerify} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Products" component={Products} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
