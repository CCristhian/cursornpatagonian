import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Alert, Modal, Pressable, SectionList, Text, TouchableOpacity, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import { AlertModal, DefaultButton, DefaultHeader, Separator, Typography } from '../../components';
import styles from './styles';

import { goToScreen } from '../../navigation/controls';
import { colors } from '../../utils/theme';
import useCharactersData from './hooks/useCharacterData';
import Character from '.';
import { Function, jsxElement } from '@babel/types';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const HeaderSection = (title: string) => (
  <View style={styles.headerSection}>
    <Typography size={20} numberOfLines={3} variant="bold">
      {title}
    </Typography>
  </View>
);

const ListItem = (item: Character) => {
  const state = {
    modalVisible: false,
  };

  return (
    <>
      <View style={styles.listItem}>
        <Typography size={15}>{item.name}</Typography>
        <DefaultButton
          onPress={() => {
            state.modalVisible = true;
          }}
          text="+"
          textSize={15}
          additionalStyle={{ position: 'absolute', right: 1, width: 20, height: 20, marginTop: 0 }} />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          state.modalVisible = !state.modalVisible;
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => (state.modalVisible = !state.modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

const flatlistKeyExtractor = (item: AgrupedList, index: number) => `${item.title}+${index}`;

interface AgrupedList {
  title: string;
  data: Character[];
}

const CharacterScreen = () => {
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const { characters, loading, errorOccurred } = useCharactersData(refreshFlag);
  const [refresh, setRefres] = useState<boolean>(false);
  const [mainCharacters, setMaincharacters] = useState<AgrupedList[]>([]);

  const netInfo = useNetInfo();

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

  //let mainCharacters: AgrupedList[] = [];

  const changeArrange = (index: number) => {
    switch (index) {
      case 1:
        //mainCharacters = mainCharactersBySpecie;
        setMaincharacters(mainCharactersBySpecie);
        setRefres(!refresh);
        break;
      case 2:
        //mainCharacters = mainCharactersByGroup;
        setMaincharacters(mainCharactersByGroup);
        setRefres(!refresh);
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
        <Separator size={20} />
        <Typography size={25} variant="bold" color={colors.primaryColor}>
          MAIN CHARACTERS
        </Typography>
        <Separator size={10} />
        <Typography size={17} variant="bold" color={colors.primaryColor}>
          Arranged by:
        </Typography>
        <View style={styles.buttons}>
          <DefaultButton onPress={() => changeArrange(1)} text="Specie" />
          <Separator isHorizontal size={20} />
          <DefaultButton onPress={() => changeArrange(2)} text="Group" />
        </View>
        <Separator size={20} />
        <View style={styles.sectionList}>
          <SectionList
            sections={mainCharacters}
            keyExtractor={flatlistKeyExtractor}
            renderItem={({ item }) => ListItem(item)}
            renderSectionHeader={({ section: { title } }) => HeaderSection(title)}
            refreshing={loading}
            extraData={refresh}
          />
        </View>
      </View>
    </>
  );
};

export default CharacterScreen;
