import React from 'react';
import { Text, View, FlatList } from 'react-native';

import { useDictionary } from '../../../slice/translates/selectors';
import { ListItem } from './List/ListItem';

export const HistoryScene = () => {
  const history = useDictionary();

  const filterEmpty = history.dictionary.filter((el) => {
    return el !== null && typeof el !== 'undefined';
  });

  console.log('FILTERED HISTORY', filterEmpty);

  return (
    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
      <FlatList
        data={filterEmpty}
        renderItem={({ item }) => <ListItem {...item} />}
      />
    </View>
  );
};
