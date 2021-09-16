import { StyleSheet } from 'react-native';

import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    width: '43%',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    aspectRatio: 1,
    width: '100%',
    borderRadius: 10,
  },
});

export default styles;
