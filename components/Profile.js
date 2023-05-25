import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Profile = ({route, navigation}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [photo, setPhoto] = useState({});
  const {firstName, lastName, phone} = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setIsEdit(true)} title="Edit" />
      ),
    });
  }, [navigation]);

  const handleImageUpload = () => {
    const options = {
      mediaType: 'photo',
      cameraType: 'back',
    };
    launchCamera(options, response => {
      console.log('response: ', response);
      if (!response.didCancel) {
        setPhoto(response.assets[0]);
      }
    });
    // launchImageLibrary(options, response => {
    //   console.log('response: ', response);
    //   if (!response.didCancel) {
    //     setPhoto(response.assets[0]);
    //   }
    // });
  };
  console.log(photo);
  return (
    <>
      <View style={styles.container}>
        <Image
          source={{
            uri: `https://ui-avatars.com/api/?name=${firstName}+${lastName}`,
          }}
          style={styles.image}
        />
        <Text style={styles.name}>{`${firstName} ${lastName}`}</Text>
        <Text style={styles.phone}>{phone}</Text>
      </View>
      <Modal animationType="slide" visible={isEdit}>
        <View style={styles.editForm}>
          <Text style={styles.modalHeading}>Edit User</Text>
          {photo.uri && (
            <View style={styles.imageContainer}>
              <Image
                source={{uri: photo.uri}}
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: 'cover',
                }}
              />
            </View>
          )}
          <Text style={styles.label}>Photo:</Text>
          <Button title="Choose Photo" onPress={handleImageUpload} />
          <Text style={styles.label}>First Name:</Text>
          <TextInput style={styles.textInput} value={firstName} />
          <Text style={styles.label}>Last Name:</Text>
          <TextInput style={styles.textInput} value={lastName} />
          <View style={styles.actionBtns}>
            <Button
              title="Update"
              onPress={() => console.log('Update clicked')}
            ></Button>
            <Button title="Cancel" onPress={() => setIsEdit(false)}></Button>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    fontWeight: 700,
  },
  phone: {
    fontSize: 12,
  },
  image: {
    height: 70,
    width: 70,
  },
  editForm: {
    padding: 15,
  },
  imageContainer: {
    alignItems: 'center',
  },
  textInput: {
    borderColor: '#c9c9c9',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 7,
  },
  actionBtns: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  label: {
    fontWeight: 600,
  },
  modalHeading: {
    fontSize: 18,
    fontWeight: 800,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Profile;
