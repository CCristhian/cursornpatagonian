import React from 'react';
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { goBack } from '../../navigation/controls';
import Separator from '../Separator';
import Typography from '../Typography';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../utils/theme';
import styles from './styles';
import background_header from '../../assets/images/background_header.png';
import logo from '../../assets/images/hp_logo.png';

interface Props {
  title?: string;
  onPressBackButton?: () => void;
  onPressRightButton?: () => void;
  showBackButton?: boolean;
  showImage?: boolean;
  RightSideComponent?: React.FC;
}

const DefaultHeader = ({
  title,
  onPressBackButton,
  onPressRightButton,
  showBackButton,
  showImage,
  RightSideComponent,
}: Props) => {
  if (showImage) {
    return (
      <View>
        <ImageBackground source={background_header} style={styles.image}>
          <Image source={logo} style={styles.logo} />
        </ImageBackground>
      </View>
    );
  } else {
    return (
      <>
        <SafeAreaView />
        <View style={styles.mainContainer}>
          {showBackButton ? (
            <TouchableOpacity onPress={onPressBackButton} style={styles.sideButtonContainer}>
              <MaterialIcon name="navigate-before" size={35} color={colors.mainOrange} />
            </TouchableOpacity>
          ) : (
            <Separator isHorizontal size={40} />
          )}
          <View style={styles.titleContainer}>
            <Typography variant="bold" size={17}>
              {title}
            </Typography>
          </View>
          {RightSideComponent ? (
            <TouchableOpacity onPress={onPressRightButton} style={styles.sideButtonContainer}>
              <RightSideComponent />
            </TouchableOpacity>
          ) : (
            <Separator isHorizontal size={40} />
          )}
        </View>
      </>
    );
  }
};

DefaultHeader.defaultProps = {
  onPressBackButton: goBack,
  onPressRightButton: () => {},
  showBackButton: true,
  showImage: true,
};

export default DefaultHeader;
