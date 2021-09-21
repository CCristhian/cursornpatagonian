import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: colors.background,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  sectionList: {
    width: '90%',
    height: '70%',
    backgroundColor: colors.white,
    borderRadius: 30,
    padding: 15,
  },
  headerSection: {
    borderBottomWidth: 1,
    borderBottomColor: colors.secondaryColor,
    marginTop: 10,
    marginBottom: 5,
    paddingBottom: 4,
  },
  listItem: {
    flexDirection: 'row',
    padding: 5,
    paddingLeft: 20,
    textAlign: 'center',
    alignItems: 'center',
  },
  wholeScreenCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});

export default styles;
