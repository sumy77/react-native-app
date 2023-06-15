import messaging from '@react-native-firebase/messaging';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}

export async function registerAppWithFCM() {
    await messaging().registerDeviceForRemoteMessages();
  }

const getFcmToken = async () => {
    try {
        await registerAppWithFCM();
        const token = await messaging().getToken();
        console.log('FCM token generated ', token)
    }catch(err) {
        console.log('Error in fcm token ', err)
        // alert(err?.message)
    }
}

export const notificationListener = async () => {
  // messaging().setBackgroundMessageHandler(async remoteMessage => {
  //   console.log('Message handled in the background!', remoteMessage);
  // });

  // when app is in foreground state
  const unsubscribe = messaging().onMessage(async remoteMessage => {
    console.log('A new FCM message arrived!', remoteMessage);
  });

  // when user clicks on a notification
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
  return unsubscribe;
}