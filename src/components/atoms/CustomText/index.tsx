import { Text, TextProps } from 'react-native';
import React, { FC } from 'react';
import { CustomTextProps } from './CustomText.types';
import {
  DANGER_COLOR,
  GRAY_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SUCCESS_COLOR,
  WHITE_COLOR,
} from 'theme/colors';

const CustomText: FC<TextProps & CustomTextProps> = props => {
  const setFontSize = () => {
    switch (props.size) {
      case 'xxs':
        return 9;
      case 'xs':
        return 12;
      case 'sm':
        return 14;
      case 'md':
        return 16;
      case 'lg':
        return 18;
      case 'xl':
        return 20;
      case 'xxl':
        return 26;
      default:
        return 35;
    }
  };

  const setColor = () => {
    switch (props.color) {
      case 'primary':
        return PRIMARY_COLOR;
      case 'secondary':
        return SECONDARY_COLOR;
      case 'success':
        return SUCCESS_COLOR;
      case 'white':
        return WHITE_COLOR;
      case 'gray':
        return GRAY_COLOR;
      case 'danger':
        return DANGER_COLOR;
      default:
        return '#000';
    }
  };

  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontSize: setFontSize(),
          color: setColor(),
        },
      ]}>
      {props.children}
    </Text>
  );
};

export default CustomText;
