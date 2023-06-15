import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import { listUsers } from '../redux/actions/userActions';
// import PushNotification from 'react-native-push-notification';

const Contacts = props => {
  const {navigate} = props.navigation;
  const [usersData, setUsersData] = useState([]);
  const dispatch = useDispatch();
  const users = useSelector(state => state.user);

  useEffect(() => {
    dispatch(listUsers());
  }, []);

  useEffect(() => {
    setUsersData(users);
  }, [users]);

  const handleSearch = elementValue => {
    if (elementValue.trim() === '') {
      setUsersData(users);
      return;
    }
    const filteredUsers = usersData.filter(user =>
      user.firstName.includes(elementValue),
    );
    setUsersData(filteredUsers);
  };

  const handleContactClick = (user, key) => {
    // PushNotification.localNotification({
    //   channelId: 'test-channel',
    //   title: 'You clicked on ' + user.firstName,
    //   message: `Hi you selected ${user.firstName} ${user.lastName}`,
    //   id: key,
    // });
    // PushNotification.localNotificationSchedule({
    //   channelId: 'test-channel',
    //   title: 'You clicked on ' + user.firstName,
    //   message: `Hi you selected ${user.firstName} ${user.lastName}`,
    //   date: new Date(Date.now() + 20 * 1000),
    //   allowWhileIdle: true,
    //   id: key,
    // });
    navigate('Profile', user);
  };
  return (
    <>
      <TextInput
        placeholder="Search..."
        onChangeText={handleSearch}
        style={styles.searchInput}
      />
      <ScrollView style={styles.container}>
        {usersData.map((user, key) => (
          <View key={user.firstName} style={styles.contactList}>
            <UserAvatar
              size={40}
              name={`${user.firstName} ${user.lastName}`}
              style={styles.avatar}
            />
            <TouchableOpacity onPress={() => handleContactClick(user, key)}>
              <Text
                style={styles.name}
              >{`${user.firstName} ${user.lastName}`}</Text>
              <Text style={styles.phone}>{user.phone}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contactList: {
    padding: 10,
    borderColor: '#c9c9c9',
    borderWidth: 1,
    flexDirection: 'row',
  },
  searchInput: {
    padding: 10,
  },
  avatar: {
    marginRight: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: 700,
  },
  phone: {
    color: 'gray',
    fontSize: 12,
  },
});

export default Contacts;
