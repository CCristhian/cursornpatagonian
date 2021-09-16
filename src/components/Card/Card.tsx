import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Typography from '../Typography';
import logo from '../../assets/images/hp_logo.png';

import styles from './styles';
import Separator from '../Separator';

interface Props {
  imageURL?: string;
  onPress?: () => void;
  text: string;
}

//fijarse como hacer por si no recibo una URL de imagen
// que hago si no recibo onPress

const Card = ({ imageURL, onPress, text }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <Image resizeMethod="resize" source={{ uri: imageURL }} style={styles.image} />
      <Typography numberOfLines={2}>{text}</Typography>
      <Separator size={10} />
    </TouchableOpacity>
  );
};

export default Card;
