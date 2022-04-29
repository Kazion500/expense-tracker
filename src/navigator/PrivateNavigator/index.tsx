import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from 'resources/routes.json';
import Home from 'screens/PrivateScreen/Home';
import AddExpense from 'screens/PrivateScreen/AddExpense';

const MainStack = createNativeStackNavigator();

export const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#ffffff' },
      }}
      initialRouteName={routes.home}>
      <MainStack.Screen name={routes.home} component={Home} />
    </MainStack.Navigator>
  );
};
