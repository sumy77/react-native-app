import {
  View,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  StyleSheet,
  Keyboard,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  getHash,
  removeListener,
  startOtpListener,
} from 'react-native-otp-verify';

export default function OtpVerify() {
  const firstField = useRef(null);
  const secondField = useRef(null);
  const thirdField = useRef(null);
  const fourthField = useRef(null);
  const [userOtp, setUserOtp] = useState(Array(4).fill(''));
  const handleOnChange = (elementValue, inputNum) => {
    const updatedOtp = userOtp.map((o, i) => {
      if (i === inputNum) {
        return elementValue;
      } else {
        return o;
      }
    });
    setUserOtp(updatedOtp);
    if (elementValue.trim() !== '') {
      switch (inputNum) {
        case 0:
          secondField.current.focus();
          break;
        case 1:
          thirdField.current.focus();
          break;
        case 2:
          fourthField.current.focus();
          break;
        default:
          fourthField.current.focus();
      }
    }
  };
  useEffect(() => {
    getHash()
      .then(hash => {
        // use this hash in the message.
        console.log('hash ', hash);
      })
      .catch(console.log);

    startOtpListener(message => {
      // extract the otp using regex e.g. the below regex extracts 4 digit otp from message
      let otp = /(\d{4})/g.exec(message)[1];
      otp = otp.split('');
      setUserOtp(otp);
    });
    return () => removeListener();
  }, []);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.loginWrapper}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={50}
          behavior="padding"
          style={styles.containerAvoidingView}>
          <Text style={styles.text}>Input your OTP code sent via SMS</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.input,
                // eslint-disable-next-line react-native/no-inline-styles
                {borderBottomColor: userOtp[0] ? 'gray' : 'tomato'},
              ]}
              autoFocus={true}
              maxLength={1}
              onChangeText={e => handleOnChange(e, 0)}
              ref={firstField}
              value={userOtp[0]}
            />
            <TextInput
              style={[
                styles.input,
                // eslint-disable-next-line react-native/no-inline-styles
                {borderBottomColor: userOtp[1] ? 'gray' : 'tomato'},
              ]}
              maxLength={1}
              onChangeText={e => handleOnChange(e, 1)}
              ref={secondField}
              value={userOtp[1]}
            />
            <TextInput
              style={[
                styles.input,
                // eslint-disable-next-line react-native/no-inline-styles
                {borderBottomColor: userOtp[2] ? 'gray' : 'tomato'},
              ]}
              maxLength={1}
              onChangeText={e => handleOnChange(e, 2)}
              ref={thirdField}
              defaultValue={userOtp[2]}
            />
            <TextInput
              style={[
                styles.input,
                // eslint-disable-next-line react-native/no-inline-styles
                {borderBottomColor: userOtp[3] ? 'gray' : 'tomato'},
              ]}
              maxLength={1}
              onChangeText={e => handleOnChange(e, 3)}
              ref={fourthField}
              defaultValue={userOtp[3]}
            />
          </View>
        </KeyboardAvoidingView>
        <View style={styles.bottomView}>
          <Pressable style={styles.resendContainer}>
            <Text>Resend</Text>
          </Pressable>
          <Pressable
            style={[
              styles.btnContainer,
              {
                backgroundColor: userOtp.every(el => el.trim() !== '')
                  ? 'tomato'
                  : 'gray',
              },
            ]}>
            <Text style={styles.btnTxt}>Submit</Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  loginWrapper: {
    flex: 1,
  },
  text: {
    marginBottom: 10,
  },
  containerAvoidingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    margin: 'auto',
  },
  input: {
    width: 40,
    padding: 5,
    borderBottomWidth: 1,
    textAlign: 'center',
  },
  btnContainer: {
    width: 200,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 50,
  },
  btnTxt: {
    color: 'white',
  },
  resendContainer: {
    marginBottom: 50,
  },
});
