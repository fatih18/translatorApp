import React from 'react';
import { View, FlatList } from 'react-native';

import { useDictionary } from '../../../slice/translates/selectors';
import { ListItem } from './List/ListItem';

export const HistoryScene = () => {
  const history = useDictionary();

  const filterEmpty = history.dictionary.filter((el) => {
    return el !== null && typeof el !== 'undefined';
  });

  return (
    <View style={{ flex: 1, backgroundColor: 'transparent', padding: 20 }}>
      <FlatList
        data={filterEmpty}
        renderItem={({ item, index }) => (
          <ListItem index={index + 1} item={item} />
        )}
      />
    </View>
  );
};
