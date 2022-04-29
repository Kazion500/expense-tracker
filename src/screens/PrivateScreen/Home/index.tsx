import CustomText from 'components/atoms/CustomText';
import IconButton from 'components/atoms/IconButton';
import Card from 'components/molecules/Card';
import { FilterNavigator } from 'navigator/FilterNavigator';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import data from 'resources/data.json';
import { WHITE_COLOR } from 'theme/colors';

const Home = () => {
  const balance = data.reduce(
    (acc, curr) => acc + parseInt(curr.amount, 10),
    0,
  );

  return (
    <View style={styles.container}>
      <IconButton />
      <Card budget={0} balance={balance} />
      <CustomText size="lg" style={styles.expenseTitle}>
        My Expenses
      </CustomText>
      <FilterNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: WHITE_COLOR },
  expenseTitle: {
    fontWeight: 'bold',
    margin: 15,
  },
});

export default Home;
