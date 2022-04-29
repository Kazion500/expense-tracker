import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import CustomText from 'components/atoms/CustomText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Data } from 'utils/types';
import Amount from 'components/atoms/Amount';

const ListItem: FC<Data> = ({ category, amount, description, iconType }) => {
  const setColor = () => {
    switch (category.toLowerCase()) {
      case 'travel':
        return {
          bgColor: '#6ec42f',
          textColor: '#338c31',
        };
      case 'car service':
        return {
          bgColor: '#60cca4',
          textColor: '#225945',
        };
      case 'food':
        return {
          bgColor: '#519ec4',
          textColor: '#295369',
        };
      default:
        return {
          bgColor: '#f5f5f5',
          textColor: '#000',
        };
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Icon
          name={iconType}
          size={30}
          style={[
            styles.icon,
            {
              backgroundColor: setColor().bgColor,
              color: setColor().textColor,
            },
          ]}
        />
        <View style={styles.textWrapper}>
          <CustomText size="md" style={styles.category}>
            {category}
          </CustomText>
          <CustomText numberOfLines={2} size="sm" color="gray">
            {description}
          </CustomText>
        </View>
      </View>

      <View style={styles.amount}>
        <Amount amount={amount} size={'xl'} currencySize={'xs'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  icon: {
    padding: 10,
    overflow: 'hidden',
    borderRadius: 5,
  },
  textWrapper: {
    marginLeft: 7,
    width: '100%',
  },
  topContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  category: {
    fontWeight: 'bold',
  },
  amount: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default ListItem;
