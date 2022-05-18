import React, { useState, useRef, useEffect } from 'react';

import { View, Text } from 'react-native';

interface ListItemProps {
  index: number;
  item: string;
}

export const ListItem = (props: ListItemProps) => {
  console.log('props', props);
  return (
    <View style={{ height: 50 }}>
      <Text>
        {props.index}. {props.item}
      </Text>
    </View>
  );
};
