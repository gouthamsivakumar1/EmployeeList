import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';
import {Avatar} from 'react-native-elements';

const EmployeeDetails = ({route}) => {
  const [details, setDetailsState] = useState([]);
  useEffect(() => {
    setDetailsState(route.params.data);
  }, [route.params.data]);

  return (
    <SafeAreaView style={style.root}>
      <View style={style.avatar}>
        <Avatar
          rounded
          source={{uri: details.profile_image}}
          containerStyle={style.avatar}
        />
      </View>
      <View style={style.container}>
        <Text style={style.title}>UserName : </Text>
        <Text style={style.subTitle}>{details.username}</Text>
      </View>
      <View style={style.container}>
        <Text style={style.title}>Company : </Text>
        <Text style={style.subTitle}>{details?.company?.name}</Text>
      </View>
      <View style={style.container}>
        <Text style={style.title}>Email : </Text>
        <Text style={style.subTitle}>{details.email}</Text>
      </View>
      <View style={style.container}>
        <Text style={style.title}>Address : </Text>
        <Text style={style.subTitle}>
          {details?.address?.street}
          {'\n\n'}
          {details?.address?.suite}
          {'\n\n'}
          {details?.address?.city} {'\n\n'}
          Zip-{details?.address?.zipcode}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  avatar: {
    alignSelf: 'center',
    height: 250,
    width: 250,
    borderRadius: 150,
    overflow: 'hidden',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 18,
  },
});

export default EmployeeDetails;
