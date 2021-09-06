import { StyleSheet } from 'react-native';

import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.mainOrange,
    height: 50,
    marginTop: 10,
    width: '80%',
  },
  primary: {
    backgroundColor: colors.mainOrange,
    color: 'white',
  },
  secondary: {
    backgroundColor: 'white',
    color: colors.mainOrange,
  },
});

export default styles;
