import React, { FC } from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { DANGER_COLOR, GRAY_COLOR } from 'theme/colors';
import CustomText from '../CustomText';

const Input: FC<
  TextInputProps & {
    label: string;
    error: string | undefined;
  }
> = props => {
  return (
    <View>
      <CustomText size="md" style={styles.label}>
        {props.label}
      </CustomText>
      <TextInput
        {...props}
        style={[
          styles.input,
          props.style,
          {
            borderColor: props.error ? DANGER_COLOR : GRAY_COLOR,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderRadius: 5,
    fontSize: 16,
    marginVertical: 10,
    borderColor: '#ccc',
  },
  label: {},
});

export default Input;
