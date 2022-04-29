import React, { FC } from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import routes from 'resources/routes.json';
import { Linking, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DrawerContent: FC<DrawerContentComponentProps> = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Home"
        labelStyle={styles.labelStyle}
        icon={() => (
          <MaterialCommunityIcons name="home" size={25} color="gray" />
        )}
        onPress={() => props.navigation.navigate(routes.home)}
      />
      <DrawerItem
        label="Change Budget"
        labelStyle={styles.labelStyle}
        icon={() => <FontAwesome name="dollar" size={25} color="gray" />}
        onPress={() => props.navigation.navigate(routes.changeBudget)}
      />
      <DrawerItem
        label="Developer Info"
        labelStyle={styles.labelStyle}
        icon={() => <FontAwesome name="user" size={25} color="gray" />}
        onPress={() => Linking.openURL('https://github.com/kazion500')}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    marginLeft: -25,
  },
});

export default DrawerContent;
