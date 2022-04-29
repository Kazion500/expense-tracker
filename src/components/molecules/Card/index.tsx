import { View, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import CustomText from 'components/atoms/CustomText';
import Amount from 'components/atoms/Amount';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const Card: FC<{
  balance: number;
  budget: number;
}> = ({ balance, budget }) => {
  return (
    <LinearGradient
      colors={['#09796a', '#095b79']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.5, y: 3 }}
      style={styles.cardContainer}>
      <View>
        <CustomText size="sm" color="white">
          Total spent
        </CustomText>
        <Amount light amount={balance} size="xxxl" currencySize="sm" />
        <CustomText size="xs" color="white">
          Budget
        </CustomText>
        <Amount light amount={budget} size="lg" currencySize="xxs" />
      </View>

      <View style={styles.expenseAnalyticContainer}>
        <View style={styles.expenseAnalytic}>
          <Ionicons
            name="chevron-up"
            size={15}
            style={[styles.icon, styles.iconSuccess]}
          />
          <Amount light amount={'+20'} size="md" currencySize="xxs" />
        </View>
        <View style={styles.spacing} />
        <View style={styles.expenseAnalytic}>
          <Ionicons
            name="chevron-down"
            size={15}
            style={[styles.icon, styles.iconDanger]}
          />
          <Amount light amount={-2} size="md" currencySize="xxs" />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  expenseAnalytic: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  expenseAnalyticContainer: {
    maxWidth: '40%',
  },
  icon: {
    padding: 5,
    marginRight: 6,
    borderRadius: 5,
    overflow: 'hidden',
  },
  iconSuccess: {
    backgroundColor: '#62de64',
    color: '#256e26',
  },
  iconDanger: {
    backgroundColor: '#e64545',
    color: '#8a0a0a',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    margin: 20,
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
  },
  spacing: {
    marginVertical: 4,
  },
});

export default Card;
