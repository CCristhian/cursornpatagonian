import { StyleSheet } from 'react-native';

import { colors } from '../../utils/theme';
import { IS_ANDROID } from '../../utils/constants';
import { DEVICE_WIDTH } from '../../utils/dimensions';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
    flexDirection: 'row',
    height: IS_ANDROID ? 50 : 40,
  },
  image: {
    alignItems: 'center',
    minHeight: 60,
    width: DEVICE_WIDTH,
    justifyContent: 'center',
  },
  logo: {
    height: 30,
    aspectRatio: 1,
    width: DEVICE_WIDTH,
  },
  sideButtonContainer: {
    height: 40,
    width: 40,
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
    color: colors.mainOrange,
  },
});

export default styles;
