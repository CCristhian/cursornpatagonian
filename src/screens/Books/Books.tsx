import React, { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import { DefaultHeader, Separator, Typography, Card, DefaultButton } from '../../components';
import styles from './styles';

import { goToScreen } from '../../navigation/controls';
import { colors } from '../../utils/theme';
import useBooksData from './hooks/useBooksData';

const ListItem = ({ id, title, cover }: { id: number; title: string; cover: string }) => (
  <Card onPress={() => goToScreen('BookDetails', { id, title })} text={title} imageURL={cover} />
);

const flatlistKeyExtractor = (item: Book) => `${item.id}`;

const renderFlatlistItem = ({ item }: { item: Book }) => (
  <ListItem id={item.id} title={item.title} cover={item.book_covers[0].URL} />
);

const BooksScreen = () => {
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const { books, loading, errorOccurred } = useBooksData(refreshFlag);

  const netInfo = useNetInfo();

  const toggleRefreshFlag = useCallback(() => {
    setRefreshFlag(!refreshFlag);
  }, [refreshFlag]);

  if (!netInfo.isConnected) {
    return (
      <View style={styles.wholeScreenCenter}>
        <Typography size={20}>You don't have internet :'(</Typography>
      </View>
    );
  }

  if (loading) {
    return (
      <>
        <DefaultHeader showBackButton={false} showImage={true} />
        <View style={styles.wholeScreenCenter}>
          <ActivityIndicator size="large" color={colors.mainOrange} />
        </View>
      </>
    );
  }
  if (errorOccurred) {
    return (
      <View style={styles.wholeScreenCenter}>
        <Typography size={20}>An unknown error occurred :'(</Typography>
        <Separator size={15} />
        <DefaultButton text="Retry" onPress={toggleRefreshFlag} />
      </View>
    );
  }

  return (
    <>
      <DefaultHeader showBackButton={false} showImage={true} />
      <View style={styles.mainContainer}>
        <Separator size={15} />
        <Typography size={25} variant="bold" color={colors.primaryColor}>
          BOOKS
        </Typography>
        <Separator size={15} />
        <View style={styles.scrollView}>
          <Separator size={20} />
          <FlatList
            numColumns={2}
            horizontal={false}
            keyExtractor={flatlistKeyExtractor}
            refreshing={loading}
            onRefresh={toggleRefreshFlag}
            data={books}
            renderItem={renderFlatlistItem}
            ItemSeparatorComponent={Separator}
            columnWrapperStyle={styles.columnWrapperStyle}
          />
        </View>
        <Separator size={30} />
      </View>
    </>
  );
};

export default BooksScreen;
