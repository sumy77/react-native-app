import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Pressable,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import PhoneAuth from "../components/auth/PhoneAuth";
import EmailAuth from "../components/auth/EmailAuth";
// import {
//   getHash,
//   startOtpListener,
//   useOtpVerify,
//   getOtp,
// } from "react-native-otp-verify";

export default function Login({ navigation }) {
  const [phoneAuth, setPhoneAuth] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.loginWrapper}>
        {phoneAuth ? <PhoneAuth /> : <EmailAuth />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  loginWrapper: {
    flex: 1,
  }
});
