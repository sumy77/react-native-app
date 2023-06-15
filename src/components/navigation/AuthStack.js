import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../../screens/Splash';
import Login from '../../screens/Login';
import OtpVerify from '../../screens/OtpVerify';
import Onboarding from '../../screens/Onboarding';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return(
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="OtpVerify" component={OtpVerify} />
        </Stack.Navigator>
    )
}

export default AuthStack;