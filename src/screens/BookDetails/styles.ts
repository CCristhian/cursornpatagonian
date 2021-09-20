import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  wholeScreenCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  bookTitle: {
    padding: 25,
    width: '90%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondaryColor,
  },
  bookPrimaryInfo: {
    width: '90%',
    height: '33%',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: '5%',
    resizeMode: 'contain',
  },
  image: {
    height: '100%',
    borderRadius: 30,
    aspectRatio: 0.64,
  },
  dataBook: {
    textAlign: 'justify',
    width: '100%',
    marginRight: 10,
  },
  textBox: {
    width: '58%',
    paddingLeft: 10,
  },
  sinopsys: {
    marginTop: 2,
    backgroundColor: colors.white,
    padding: 15,
    height: '17%',
    width: '90%',
    borderRadius: 30,
  },
  flatListStyle: {
    width: '90%',
  },
});

export default styles;
