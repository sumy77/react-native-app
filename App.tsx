import React from 'react';
import {Provider} from 'react-redux';
import Contacts from './components/Contacts';
import LandingPage from './components/LandingPage';
import Settings from './components/Settings';
import Profile from './components/Profile';
import Categories from './components/Categories';
import Products from './components/Products';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {AntDesign, MaterialIcons} from 'react-native-vector-icons';
// import Icon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import store from './redux/store';
import Login from './components/Login';
import OtpVerify from './components/OtpVerify';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  const c = 'text';
  console.log(c);
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
      })}>
      <Tab.Screen
        name="Home"
        component={LandingPage}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Root"
            component={Root}
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
