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
    backgroundColor: colors.background,
  },
  flatListStyle: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: colors.secondaryBackground,
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
  searchBar: {
    flexDirection: 'row',
    backgroundColor: colors.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  textInput: {
    height: 40,
    width: '70%',
    paddingRight: 17,
    fontFamily: 'Raleway-Bold',
  },
  placeholderStyle: {
    fontFamily: 'Raleway-Regular',
  },
  icon: {
    paddingHorizontal: 15,
    paddingTop: 5,
    height: 40,
  },
});

export default styles;
