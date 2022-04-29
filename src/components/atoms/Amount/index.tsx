import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import CustomText from '../CustomText';
import { AmountProps } from './Amount.types';
import { CustomTextProps } from '../CustomText/CustomText.types';

const Amount: FC<AmountProps & CustomTextProps> = ({
  amount = '0.00',
  size,
  currencySize,
  light,
}) => {
  return (
    <View style={styles.container}>
      <CustomText
        color={light ? 'white' : 'dark'}
        size={size}
        style={styles.leading}>
        {amount}
        <CustomText color={light ? 'white' : 'dark'} size={currencySize}>
          ZMK
        </CustomText>
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 5,
  },
  leading: {
    fontWeight: 'bold',
  },
});

export default Amount;
