import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from 'components/organisms/DrawerContent';
import AppBar from 'components/molecules/AppBar';
import ChangeBudget from 'screens/PrivateScreen/ChangeBudget';
import routes from 'resources/routes.json';
import AddExpense from 'screens/PrivateScreen/AddExpense';
import Home from 'screens/PrivateScreen/Home';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{ header: props => <AppBar {...props} /> }}>
      <Drawer.Screen
        options={{
          title: 'Dashboard',
        }}
        name={routes.home}
        component={Home}
      />
      <Drawer.Screen
        options={{
          title: 'Track Expenses',
        }}
        name={routes.addExpense}
        component={AddExpense}
      />
      <Drawer.Screen
        options={{
          title: 'Change Budgets',
        }}
        name={routes.changeBudget}
        component={ChangeBudget}
      />
    </Drawer.Navigator>
  );
};
