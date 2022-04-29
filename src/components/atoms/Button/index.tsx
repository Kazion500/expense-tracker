import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';
import React, { FC } from 'react';
import CustomText from '../CustomText';
import { PRIMARY_COLOR } from 'theme/colors';

const Button: FC<TouchableOpacityProps> = props => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <CustomText size="lg" color="white" style={styles.text}>
        Submit
      </CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 5,

    marginTop: 10,
  },
  text: {
    fontWeight: '600',
  },
});

export default Button;
