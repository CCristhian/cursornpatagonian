import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Typography from '../Typography';

import styles from './styles';
import Separator from '../Separator';
import { colors } from '../../utils/theme';

interface Props {
  imageURL: string;
  onPress?: () => void;
  text: string;
  width?: string;
  textSize?: number;
  withBackground?: boolean;
}

//fijarse como hacer por si no recibo una URL de imagen
// que hago si no recibo onPress

const Card = ({ imageURL, onPress, text, width, textSize, withBackground }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.mainContainer,
        { width: width },
        { backgroundColor: withBackground ? colors.white : colors.background },
      ]}
    >
      <Image source={{ uri: imageURL }} style={styles.image} />
      <Typography numberOfLines={2} align="center" variant="bold" size={textSize}>
        {text}
      </Typography>
      <Separator size={10} />
    </TouchableOpacity>
  );
};

Card.defaultProps = {
  onPress: {},
  width: '43%',
  textSize: 13,
  withBackground: true,
};
export default Card;
