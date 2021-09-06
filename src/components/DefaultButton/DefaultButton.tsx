import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';
import { colors } from '../../utils/theme';

import styles from './styles';

interface Props {
  additionalStyle?: ViewStyle;
  color?: string;
  onPress: () => void;
  text: string;
  textSize?: number;
  variant?: 'primary' | 'secondary';
}

const DefaultButton = ({
  additionalStyle,
  onPress,
  text,
  textSize,
  variant = 'primary',
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, additionalStyle, styles[variant]]}
      onPress={onPress}
    >
      <Text style={[{ fontSize: textSize }, { color: 'white' }, styles[variant]]}>{text}</Text>
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  additionalStyle: {},
  color: colors.mainOrange,
  textSize: 14,
  variant: 'primary',
};

export default DefaultButton;
