import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';
import React, { useEffect, useState } from 'react';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';

const AppNav = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { loggedIn } = useSelector(state => state.auth);
    useEffect(() => {
        if(loggedIn?.data?.token) {
            setIsLoggedIn(true)
        }
    }, [loggedIn])
    console.log('Auth State: ', loggedIn?.data?.token)
    return(
        <NavigationContainer>
            {isLoggedIn ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default AppNav;