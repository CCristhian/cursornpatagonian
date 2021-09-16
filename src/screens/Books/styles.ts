import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  flatlistContent: {
    paddingHorizontal: 10,
  },
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  scrollView: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: '#F9F9F9',
    width: '90%',
    height: '90%',
  },
  columnWrapperStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  wholeScreenCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});

export default styles;
