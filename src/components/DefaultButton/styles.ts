import { StyleSheet } from 'react-native';

import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginTop: 10,
    width: '40%',
    borderRadius: 20,
  },
  primary: {
    backgroundColor: colors.primaryColor,
    color: 'white',
  },
  secondary: {
    backgroundColor: 'white',
    color: colors.secondaryColor,
  },
});

export default styles;
