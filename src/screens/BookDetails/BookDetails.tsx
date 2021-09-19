import React from 'react';
import { FlatList, Image, ScrollView, View } from 'react-native';

import { Card, DefaultHeader, Separator, Typography } from '../../components';

import styles from './styles';
import { colors } from '../../utils/theme';
import { goToScreen } from '../../navigation/controls';

const ListItem = ({ item, title, cover }: { item: Book; title: string; cover: string }) => (
  <Card
    onPress={() => goToScreen('BookDetails', item)}
    text={title}
    imageURL={cover}
    withBackground={false}
    textSize={7}
    width={'27%'}
  />
);

const renderFlatlistItem = ({ item }: { item: Book }) => (
  <ListItem item={item} title={item.title} cover={item.book_covers[0].URL} />
);

// @ts-ignore
const BookDetailsScreen = ({ route }) => {
  const Book = route.params;

  const SubDataBook = (title: string, info) => {
    return (
      <View style={styles.dataBook}>
        <Typography variant="bold" size={15}>
          {title}
        </Typography>
        <Typography size={15}>{info}</Typography>
        <Separator size={5} />
      </View>
    );
  };

  let lorem = 'Sinopsys: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  const reducer = (previousValue, currentValue) => previousValue + ', ' + currentValue;

  const otherBooks = Book.otherBooks.filter((book: Book) => Book.title !== book.title);
  console.log(otherBooks);

  return (
    <>
      <DefaultHeader showBackButton={false} showImage={true} />
      <View style={styles.mainContainer}>
        <Separator size={10} />
        <View style={styles.bookTitle}>
          <Typography variant="bold" size={22} color={colors.primaryColor} align="center">
            {Book.title}
          </Typography>
        </View>
        <Separator size={10} />
        <View style={styles.bookPrimaryInfo}>
          <Image source={{ uri: Book.book_covers[0].URL }} style={styles.image} />
          <View style={styles.textBox}>
            {SubDataBook('Author', Book.author)}
            {SubDataBook('Publish Date', Book.publish_date[0].UK)}
            {SubDataBook('Plot Take-place years', Book.plot_take_place_years.reduce(reducer))}
          </View>
        </View>
        <Separator size={10} />
        <View style={styles.sinopsys}>
          <ScrollView>
            <Typography>{lorem}</Typography>
          </ScrollView>
        </View>
        <Separator size={10} />
        <View style={{ alignSelf: 'flex-start', marginLeft: '5%' }}>
          <Typography size={15} variant="bold" color={colors.primaryColor}>
            Other Books:
          </Typography>
        </View>
        <View style={styles.flatListStyle}>
          <FlatList
            horizontal
            data={otherBooks}
            renderItem={renderFlatlistItem}
            ItemSeparatorComponent={() => {
              return <Separator isHorizontal size={0} />;
            }}
          />
        </View>
      </View>
    </>
  );
};

export default BookDetailsScreen;
