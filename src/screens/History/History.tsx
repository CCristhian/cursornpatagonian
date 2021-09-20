import React from 'react';
import { Image, ImageBackground, View } from 'react-native';

import { DefaultHeader, Separator, Typography } from '../../components';
import styles from './styles';

import construction from '../../assets/images/construction.png';
import logo from '../../assets/images/hp_logo.png';
import { colors } from '../../utils/theme';

const HistoryScreen = () => {
  return (
    <>
      <DefaultHeader showBackButton={false} showImage={true} />
      <View style={styles.mainContainer}>
        <Typography size={25} variant="bold" color={colors.primaryColor}>
          SCREEN UNDER CONSTRUCTION
        </Typography>
        <Separator size={10} />
        <ImageBackground source={construction} style={styles.image}>
          <Image source={logo} style={styles.logo} />
        </ImageBackground>
      </View>
    </>
  );
};

export default HistoryScreen;
