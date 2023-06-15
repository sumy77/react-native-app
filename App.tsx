import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import { requestUserPermission, notificationListener } from './src/helpers/notificationServices';
import AppNav from './src/components/navigation/AppNav';

export default function App() {
  useEffect(() => {
    requestUserPermission(); 
    notificationListener();
  }, [])
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
}
