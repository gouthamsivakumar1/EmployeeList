import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import {fetchEmployeeDetails} from '../../../api/employeeService';

const Home = props => {
  console.log('DATA', JSON.stringify(props));
  const {navigator} = props.navigation;

  const [details, setDetailsState] = useState([]);
  useEffect(() => {
    fetchEmployeeDetails().then(response => {
      setDetailsState(response.data);
    });
  }, []);
  const RenderItem = ({item, navigator}) => {
    const img = item.profile_image;
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Details', {data: item});
        }}>
        <ListItem bottomDivider>
          <Avatar
            rounded
            source={{
              uri: img,
            }}
          />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={style.root}>
      <FlatList data={details} renderItem={item => RenderItem(item)} />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    height: 20,
  },
});

export default Home;
