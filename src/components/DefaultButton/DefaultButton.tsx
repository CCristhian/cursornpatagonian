import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { Typography } from '..';
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
      <Typography size={textSize} color={colors.white} variant="bold">
        {text}
      </Typography>
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  additionalStyle: {},
  color: colors.primaryColor,
  textSize: 14,
  variant: 'primary',
};

export default DefaultButton;
