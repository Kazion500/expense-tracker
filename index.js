import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import AppRoute from 'appRoute';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppRoute />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

AppRegistry.registerComponent(appName, () => App);
