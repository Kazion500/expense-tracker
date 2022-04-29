import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import routes from 'resources/routes.json';
import { PRIMARY_COLOR } from 'theme/colors';

const IconButton = () => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      style={style.container}
      onPress={() => navigate(routes.addExpense as never)}>
      <Icon name="plus" size={30} color="white" />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    padding: 15,
    borderRadius: 100,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 30000,
  },
});

export default IconButton;
