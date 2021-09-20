import React, { useCallback, useState } from 'react';
import { ActivityIndicator, SectionList, Text, TouchableOpacity, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import { DefaultButton, DefaultHeader, Separator, Typography } from '../../components';
import styles from './styles';

import { goToScreen } from '../../navigation/controls';
import { colors } from '../../utils/theme';
import useCharactersData from './hooks/useCharacterData';
import Character from '.';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


const ListItem = ({ id, title }: { id: number; title: string }) => (
  <TouchableOpacity
    onPress={() => goToScreen('BookDetails', { id, title })}
    style={styles.listItemContainerShadow}
  >
    <View style={styles.listItemContainer}>
      <Typography numberOfLines={2} align="center">
        {title}
      </Typography>
    </View>
  </TouchableOpacity>
);

const flatlistKeyExtractor = (item: AgrupedList, index: number) => `${item.title}+${index}`;

const renderFlatlistItem = ({ item }: { item: Character }) => (
  <ListItem id={item.id} title={item.name} />
);

interface AgrupedList {
  title: string;
  data: Character[];
}

const CharacterScreen = () => {
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const { characters, loading, errorOccurred } = useCharactersData(refreshFlag);

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

  let mainCharactersBySpecie: AgrupedList[] = [];
  let mainCharactersByGroup: AgrupedList[] = [];

  characters.forEach((character) => {
    if (character.books_featured_in.length > 6) {
      let agrupedSpecieList = mainCharactersBySpecie.find(
        (agrupedList) => agrupedList.title === character.species,
      );
      if (agrupedSpecieList === undefined) {
        agrupedSpecieList = {
          title: character.species,
          data: [character],
        };
        mainCharactersBySpecie.push(agrupedSpecieList);
      } else {
        agrupedSpecieList.data.push(character);
      }
      // segunda parte
      let families = character.associated_groups;
      families.forEach((group: string) => {
        let agrupedGroupList = mainCharactersByGroup.find(
          (agrupedList) => agrupedList.title === group,
        );
        if (agrupedGroupList === undefined) {
          agrupedGroupList = {
            title: group,
            data: [character],
          };
          mainCharactersByGroup.push(agrupedGroupList);
        } else {
          agrupedGroupList.data.push(character);
        }
      });
    }
  });

  let mainCharacters: AgrupedList[] = [];
  let refresh: boolean = false;

  const changeArrange = (index: number) => {
    switch (index) {
      case 1:
        mainCharacters = mainCharactersBySpecie;
        refresh = !refresh;
        break;
      case 2:
        mainCharacters = mainCharactersByGroup;
        refresh = true;
        break;
    }
  };

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

  return (
    <>
      <DefaultHeader showBackButton={false} showImage={true} />
      <View style={styles.mainContainer}>
        <Typography size={25} variant="bold" color={colors.primaryColor}>
          MAIN CHARACTERS
        </Typography>
        <Separator size={20} />
        <Typography size={17} variant="bold" color={colors.primaryColor}>
          Arranged by:
        </Typography>
        <DefaultButton onPress={() => changeArrange(1)} text="Specie" />
        <DefaultButton onPress={() => changeArrange(2)} text="Group" />
        <Separator size={20} />
        <SectionList
          sections={mainCharacters}
          keyExtractor={flatlistKeyExtractor}
          renderItem={({ item }) => <Item title={item.name} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
          refreshing={loading}
          ListEmptyComponent={
            <Typography size={30} variant="bold" color={colors.primaryColor}>
              Lista Vacia
            </Typography>
          }
          extraData={refresh}
        />
      </View>
    </>
  );
};

export default CharacterScreen;
