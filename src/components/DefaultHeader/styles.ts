import { StyleSheet } from 'react-native';

import { colors } from '../../utils/theme';
import { IS_ANDROID } from '../../utils/constants';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
    flexDirection: 'row',
    height: IS_ANDROID ? 50 : 40,
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
