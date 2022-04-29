import { StyleSheet, ScrollView } from 'react-native';
import React, { FC } from 'react';
import data from 'resources/data.json';
import { filterByData } from 'utils';
import ListItem from 'components/molecules/ListItem';
import { Data } from 'utils/types';
import NotFound from '../NotFound';
import { ExpenseInfoProps } from './ExpenseInfo.types';

const ExpenseInfo: FC<ExpenseInfoProps> = ({ type }) => {
  const setData = (): Data[] => {
    switch (type) {
      case 'today':
        return filterByData(data, 'today');
      case 'week':
        return filterByData(data, 'week');
      case 'month':
        return filterByData(data, 'month');
      default:
        return data;
    }
  };

  return setData().length ? (
    <ScrollView style={styles.container}>
      {setData().map(item => (
        <ListItem {...item} key={item.id} />
      ))}
    </ScrollView>
  ) : (
    <NotFound message={`No Expenses Recorded ${type}`} />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default ExpenseInfo;
