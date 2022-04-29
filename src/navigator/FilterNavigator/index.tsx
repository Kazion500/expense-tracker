import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ExpenseInfo from 'components/organisms/ExpenseInfo';
import { GRAY_COLOR, PRIMARY_COLOR } from 'theme/colors';

const Tab = createMaterialTopTabNavigator();

const All = () => <ExpenseInfo type="today" />;
const Week = () => <ExpenseInfo type="week" />;
const Month = () => <ExpenseInfo type="month" />;

export const FilterNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: PRIMARY_COLOR,
        tabBarInactiveTintColor: GRAY_COLOR,
        tabBarIndicatorStyle: { backgroundColor: PRIMARY_COLOR },
      }}>
      <Tab.Screen name="Today" component={All} />
      <Tab.Screen name="Week" component={Week} />
      <Tab.Screen name="Month" component={Month} />
    </Tab.Navigator>
  );
};
