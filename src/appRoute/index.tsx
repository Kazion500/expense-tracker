import { DrawerNavigator } from 'navigator/DrawerNavigator';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppRoute = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerNavigator />
    </SafeAreaView>
  );
};

export default AppRoute;
