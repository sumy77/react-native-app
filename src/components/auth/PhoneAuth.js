import React, {useState} from "react";
import { KeyboardAvoidingView, View, Text, TextInput, Pressable, StyleSheet } from "react-native";

const PhoneAuth = ({navigation}) => {
  const [phone, setPhone] = useState("");
  const handlePhoneChange = (elementValue) => {
    setPhone(elementValue);
  };
  const handleLoginSubmit = () => {
    if (phone) {
      navigation.navigate("OtpVerify");
    }
  };
  return(
    <KeyboardAvoidingView
          keyboardVerticalOffset={10}
          behavior="padding"
          style={styles.containerAvoidingView}
        >
          <Text style={styles.label}>Please input your phone number</Text>

          <View style={styles.containerInput}>
            <Text>+91 |</Text>
            <TextInput
              style={styles.input}
              placeholder="Please enter your phone number"
              keyboardType="numeric"
              onChangeText={handlePhoneChange}
              autoFocus={true}
            />
          </View>
          <View style={styles.viewBottom}>
            <Pressable
              onPress={handleLoginSubmit}
              style={[
                styles.btnContainer,
                { backgroundColor: phone ? "tomato" : "gray" },
              ]}
            >
              <Text style={styles.loginTxt}>Login</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  containerAvoidingView: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  label: {
    fontSize: 15,
    marginVertical: 50,
  },
  input: {
    flex: 1,
    height: 50,
    marginLeft: 5,
    borderColor: "white",
  },
  viewBottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 50,
  },
  containerInput: {
    flexDirection: "row",
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    borderBottomColor: "tomato",
    borderBottomWidth: 2,
  },
  loginTxt: {
    color: "white",
  },
  btnContainer: {
    width: 150,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  }
})

export default PhoneAuth;