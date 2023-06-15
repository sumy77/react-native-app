import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Contacts from '../../screens/Contacts';
import Settings from '../../screens/Settings';
import Categories from '../../screens/Categories';
import Home from '../../screens/Home';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
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
    )
}

export default TabNavigator;