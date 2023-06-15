import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../../screens/Splash';
import Profile from '../../screens/Profile';
import Products from '../../screens/Products';
import TabNavigator from './TabNavigator';
const Stack = createNativeStackNavigator();

const AppStack = () => {
    return(
        <Stack.Navigator>
          <Stack.Screen
            name="Tab Navigator"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Products" component={Products} />
        </Stack.Navigator>
    )
}

export default AppStack;