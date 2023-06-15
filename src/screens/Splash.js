import React, {useEffect} from 'react';
import {
  ImageBackground,
  Image,
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 2000);
  }, []);

  return (
    <ImageBackground
      source={require('../assets/images/background.jpg')}
      resizeMode="cover"
      style={styles.bgImage}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/logo-red.png')}
          style={styles.logoImg}
        />
        <Text>Sell What You Don't Need</Text>
      </View>
      <Pressable
        style={styles.loginBtn}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.btnText}>Login</Text>
      </Pressable>
      <View style={styles.registerBtn}>
        <Text style={styles.btnText}>Register</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  logoImg: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 100,
    alignItems: 'center',
  },
  bgImage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginBtn: {
    height: 60,
    width: '100%',
    backgroundColor: '#fc5c65',
  },
  registerBtn: {
    height: 60,
    width: '100%',
    backgroundColor: '#4ECDC4',
  },
  btnText: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 15,
  },
});

export default Splash;
