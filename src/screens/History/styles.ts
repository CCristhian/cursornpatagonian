import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: colors.background,
  },
  image: {
    alignItems: 'center',
    width: '100%',
    height: '80%',
    justifyContent: 'center',
  },
  logo: {
    aspectRatio: 1,
    marginBottom: 130,
    marginRight: 50,
  },
});

export default styles;
