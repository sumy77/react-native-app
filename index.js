/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';
import App from './App';
import {name as appName} from './app.json';

// PushNotification.configure({
//   onRegister: function (token) {
//     console.log('TOKEN:', token);
//   },

//   onNotification: function (notification) {
//     console.log('NOTIFICATION:', notification);
//   },
//   permissions: {
//     alert: true,
//     badge: true,
//     sound: true,
//   },
//   popInitialNotification: true,
//   requestPermissions: Platform.OS === 'ios',
// });
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
